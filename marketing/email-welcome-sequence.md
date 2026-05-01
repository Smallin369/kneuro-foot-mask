# Kneuro Welcome Email Sequence

Five-email sequence triggered when someone submits the exit-intent popup OR signs up via the footer newsletter. Designed for Klaviyo / Shopify Email / Mailchimp — paste copy directly into your ESP's email editor.

**Goal:** convert popup signups (high-intent abandoning visitors) to first purchase within 7 days. Industry benchmark: 15-25% of capture → first purchase from a sequence like this. Without a sequence, single welcome emails convert 2-5%.

**Trigger:** customer tagged with `newsletter` AND/OR `exit-popup` (the popup applies both tags). Wait condition: customer has not made a purchase.

**Exit condition:** if the customer purchases at any step, exit them from the rest of the sequence and route to the post-purchase flow.

**Tone:** first-person, conversational, no marketing jargon. Plain text emails outperform image-heavy templates for transactional/welcome sequences.

---

## Email 1 — "Here's your code" (immediate, on signup)

**Subject options (A/B test):**
- A: `Your 10% off, as promised`
- B: `WELCOME10 — and the story behind why we sell only one thing`

**Preview text:** Drop this code at checkout. No minimum. No expiry tricks.

**From:** Sarah at Kneuro (or whoever the founder is)
**Reply-to:** founder email, not no-reply

**Body:**

```
Hi [first name | there],

Thanks for the email. As promised, here's your code:

WELCOME10 — 10% off your first order, no minimum.

Drop it in at checkout: [SHOP URL]/products/goat-milk-callus-mask

Quick context on why we made this — most foot peels on the shelf
are built around glycolic and salicylic acid. They work, but they
aren't pregnancy-safe, they sting on sensitive skin, and they
force you out of sandals for a week while sheets of skin come off.

We made a 30-minute mask that softens heels without any of that.
Goat milk, niacinamide, glycerin, allantoin. That's it.

If you have a question — about ingredients, pregnancy, diabetes,
anything — just reply. I read every email.

Sarah
Kneuro

P.S. The code works on every variant including the 3-pack and
5-pack. Most customers grab the 3-pack and free shipping kicks
in automatically.
```

**Send delay:** immediate
**Tag on send:** `welcome-1-sent`

---

## Email 2 — "Why I sound weird about foot peels" (Day 1, ~24h later)

**Subject options:**
- A: `the foot peel my dermatologist begged me to stop using`
- B: `4,000 years before Baby Foot, there was goat milk`

**Preview:** A short story about how this whole thing started.

**Body:**

```
Real quick — when I was pregnant with my first kid I tried to use
a Baby Foot peel because my heels were cracked open from the swelling.

My dermatologist saw the box and said "absolutely not."

Salicylic acid. Pregnancy class C. Same with the glycolic acid
in most foot peels. Same with most "intensive" foot creams.

I tried lotion. Tried Vaseline socks. Tried that callus shaver
thing. Nothing worked because nothing was actually breaking down
the dead, callused skin.

Then a friend sent me a video of a goat milk foot mask.
Looked like a soft sock filled with milk. A gentler approach to
softening cracked heels — no salicylic acid, no glycolic acid,
no peeling phase, no burning.

Goat milk has lactic acid in it. Real lactic acid, occurring
naturally, like a thousandth the strength of glycolic. The same
thing dermatologists prescribe for keratosis and eczema. The same
thing Cleopatra used for her skin (real story — Egyptian milk baths).

I ordered one for $25 and my heels were soft in 30 minutes.

That's the whole origin story. We worked with a contract
manufacturer who specializes in this category and brought it
to customers under the Kneuro name — goat milk lactic acid,
niacinamide for barrier repair, glycerin, and allantoin.
That's the whole formula.

If that sounds like the kind of skincare logic you can get behind,
WELCOME10 is still good at checkout.

Sarah
```

**Send delay:** 24 hours after Email 1
**Exit if:** customer purchased

---

## Email 3 — "What's actually in it" (Day 3)

**Subject:** `Four ingredients. That's the whole list.`
**Preview:** No "proprietary blend." No fragrance. No oils. Just these four.

**Body:**

```
A lot of skincare brands talk about "clean ingredients" and then
show you a 47-ingredient list with hexyl this and methylparaben that.

Here's our entire formula:

→ Goat milk
   Naturally rich in lactic acid (the gentle keratolytic),
   plus vitamin A and protein. Softens callused skin without
   stripping the barrier.

→ Niacinamide (5%)
   Vitamin B3. The reason rough patches look visibly smoother
   after one use, not just hydrated. Strengthens the skin barrier.

→ Glycerin
   A humectant — pulls water from the air into your skin.
   The hydration sticks around after the mask comes off.

→ Allantoin
   Derived from comfrey. Soothes irritation. Why cracked heels
   feel calm instead of stinging.

That's it. No salicylic acid, no glycolic acid, no fragrance,
no essential oils, no parabens, no sulfates, no PEGs.

Pregnancy-safe. Diabetes-safe. Eczema-safe.

Read the full ingredient deep-dive: [SHOP URL]/pages/ingredients

WELCOME10 still works.

Sarah
```

