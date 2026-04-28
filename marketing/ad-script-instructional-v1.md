# Kneuro Foot Mask — Instructional Ad Script v1

**Format:** 30-second hybrid ad (UGC foot footage + AI-generated "how-to" scenes)
**Platform:** Meta (Facebook/Instagram), 9:16 vertical
**Concept:** Step-by-step demo of how to use the goat milk foot mask, ending in peel-result payoff
**Hook style:** problem-aware POV — "fix your dead skin in one hour"

---

## What You Need to Do (Step-by-Step)

### 1. Pick keepers from your raw footage
- 47 frames extracted to `/tmp/footmask-frames/` (v1_01–v1_26 and v2_01–v2_21)
- **Action:** open the folder, pick the 6–8 cleanest shots — well-lit, clear product visible, no motion blur
- **Move them** to `marketing/ad-frames/` so they don't get wiped on reboot:
  ```
  mkdir -p marketing/ad-frames
  cp /tmp/footmask-frames/v1_05.jpg /tmp/footmask-frames/v2_12.jpg ... marketing/ad-frames/
  ```

### 2. Generate the AI scenes (image-to-video)
- Use **Kling 2.0** or **Runway Gen-4** — both support image-to-video at higher fidelity than text-to-video
- Feed each AI prompt below with its corresponding reference frame
- Render at 5s per scene, 9:16, 24fps
- **Cost note:** ~$0.50–$1.50 per 5s clip on Kling, ~$1–$3 on Runway

### 3. Record the UGC voiceover
- Use your phone's voice memo, indoor quiet room, no music behind it
- Read the lines below conversational, low-effort — NOT advertising voice
- Re-record any line that sounds rehearsed

### 4. Assemble in CapCut / Descript
- Drop the AI clips on V1 timeline
- Cut UGC foot footage on V2 for B-roll (the actual peel/result moments)
- Drop voiceover on A1
- Add captions (auto-transcribe, then style: white text, black stroke, bottom-third)
- Export 1080×1920, MP4, H.264

### 5. Upload to Meta Ads Manager
- Same campaign as your current ads (Apr 27 batch)
- New ad set or duplicate winning one
- Tag in tracking: `utm_content=instructional-v1`

---

## The Script (Scene-by-Scene)

### Scene 1 — Hook (0–3s)
**Visual:** UGC close-up of a rough, dry foot. Slow zoom.
**Voiceover:** "If your feet look like this, you need to try this."
**Text overlay:** *Your feet in 7 days →*

### Scene 2 — Product reveal (3–6s)
**Visual:** AI-generated cinematic shot — hand pulling the goat milk foot mask sachet out of its box on a soft beige surface, golden hour light from window, shallow depth of field.
**Voiceover:** "It's a goat milk foot mask. You wear it for an hour."
**Reference frame:** `v1_03.jpg` (or whichever shot shows the product/box clearest)

### Scene 3 — Step 1, Open (6–10s)
**Visual:** AI-generated — fingers tearing the sachet open, milky liquid visible inside the booty.
**Voiceover:** "Step one — tear it open. There's the serum already inside."
**Text overlay:** *Step 1*
**Reference frame:** product close-up frame

### Scene 4 — Step 2, Slip on (10–14s)
**Visual:** UGC of LO slipping foot into the booty (cut from IMG_1680 or IMG_1681)
**Voiceover:** "Step two — slip it on. Both feet. Sit back for an hour."
**Text overlay:** *Step 2 · 60 min*

### Scene 5 — Step 3, Wait + remove (14–18s)
**Visual:** AI-generated — timelapse-style shot, feet up on couch with mask booties on, phone in hand. Cuts to peeling the booty off.
**Voiceover:** "Take 'em off, rinse, and that's it for now."
**Reference frame:** any feet-up-relaxed frame

### Scene 6 — Payoff, the peel (18–25s)
**Visual:** UGC — the dramatic peeling shot. This is the money scene. Use whichever raw clip shows the most peeling.
**Voiceover:** "Three days later, your dead skin starts coming off in sheets. Yes, sheets. It's disgusting and it's perfect."
**Text overlay:** *Day 3–7*

### Scene 7 — Result + CTA (25–30s)
**Visual:** AI-generated — clean smooth foot side-by-side with a "before" still from UGC. Soft natural light.
**Voiceover:** "Soft baby feet. Link in bio."
**Text overlay:** *Try Kneuro · 30% off first order*
**End card:** logo + URL

---

## AI Video Generation Prompts

### Prompt A — Product reveal (Scene 2)
```
A hand gently pulls a goat milk foot mask sachet out of a pastel cream-colored box,
soft golden hour light streaming from a window left, shallow depth of field,
cinematic 9:16 vertical, slow smooth motion, beige linen surface, dust motes
visible in the light, ASMR product photography aesthetic, 5 seconds, 24fps.
```
Reference frame: pick the cleanest product/packaging shot from `/tmp/footmask-frames/`

### Prompt B — Sachet tear (Scene 3)
```
Close-up macro of fingers tearing open a foil sachet of goat milk foot mask,
milky white serum visible inside the clear booty, soft natural daylight,
shallow depth of field, slight camera handheld feel, 9:16 vertical, 5 seconds, 24fps.
```

### Prompt C — Feet-up timelapse (Scene 5)
```
A person reclines on a beige linen couch with goat milk foot mask booties on
both feet, soft afternoon light, cozy home aesthetic, woolen throw blanket,
phone resting on stomach, time passing slowly, gentle camera push-in,
9:16 vertical, 5 seconds, 24fps.
```

