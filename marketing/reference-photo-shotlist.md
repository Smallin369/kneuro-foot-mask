# Reference Photo Shot List — Kneuro Instructional Ad v1

This is the photo shoot you do **before** firing up Kling. Each scene needs 1–2 reference frames. Total time: 15–20 minutes.

---

## Universal Setup (do this once, use for all shots)

### Surface
- **Beige or cream linen** — a linen pillowcase ironed flat works. Or unbleached cotton tablecloth. Or sandstone stone tile.
- Avoid: white surfaces (blow out), dark wood (clashes with brand palette), glossy surfaces (reflections kill the mood)
- Place on a flat table near a window

### Lighting (this is 60% of the result)
- **Single source: a window**. North-facing or east-facing midday is ideal. Golden hour (4:30–6pm) gives that warm cinematic look.
- Window should be to the **left or right** of your setup, not behind. Side light = depth. Front light = flat.
- If sun is too harsh, hang a white bedsheet over the window — turns it into a giant softbox.
- Turn off all overhead lights and lamps. Window only.

### Camera
- **Phone in 4K, 1× lens** (not telephoto, not ultrawide — the main lens has the best optics)
- **NO Portrait mode.** It fakes bokeh and confuses Kling's depth detection.
- Lock exposure and focus by long-pressing the subject on screen until it shows AE/AF lock.
- Wipe the lens. Seriously. Smudges ruin macro shots.

### Camera position
- Phone roughly 30–45cm from subject for product shots
- Stack of books or a small tripod — phone must be steady, NOT handheld for these
- Match the camera angle to the angle described per scene below

### File format
- Shoot in HEIC, then convert keepers to JPG before uploading to Kling (some tools choke on HEIC)
- iOS: Settings → Camera → Formats → "Most Compatible" forces JPG by default if you want to skip the conversion step

---

## Scene 2 — Product Reveal (need 2 frames)

The hero shot. Spend the most time here.

### Frame 2A (start frame)
**What's in shot:**
- Cream/pastel product box on linen surface
- Box lid open, sachet visible inside but still nestled
- Empty space on the right side of the frame (where hand will enter)

**Camera angle:** 25–30° downward from horizontal — like you're looking down at a coffee table from a chair.
**Distance:** 35cm
**Composition:** Box centered slightly left, leaving 40% empty space on right
**Take:** 5 variations — slight angle changes, different sachet positions

### Frame 2B (end frame)
**What's in shot:**
- Same hand from same direction, now holding the sachet vertically, lifted ~15cm above the box
- Box still visible but soft-focus in lower third of frame
- Sachet brand label facing camera

**Camera angle:** Same as 2A (don't move the phone between frames — interpolation works best when only the subject moved)
**Distance:** Same as 2A
**Composition:** Sachet upper-center, box bottom-third
**Take:** 5 variations

**Critical:** Keep the camera position IDENTICAL between 2A and 2B. The AI needs both frames to share the exact background, surface, and lighting — only the product/hand position changes.

---

## Scene 3 — Sachet Tear (need 2 frames)

Hardest scene. Take 10+ variations.

### Frame 3A (start frame)
**What's in shot:**
- Sealed sachet held between **both** hands, fingers gripping the top corners ready to tear
- Hands in lower half of frame, sachet upper half
- Soft-blurred linen background

**Camera angle:** 0° (straight-on, eye-level with the sachet)
**Distance:** 25cm — closer than Scene 2
**Composition:** Sachet centered, label facing camera
**Take:** 10 variations of grip position

### Frame 3B (end frame)
**What's in shot:**
- Same hands, sachet now **torn open at the top**, milky white serum visible inside the opening
- A slight tilt forward so camera can see into the open sachet
- Optional: a single drip of serum at the lip (ASMR territory)

**Camera angle:** Same as 3A but sachet tilted ~10° toward camera
**Distance:** Same as 3A
**Composition:** Same as 3A
**Take:** 10 variations

**Why so many variations:** Hand-object interaction is where AI most often produces extra fingers and morphed packaging. More reference frame options = better odds of finding a pair Kling handles cleanly.

---

## Scene 7 — Final Result Foot (need 1–2 frames)

Lowest difficulty. Quick to shoot.

### Frame 7A (single frame, single-image-to-video is fine here)
**What's in shot:**
- One foot resting on cream linen — your foot, after a foot mask peel, or borrowed
- Side profile (not from above)
- Foot relaxed, slightly pointed
- Soft natural side light

**Camera angle:** 0° (eye level with the foot)
**Distance:** 50cm
**Composition:** Foot fills lower 60% of frame, soft background above
**Take:** 5 variations — different toe positions, different foot angles

**Optional Frame 7B (end frame for tighter motion control):**
- Same foot, same setup, foot rotated slightly inward (~5°)
- Use only if you want a deliberate "settling" motion

---

## Optional: Frame for Scene 5 (if you DO want to AI-generate it)

If you decide not to skip Scene 5 (feet up timelapse):

### Frame 5A
**What's in shot:**
- POV-style shot: feet wearing the booty masks, propped up on a couch arm or coffee table
- Cozy background — woolen throw, book, mug of tea
- Camera as if you're the one reclining

**Camera angle:** 30° looking down toward feet
**Distance:** ~80cm
**Composition:** Feet centered, ankles in lower third
**Take:** 5 variations

(Reminder: I still recommend using a UGC still with Ken Burns zoom for v1 instead of generating this one.)

---

## Pre-shoot checklist

- [ ] Window light on, all artificial lights off
- [ ] Linen surface laid flat, no wrinkles in shot area
- [ ] Lens wiped clean
- [ ] Phone in 4K, 1× lens, no portrait mode
- [ ] AE/AF locked on subject
- [ ] Camera on tripod or stable book stack
- [ ] Product staged with label facing camera
- [ ] Hands washed (yes, really — fingertips show in macro)
- [ ] Phone flight-mode-on so notifications don't interrupt
- [ ] Take 5–10 variations per shot, choose later

---

## After the shoot

1. AirDrop or upload your photos to your Mac
2. Drop them into `marketing/ad-frames/` so they're committed alongside the script:
   ```bash
   mkdir -p marketing/ad-frames
   mv ~/Downloads/IMG_*.HEIC marketing/ad-frames/
   ```
3. Convert HEIC → JPG if needed:
   ```bash
   cd marketing/ad-frames
   sips -s format jpeg *.HEIC --out .
   ```
4. Open them in Preview, pick the keepers (1–2 per scene)
5. Upload keepers to Kling 2.1 Master as start/end frame pairs
6. Run the prompts from `ad-script-instructional-v1.md`

---

## Common mistakes that ruin AI generation

- **Mixed lighting** (window + lamp = AI can't decide light direction → flickers)
- **Different camera positions** between start and end frames → AI interpolates the WHOLE scene, not just the product
- **Cluttered background** → AI invents extra objects mid-clip
- **Glare on packaging** → AI reads it as a feature and amplifies it into weird highlights
- **Subject too small in frame** → AI loses detail, regenerates a smudgy approximation
- **Background and product same color** → AI struggles to separate them, edges go fuzzy
