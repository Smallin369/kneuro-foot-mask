/* ============================================================
   Kneuro theme — vanilla JS for PDP interactions
   ============================================================ */

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
    });
  });
})();

// ---------- Gallery thumbnail swap (crossfade) ----------
(function gallerySwap() {
  const thumbs = document.querySelectorAll('.gallery-thumbs .th');
  const main = document.getElementById('galleryMain');
  if (!thumbs.length || !main) return;

  if (!main.dataset.gsInit) {
    main.dataset.gsInit = '1';
    main.style.position = main.style.position || 'relative';
    main.querySelectorAll('img, video').forEach((el) => {
      el.classList.add('gs-layer', 'is-active');
    });
  }

  let busy = false;
  thumbs.forEach((t) => {
    t.addEventListener('click', () => {
      if (busy) return;
      const src = t.dataset.src;
      if (!src) return;
      const type = t.dataset.type;

      thumbs.forEach((x) => x.classList.remove('active'));
      t.classList.add('active');

      const current = main.querySelector('.gs-layer.is-active');
      if (current && current.dataset.src === src) return;

      busy = true;
      let next;
      if (type === 'video') {
        next = document.createElement('video');
        next.src = src;
        next.autoplay = true;
        next.muted = true;
        next.loop = true;
        next.playsInline = true;
      } else {
        next = document.createElement('img');
        next.src = src;
        next.alt = '';
      }
      next.dataset.src = src;
      next.classList.add('gs-layer');
      main.appendChild(next);

      const reveal = () => {
        requestAnimationFrame(() => {
          next.classList.add('is-active');
          if (current) current.classList.remove('is-active');
          const cleanup = () => {
            if (current && current.parentNode) current.parentNode.removeChild(current);
            busy = false;
          };
          setTimeout(cleanup, 420);
        });
      };

      if (next.tagName === 'IMG' && !next.complete) {
        next.addEventListener('load', reveal, { once: true });
        next.addEventListener('error', reveal, { once: true });
      } else {
        reveal();
      }
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