### Prompt D — Final result (Scene 7)
```
Macro shot of a clean, smooth, healthy bare foot resting on cream linen sheet,
soft window light, shallow depth of field, peaceful spa aesthetic,
no text, no overlay, 9:16 vertical, 5 seconds, 24fps.
```

---

## Production Checklist

- [ ] Move keeper frames out of `/tmp/footmask-frames/` to `marketing/ad-frames/`
- [ ] Generate 4 AI clips (Kling or Runway), reference frames attached
- [ ] Record voiceover (1 take per line, conversational)
- [ ] Edit in CapCut/Descript — V1: AI clips, V2: UGC peel/result, A1: voice
- [ ] Add captions (white text, black stroke, bottom-third)
- [ ] Export 1080×1920 MP4
- [ ] Upload to Meta Ads Manager, tag `utm_content=instructional-v1`
- [ ] Run for 48–72hrs at $20/day before deciding cut/scale

---

## How to Generate Maximally Accurate Product Demo Video

The difference between AI slop and a clean product demo is 80% workflow, 20% tool. Follow this exactly.

### 1. Never use text-to-video. Image-to-video only.
Text-to-video will hallucinate your product into a generic version. Image-to-video locks the actual product appearance because it's anchored to a real frame. This is non-negotiable.

### 2. Tool ranking for product accuracy (Apr 2026)
1. **Kling 2.1 Master** — best product fidelity, especially for hand-object interaction. ~$1.40 per 5s. Use this as default.
2. **Hailuo MiniMax 02** — surprisingly strong, cheaper at ~$0.50 per 5s. Use for cheap iteration before committing.
3. **Runway Gen-4 Turbo** — fast but more stylized. Better for cinematic moments than literal product demo.
4. **Veo 3** — highest absolute quality but less control over product accuracy. Use only for hero shot.
5. **Luma Ray 2** — skip for product work. Drifts too much.

### 3. The reference frame protocol (the single most important technique)
Most tools support **start frame + end frame** (Kling calls it "first/last frame"). Use BOTH.
- Start frame: real photo of your product in initial state (sachet sealed)
- End frame: real photo of same product in final state (sachet torn open, serum visible)
- The AI interpolates ONLY the motion between two locked anchors — it cannot drift the product
- This is how you get 95% product accuracy instead of 60%

If you only have one reference frame, the product WILL morph mid-clip.

### 4. Take real product photos first, not AI-generated reference frames
For Scene 2 (product reveal):
- Take 3 actual phone photos: sachet on linen, sachet being picked up, sachet halfway out of box
- Use those as your reference frames — not AI-generated stills
- This is why your 47 extracted frames matter: half the visual fidelity is already done by your camera, not the AI

### 5. Prompt structure for product fidelity
Bad prompt: *"A hand pulls out a foot mask sachet, cinematic"*
Good prompt structure:
```
[Subject motion]: hand enters frame from right, picks up sachet, lifts it slowly toward camera
[Camera]: static camera, no zoom, no pan
[Lighting]: maintain reference frame lighting exactly
[Duration]: 5 seconds, slow deliberate motion
[Constraints]: do not change product appearance, preserve all packaging text and colors,
no morphing, no additional objects appearing
```
Always describe motion + camera + lighting + constraints. Skip mood adjectives — they cause drift.

### 6. Camera rules
- **Static camera beats moving camera every time** for product work. Moving cameras compound AI error per frame.
- If you need motion, ask for "slow push-in 5%" — not "dramatic zoom"
- No tilts, no rotations, no orbits. Those are where products morph.

### 7. Length: 5 seconds, never 10
Most tools degrade noticeably after 5s. The product starts to morph, hands grow extra fingers, packaging text dissolves. If you need 8s of motion, generate two 5s clips with overlapping anchor frames and cut them together.

### 8. Iteration economics
- Generate **4–6 takes per scene** on the cheap tier (Hailuo or Kling Standard)
- Pick the winner, regenerate at **high quality** (Kling Master)
- Total cost per finished clip: ~$3–5
- **Don't try to fix a bad output with prompt edits.** Start fresh. AI doesn't fix, it re-rolls.

### 9. The "hand from edge" trick
When showing product manipulation, prompt for "hand enters frame from [edge]" rather than starting with a hand already in frame. AI handles edge-entry far more reliably than spawning hands inside the shot. Reduces extra-finger artifacts ~70%.

### 10. Post-production: bridge the seams
AI clips and UGC will color-mismatch. In CapCut/Descript:
- Apply same LUT or color preset across all clips
- Match white balance manually if auto-correct fails
- Add subtle film grain (5–10%) over the entire timeline — hides AI texture and unifies UGC + AI
- Consistent grain is the trick that makes hybrid edits feel like one piece

### 11. Failure modes to watch for (re-roll if you see these)
- Product text becoming gibberish
- Hand growing 6+ fingers (especially during grip motion)
- Packaging changing color mid-clip
- Background warping when subject moves
- Liquid physics looking like jello (especially with serum shots)

### 12. The order to actually generate things
1. Start with **Scene 7** (final result clean foot) — simplest, lowest risk, builds confidence
2. Then **Scene 2** (product reveal) — your hero shot, get this right
3. Then **Scene 3** (sachet tear) — hand-product interaction, hardest, do last when you've learned the tool
4. Skip Scene 5 (feet up timelapse) for v1 — use a static UGC photo with Ken Burns instead. Cheaper, more honest.

---

## Notes for Iteration

- If the hook line bombs, swap to: *"This is how I got soft feet in seven days."*
- If CPM stays high (Ad 2 hit $62 last batch — check #S6189), test a louder hook with text-on-screen for the first frame
- Keep the peel scene UGC. AI cannot fake the disgusting payoff and that's what makes it work.
