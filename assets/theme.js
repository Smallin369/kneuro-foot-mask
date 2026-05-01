/* ============================================================
   Kneuro theme — vanilla JS for PDP interactions
   ============================================================ */

// ---------- AJAX add-to-cart with confirm modal → straight to checkout ----------
(function ajaxAtc() {
  const form = document.getElementById('ProductForm');
  if (!form) return;

  // Build modal once
  let modal = document.getElementById('atcModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'atcModal';
    modal.className = 'atc-modal';
    modal.innerHTML = [
      '<div class="atc-modal__backdrop" data-atc-close></div>',
      '<div class="atc-modal__panel" role="dialog" aria-labelledby="atcTitle" aria-modal="true">',
      '  <button class="atc-modal__close" type="button" data-atc-close aria-label="Close">×</button>',
      '  <div class="atc-modal__check">✓</div>',
      '  <h3 id="atcTitle" class="atc-modal__title">Added to cart</h3>',
      '  <p class="atc-modal__line" id="atcLine"></p>',
      '  <div class="atc-modal__summary" id="atcSummary"></div>',
      '  <div class="atc-modal__actions">',
      '    <button type="button" class="atc-modal__btn atc-modal__btn--ghost" data-atc-close>Keep shopping</button>',
      '    <button type="button" class="atc-modal__btn atc-modal__btn--primary" data-atc-checkout>Checkout now →</button>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(modal);

    const close = () => {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-atc-close]')) close();
      if (e.target.closest('[data-atc-checkout]')) {
        window.location.href = '/checkout';
      }
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  const fmt = (cents, currency) => {
    try {
      return new Intl.NumberFormat(undefined, { style: 'currency', currency: currency || 'USD' }).format((cents || 0) / 100);
    } catch (e) {
      return '$' + ((cents || 0) / 100).toFixed(2);
    }
  };

  const open = async (item) => {
    const line = document.getElementById('atcLine');
    const summary = document.getElementById('atcSummary');
    const title = item.product_title || item.title || 'Item';
    const variantTitle = item.variant_title && item.variant_title !== 'Default Title' ? item.variant_title : '';
    const qty = item.quantity || 1;
    const unitPrice = item.price || 0;
    const linePrice = item.final_line_price || item.line_price || (unitPrice * qty);

    if (line) {
      line.innerHTML = '<strong>' + title + '</strong>' +
        (variantTitle ? '<span class="atc-modal__variant">' + variantTitle + '</span>' : '');
    }
    if (summary) summary.innerHTML = '<div class="atc-modal__row"><span>Loading cart total…</span></div>';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    try {
      const cart = await fetch('/cart.js', { headers: { 'Accept': 'application/json' } }).then(r => r.json());
      const cur = cart.currency;
      const itemCount = cart.item_count || 0;
      const subtotal = fmt(cart.items_subtotal_price || cart.original_total_price || cart.total_price, cur);
      const totalDiscount = (cart.original_total_price || 0) - (cart.total_price || 0);
      const grand = fmt(cart.total_price, cur);
      let html = '';
      html += '<div class="atc-modal__row"><span>' + fmt(unitPrice, cur) + ' × ' + qty + (variantTitle ? ' &nbsp;·&nbsp; ' + variantTitle : '') + '</span><strong>' + fmt(linePrice, cur) + '</strong></div>';
      html += '<div class="atc-modal__row"><span>Cart subtotal (' + itemCount + ' item' + (itemCount === 1 ? '' : 's') + ')</span><strong>' + subtotal + '</strong></div>';
      if (totalDiscount > 0) {
        html += '<div class="atc-modal__row atc-modal__row--save"><span>You save</span><strong>−' + fmt(totalDiscount, cur) + '</strong></div>';
      }
      html += '<div class="atc-modal__row atc-modal__row--total"><span>Estimated total</span><strong>' + grand + '</strong></div>';
      html += '<div class="atc-modal__note">Shipping & taxes calculated at checkout · ' + cur + '</div>';
      if (summary) summary.innerHTML = html;
    } catch (err) {
      if (summary) summary.innerHTML = '<div class="atc-modal__note">Couldn\'t load cart total — proceed to checkout for full breakdown.</div>';
    }
  };

  const setLoading = (isLoading) => {
    const btns = form.querySelectorAll('button[type="submit"], [data-sticky-atc]');
    btns.forEach((b) => {
      b.disabled = isLoading;
      b.classList.toggle('is-loading', isLoading);
    });
  };

  // Bridges custom fetch('/cart/add.js') back to Shopify's customer-events pipeline
  // so Web Pixels (incl. the FB & Instagram sales channel pixel) receive AddToCart.
  function publishProductAddedToCart(item) {
    if (!item || !item.variant_id) return;
    if (!window.Shopify || !window.Shopify.analytics || typeof window.Shopify.analytics.publish !== 'function') return;
    const currency = (window.Shopify.currency && window.Shopify.currency.active) || 'USD';
    const unitAmount = ((item.final_price != null ? item.final_price : item.price) || 0) / 100;
    const qty = item.quantity || 1;
    window.Shopify.analytics.publish('product_added_to_cart', {
      cartLine: {
        cost: { totalAmount: { amount: unitAmount * qty, currencyCode: currency } },
        merchandise: {
          id: 'gid://shopify/ProductVariant/' + item.variant_id,
          product: {
            id: 'gid://shopify/Product/' + item.product_id,
            title: item.product_title,
            vendor: item.vendor || '',
            type: item.product_type || '',
            untranslatedTitle: item.product_title
          },
          title: item.variant_title || '',
          price: { amount: unitAmount, currencyCode: currency },
          sku: item.sku || ''
        },
        quantity: qty
      }
    });
  }
  // Expose for cart-drawer (which has its own fetch flow)
  window.publishProductAddedToCart = publishProductAddedToCart;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData(form);
      const res = await fetch('/cart/add.js', { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } });
      if (!res.ok) throw new Error('add failed');
      const item = await res.json();
      publishProductAddedToCart(item);
      open(item);
    } catch (err) {
      // Fallback to default form post
      form.removeEventListener('submit', arguments.callee);
      form.submit();
    } finally {
      setLoading(false);
    }
  });
})();