**Send delay:** 48 hours after Email 2 (Day 3)
**Exit if:** customer purchased

---

## Email 4 — "What happens in 30 minutes" (Day 5)

**Subject:** `before/after, no filters`
**Preview:** Three customers, three sets of feet, one mask.

**Body:**

```
The thing that surprised me most when we started shipping Kneuro
was how often people sent us before/after photos.

I'll just share three.

[INSERT 3 BEFORE/AFTER IMAGES HERE — pull from Shopify shop_images
or your testimonial section. Add ALT text describing each.]

Maria, 32, San Diego (3rd trimester):
"My feet felt human again. I cried."

Janelle, 41, Chicago (Type 2 diabetic):
"First foot product my podiatrist actually approved."

Tom, 56, Phoenix (construction):
"My wife stopped complaining about my heels in bed. Worth it
just for that."

We don't filter the photos. We don't pay for these. People just
send them when something works.

If you want to see your own version of this in 30 minutes,
WELCOME10 is still good at checkout.

[BUTTON: Try the mask] → /products/goat-milk-callus-mask

Sarah
```

**Send delay:** 48 hours after Email 3 (Day 5)
**Exit if:** customer purchased

---

## Email 5 — "Last note" (Day 7, soft urgency)

**Subject options:**
- A: `last note from me`
- B: `your code expires tomorrow (no fake countdown)`

**Preview:** Then I'll stop emailing you.

**Body:**

```
Quick note before I let you out of my inbox.

Your WELCOME10 code expires in 24 hours. No fake countdown,
no scarcity tricks — it just rolls off because we recycle codes
and don't want them sitting in random inboxes forever.

If the foot mask isn't for you, completely fine. Just hit reply
and I'll take you off the welcome list (no algorithm, I do it
manually).

If you want to use the code one last time:
[BUTTON: Use my code] → /products/goat-milk-callus-mask

A few things people often ask before pulling the trigger:

→ Free US shipping kicks in at $30 (the 3-pack and 5-pack qualify).
→ 30-day money-back, no questions, even if you've used one.
→ The mask works on hands, elbows, knees too — same formula.
→ One mask = one 30-minute session. Most customers do it 1-2x/month.

If you've got a question and you'd rather just ask, just reply.
I'll see it.

Sarah
Kneuro
```

**Send delay:** 48 hours after Email 4 (Day 7)
**Exit if:** customer purchased

---

## Optional Email 6 — "Last chance, real" (Day 14, win-back)

**Subject:** `if cracked heels are still on the to-do list`
**Body:** softer re-pitch, link to comparison page (`/pages/kneuro-vs-baby-foot`) and ingredients page. Mention you're not going to email them anymore from this list.

---

## Klaviyo / Shopify Email setup notes

1. **Trigger flow:** Customer added to list "Newsletter" OR has tag `exit-popup`
2. **Filters:** Has not placed an order. Skip if `customer_tags contains 'no-marketing'`.
3. **Time delays between emails:** 0h → 24h → 48h → 48h → 48h
4. **Smart sending:** ON. Skip if recipient received a Kneuro email in last 16h.
5. **UTM parameters:** Append `?utm_source=email&utm_medium=welcome&utm_campaign=welcome-N` to every link for analytics.
6. **Unsubscribe footer:** required by CAN-SPAM. Klaviyo/Shopify Email auto-add this.
7. **Sender reputation:** use a from-name with the founder's name + brand. "Sarah at Kneuro <hello@kneuro.store>" beats "Kneuro <newsletter@kneuro.store>" by 5-15% open rate.

## Expected metrics (industry benchmarks for DTC welcome flows)

| Email | Open rate | Click rate | Place-order rate (after this email) |
|---|---|---|---|
| 1 (immediate, code) | 50-65% | 25-35% | 8-15% |
| 2 (story, Day 1) | 35-45% | 8-12% | 3-6% |
| 3 (ingredients, Day 3) | 28-38% | 6-10% | 2-4% |
| 4 (testimonials, Day 5) | 25-32% | 5-8% | 2-4% |
| 5 (last note, Day 7) | 22-30% | 6-12% | 3-7% |

**Total flow conversion to first order:** 18-30% of signups. Without a sequence: 2-5%.

If your numbers are below the low end of these ranges after 200+ signups, the diagnosis is usually:
- Subject lines too clever (open rate problem)
- Hero image breaks above the fold (click rate problem)
- Code redemption friction at checkout (place-order problem — check the discount config in admin)
