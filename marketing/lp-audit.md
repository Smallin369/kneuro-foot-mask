# Landing Page Audit — kneuro.store (Mobile)

**Audited:** 2026-04-28
**Viewport:** 414×896 (iPhone 11 Pro size — most common for Meta ad clicks)
**Page:** kneuro.store homepage (= your ad landing page)
**Total page height:** 9114px = ~10–11 phone screens

---

## The single biggest conversion killer

**Time to first visible price: ~5 scrolls. Time to first Buy button: ~7 scrolls.**

Cold traffic from a $51 CPM ad lands on an article and has to scroll 5 phone-screens before seeing a price. Most leave before they get there. **This is why your 14 LP views generated 0 ATC** — the ATC button is invisible to most visitors.

---

## What's working ✅

1. **Strong advertorial headline** — "$90 pedicure didn't work. A goat milk mask did."
2. **Article framing** with byline ("Sarah K., April 26 2026") — adds story credibility
3. **Trust signals above fold** — Pregnancy-safe, Derm-tested, 30-day refund
4. **Clear bundle pricing** — 1/3/5 pack with savings shown
5. **MOST POPULAR tag** on 3-pack — proven anchoring tactic
6. **Free shipping incentive** on 5-pack
7. **Real review with verified buyer badge**
8. **Scarcity bar at top** — "LIMITED TIME · 30% OFF 3-PACK"
9. **Mobile-optimized layout** — no horizontal scroll, readable type sizes

---

## What's killing conversions 🚨

### Priority 1 — STICKY CTA IS MISSING (built but not wired)

Your `sections/sticky-mobile-cta.liquid` exists. It's referenced in `index.json` and `page.advertorial.json`. But the DOM check shows no sticky CTA element on the live page. It's broken or disabled.

**Fix:** Verify the sticky CTA section is enabled in the theme customizer for the homepage. Check `index.json` for the sticky-mobile-cta block — if it's there but `disabled: true`, flip it.

**Expected impact:** 30–50% lift in mobile conversion. This is the single highest-ROI fix you can make tonight.

### Priority 2 — No price or CTA above the fold

First view of the page shows article-style content, no price, no Buy button. Cold traffic doesn't know what they're committing to.

**Fix:** Add a small "From $14/pack →" button directly under the trust-signals row that scroll-jumps to the bundle picker. Or move the bundle picker much higher up the page (after the hero image, not at 75% scroll).

### Priority 3 — Hero image shows CINDYNAL packaging

The first thing visitors see is the original supplier brand. This:
- Triggers "this is a dropship" suspicion
- Customers can Google CINDYNAL and find it cheaper
- Undermines premium pricing of $19.99–$69.99 bundles

**Fix:** Replace hero image with one of:
- Side-by-side before/after foot shot (highest converting in beauty)
- Smooth foot result close-up
- Product shot tightly cropped so packaging brand is not readable
- Video loop of the wearing-mask POV (your AI clip)

### Priority 4 — Page is too long for cold traffic (9114px)

10–11 phone screens is too much for a cold visitor to commit to. They came from a 19-second ad — they're not reading 5,000 words.

**Fix:** Either:
- **Compress the page** to ~6 screens (cut redundant testimonials, condense the article)
- **Add a "Skip to bundles →"** anchor link at the very top below the scarcity bar
- **Repeat the buy CTA** at 25%, 50%, 75% scroll points so impatient visitors can buy whenever they're ready

### Priority 5 — No urgency in the buy section itself

The MOST POPULAR badge is good but there's no countdown, stock indicator, or expiring offer at the actual point of decision.

**Fix:** Add to the 3-pack tier:
- "12 sold today" (real or simulated)
- "Sale ends in [countdown timer]"
- "Only X left at this price"

Even soft urgency lifts conversion 8–15%.

---

## Quick wins (do all 5 in 30 minutes, $0 cost)

1. **[5 min]** Enable sticky mobile CTA in theme customizer
2. **[10 min]** Add anchor button under trust signals: `<a href="#bundles">From $14 / pack →</a>`
3. **[5 min]** Replace hero image with the smooth-foot AI shot you already generated (`12-foot-after.png`)
4. **[5 min]** Add countdown or "X sold today" text above the 3-pack tier
5. **[5 min]** Test the page on your own phone in Safari Private mode — time how long before YOU see the price

---

## Medium-effort fixes (1–2 hours each)

- **Trim the article** to half its length — keep the hook, story, science, social proof, but cut redundant sections
- **Replace top review** with a verified before/after photo review instead of the foot-with-flip-flops shot
- **Add "Pregnancy-safe ✓" near 3-pack price** since pregnant women are a high-intent niche
- **Add an exit-intent popup** with 10% off code to capture abandoning visitors
- **Add Klarna/Afterpay messaging** — "Only $5/pack with Klarna" — lowers price psychological barrier

---

## Things NOT to fix (don't waste time)

- The advertorial format itself — it's the right structure for cold traffic
- The bundle pricing tiers — solid as-is
- The trust signals — strong
- The header/branding — clean enough
- Add-to-cart flow itself — checkout was likely fine, problem is people never reach it

---

## Test methodology

After making the fixes, do this:
1. Open kneuro.store on your phone
2. Safari Private mode (no cookies)
3. **Time how many seconds it takes from page load until you see a price**
4. **Count scrolls to first Buy button**
5. If price is not visible in first 3 seconds + 1 scroll, the LP is still broken.

---

## Forecast

If you fix Priorities 1–3 (sticky CTA, above-fold price, hero image):
- **Conservative estimate:** 3–5% LP→ATC conversion (you'd get ~1 ATC per 25 LP views)
- **Realistic estimate:** 5–8% LP→ATC (you'd get 1 ATC per 12–20 LP views)
- **Best case:** 8–12% LP→ATC

At your current $51 CPM and 1.4% link CTR, that's roughly **1 ATC per $35–70 spent**, with conversion-to-purchase typically 30–50% of ATCs. So break-even on $20/day requires the LP to be doing this work.

The ad is already getting people to click. The LP has to convert them.