// ---------- Bundle / variant picker ----------
(function bundlePicker() {
  const bundles = document.querySelectorAll('.bundle');
  if (!bundles.length) return;

  const variantIdInput = document.getElementById('variantId');
  const priceLabel = document.getElementById('priceLabel');
  const ctaPrice = document.getElementById('ctaPrice');
  const stickyPrice = document.getElementById('stickyPrice');
  const stickyVariantLabel = document.getElementById('stickyVariantLabel');
  const atcBtn = document.getElementById('atcBtn');

  bundles.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (el.classList.contains('unavailable')) return;
      const variantId = el.dataset.variantId;
      const price = el.dataset.price;
      const title = el.querySelector('.bundle-title')?.textContent?.trim();

      bundles.forEach((b) => b.classList.remove('selected'));
      el.classList.add('selected');

      const radio = el.querySelector('.radio-input');
      if (radio) radio.checked = true;

      if (variantIdInput) variantIdInput.value = variantId;
      if (priceLabel) priceLabel.textContent = price;
      if (ctaPrice) ctaPrice.textContent = price;
      if (stickyPrice) stickyPrice.textContent = price;
      if (stickyVariantLabel && title) stickyVariantLabel.textContent = title;

      // Update URL with variant param (Shopify convention)
      const url = new URL(window.location);
      url.searchParams.set('variant', variantId);
      window.history.replaceState({}, '', url);

      // Swap gallery: prefer matching gallery thumbnail by variant index, fallback to variant featured_image
      const main = document.getElementById('galleryMain');
      const thumbs = document.querySelectorAll('.gallery-thumbs .th');
      const idx = parseInt(el.dataset.variantIndex, 10);
      const variantImg = el.dataset.image;
      let targetThumb = (!isNaN(idx) && thumbs[idx]) ? thumbs[idx] : null;
      if (!targetThumb && variantImg) {
        targetThumb = Array.from(thumbs).find((t) => t.dataset.src === variantImg);
      }
      if (targetThumb) {
        targetThumb.click();
      } else if (variantImg && main) {
        main.querySelectorAll('img, video').forEach((n) => n.remove());
        const next = document.createElement('img');
        next.src = variantImg; next.alt = '';
        next.classList.add('gs-fresh');
        main.appendChild(next);
      }
    });
  });
})();

