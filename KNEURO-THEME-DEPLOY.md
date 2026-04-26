# Kneuro theme v1 — deployment guide

Ship order. Each step is short.

---

## 1. Upload theme as draft (2 min)

1. Shopify admin → **Online Store → Themes**.
2. Theme library → **Add theme → Upload zip file** → pick `kneuro-theme.zip`.
3. Don't publish. Click **Customize** on the new draft.
4. Top-left of customizer — verify it says "Kneuro" (the new theme, not the old live one).

## 2. Add product variants (5 min)

FurGone needs 3 variants for the bundle picker:

1. Admin → **Products → FurGone Gloves**.
2. If there's only one variant: scroll to **Variants** → **Add options like size or color**.
3. Option name: `Pack`. Values: `1-Pack`, `2-Pack`, `3-Pack`.
4. Prices: `$29.99`, `$49.99`, `$64.99`.
5. (Optional) Compare-at prices: `$39.99`, `$69.99`, `$89.99` — adds "Save $X" badges.
6. (Optional) Each variant's subtitle via metafield `custom.subtitle` (e.g. "For one pet, one floor" / "One for every room" / "Gift one, keep two") — create the metafield definition under Settings → Custom data if you want this.
7. Set inventory tracking / stock levels.

## 3. Upload product media (5 min)

1. Still on the product page → **Media** section.
2. Delete existing AI-rendered images.
3. Upload in this order (makes the first item the PDP hero):
   - `hero.mp4`
   - `hero-image.jpg`
   - `lifestyle-dog.jpg`
   - `macro-fur.jpg`
   - `demo2.mp4`
4. Save.

The theme's gallery loops `product.media` so whatever you upload here shows up on the PDP automatically.

## 4. Set the homepage featured product (1 min)

1. In the customizer, navigate to **Homepage**.
2. Click section **Featured product** → **Product** dropdown → pick FurGone Gloves.

## 5. Set up the main nav (2 min)

1. Admin → **Online Store → Navigation → Main menu**.
2. Make sure links exist for Shop (→ All products or FurGone product), and optionally About / Reviews / Support.
3. The header auto-populates from this menu.

## 6. Preview test (5 min)

In the customizer preview:
- **Homepage**: hero tagline + featured product card + trust strip + footer.
- **PDP**: gallery with video + thumbnails, title, rating, price, bullets, bundle picker (clicks update price + sticky bar), Add to cart.
- **Bundle picker**: click between variants — price label + sticky-bar price update, URL changes with `?variant=`.
- **Sticky ATC**: scroll past the main button — bottom bar appears.
- **Cart flow**: click Add to cart → lands on `/cart` page with correct variant + quantity → proceeds to checkout.
- **Mobile**: use customizer's device toggle → check gallery + bundles + sticky ATC on small screens.

## 7. Tweak copy/colors if needed (optional)

All text has editable settings:
- Customizer → pick any section → edit headlines, bullets, FAQ questions, etc.
- Theme settings → Colors → adjust palette (defaults match the Kinfolk mockup exactly).
- Theme settings → Typography → Fraunces (headings) + Inter (body) by default; swap to any Shopify font.

## 8. Publish (1 min)

1. Happy? **Online Store → Themes** → draft theme card → **Actions → Publish**.
2. Live store now uses the new theme.

## 9. Post-launch (day-of)

- Install **Judge.me** from Shopify App Store (free) → enable auto review requests 7 days after delivery.
- Install **Klaviyo** (free up to 250 contacts) → turn on Welcome Series + Abandoned Cart default flows.

---

## Rollback

If anything breaks after publishing:
- **Online Store → Themes** → old theme is still in library → **Actions → Publish** to revert.

---

## What's in v1

- Homepage: hero + featured product + trust strip + footer
- PDP: gallery (image/video), title, rating, price, bullets, 3-variant bundle picker, ATC, dynamic checkout buttons (Shop Pay/Klarna/Afterpay render automatically), trust row, why grid, problem block, how-it-works (3 steps), comparison table, 3 quote testimonials, FAQ, final CTA, sticky ATC on scroll
- Cart page (simple list + checkout button)
- 404 page, generic page template, basic collection template
- Theme settings: colors (11 tokens), fonts (2 pickers), brand name, favicon, shipping bar

## What's NOT in v1 (add later if needed)

- Cart drawer (using default cart page instead)
- Customer account pages (Shopify defaults render)
- Newsletter signup (can add a simple `/contact` form to footer)
- Multi-currency / multi-language
- Section/block rotation transforms (stripped for clean look; can add if wanted)

---

## Files shipped

```
kneuro-theme/
├── layout/theme.liquid
├── templates/{index.json, product.json, cart.liquid, page.liquid, 404.liquid, collection.liquid}
├── sections/ (13 sections: header, footer, hero-homepage, featured-product, trust-strip, product-info, why-grid, problem-block, how-it-works, comparison-table, testimonial-quotes, faq, final-cta)
├── snippets/{meta-tags.liquid, icon-cart.liquid}
├── assets/{theme.css, theme.js, hero.mp4, demo2.mp4, hero-image.jpg, lifestyle-dog.jpg, lifestyle-cat.jpg, macro-fur.jpg, step1.jpg, step2.jpg}
├── config/{settings_schema.json, settings_data.json}
└── locales/en.default.json
```

All `{% schema %}` JSON validated. All referenced assets present. Shopify-uploadable.