// ---------- Gallery: crossfade swap + click-to-zoom lightbox ----------
(function galleryEnhance() {
  const main = document.getElementById('galleryMain');
  if (!main) return;
  main.style.position = main.style.position || 'relative';

  // Lightbox singleton
  let lightbox = document.getElementById('gsLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'gsLightbox';
    lightbox.className = 'gs-lightbox';
    lightbox.innerHTML = '<button class="gs-lightbox-close" type="button" aria-label="Close">×</button>';
    document.body.appendChild(lightbox);
    const close = () => {
      lightbox.classList.remove('is-open');
      const m = lightbox.querySelector('img, video');
      if (m) m.remove();
      document.body.style.overflow = '';
    };
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('gs-lightbox-close')) close();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  const openLightbox = (src, type) => {
    const old = lightbox.querySelector('img, video');
    if (old) old.remove();
    let el;
    if (type === 'video') {
      el = document.createElement('video');
      el.src = src; el.controls = true; el.autoplay = true; el.playsInline = true;
    } else {
      el = document.createElement('img');
      el.src = src; el.alt = '';
    }
    lightbox.appendChild(el);
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  // Click main image → lightbox at full resolution
  main.addEventListener('click', (e) => {
    const target = e.target.closest('img, video');
    if (!target) return;
    const src = target.currentSrc || target.src;
    openLightbox(src, target.tagName === 'VIDEO' ? 'video' : 'img');
  });

  // Thumbnail swap (instant, reliable; CSS handles a subtle fade via .gs-fresh class)
  const thumbs = document.querySelectorAll('.gallery-thumbs .th');
  if (!thumbs.length) return;

  thumbs.forEach((t) => {
    t.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const src = t.dataset.src;
      if (!src) return;
      const type = t.dataset.type;

      thumbs.forEach((x) => x.classList.remove('active'));
      t.classList.add('active');

      // Preserve badges
      const badges = Array.from(main.querySelectorAll('.gallery-badge, .heart-badge'));
      main.querySelectorAll('img, video').forEach((el) => el.remove());

      let next;
      if (type === 'video') {
        next = document.createElement('video');
        next.src = src; next.autoplay = true; next.muted = true; next.loop = true; next.playsInline = true;
      } else {
        next = document.createElement('img');
        next.src = src; next.alt = '';
      }
      next.classList.add('gs-fresh');
      main.appendChild(next);
    });
  });
})();

// ---------- Sticky ATC on scroll ----------
(function stickyATC() {
  const sticky = document.getElementById('stickyATC');
  const atcBtn = document.getElementById('atcBtn');
  const stickyBtn = document.getElementById('stickyAtcBtn');
  if (!sticky || !atcBtn) return;

  const check = () => {
    const rect = atcBtn.getBoundingClientRect();
    if (rect.bottom < 0) sticky.classList.add('shown');
    else sticky.classList.remove('shown');
  };
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check, { passive: true });
  check();

  if (stickyBtn) {
    stickyBtn.addEventListener('click', () => {
      const formId = stickyBtn.dataset.form || 'ProductForm';
      const form = document.getElementById(formId);
      if (form) form.requestSubmit();
    });
  }
})();

// ---------- Cart count live-update after add ----------
(function cartCountUpdate() {
  const form = document.getElementById('ProductForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    // Let Shopify's default submission happen (redirects to /cart).
    // But if we want a fetch-based add later, this is the hook.
  });
})();
// Mon 27 Apr 2026 02:46:36 +08
