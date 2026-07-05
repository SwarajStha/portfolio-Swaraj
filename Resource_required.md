# Resources Required

Assets that are missing (or worth upgrading) for the new UI to reach its full potential,
and exactly where to wire each one in.

## 1. Favicon (missing — currently a placeholder)
- **What**: A proper favicon (ideally an SVG monogram, e.g. `S/` or `~/s` in the site's cyan `#22d3ee` on dark `#070a13`), plus a 180×180 `apple-touch-icon.png`.
- **Where to put it**: `public/favicon.svg` and `public/apple-touch-icon.png`.
- **Where to wire it**: [index.html](index.html) — replace the `<link rel="icon" ... href="/vite.svg" />` line (there is a `TODO` comment on it) and add
  `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`.

## 2. Open Graph / social share image (missing)
- **What**: A 1200×630 PNG banner (name + role on the dark theme) shown when the site is shared on LinkedIn/Twitter.
- **Where to put it**: `public/og-image.png`.
- **Where to wire it**: [index.html](index.html) `<head>` — add
  `<meta property="og:title" ...>`, `<meta property="og:description" ...>`, `<meta property="og:image" content="https://swarajstha.com/og-image.png">`, and the matching `twitter:card` tags.

## 3. Featured-project screenshots at true phone aspect ratio (upgrade)
- **What**: The floating phone mockup in **My Work** displays `public/images/Class_Scheduler*.png`. Some of these include emulator chrome / differing aspect ratios, so `object-cover` crops them. Re-export the app screenshots at a clean 9:19.5 (e.g. 1080×2340) with no window chrome.
- **Where to put them**: `public/images/` (same filenames keep everything working).
- **Where they are wired**: `classSchedulerImages` array in [src/components/ProjectWorkstation.jsx](src/components/ProjectWorkstation.jsx).

## 4. Screenshot for St. Margaret's Bay project gallery (missing)
- **What**: The conservation-site project has only a single cover image (`conservation-site.png`); every other project has an `images: [...]` gallery for the modal. 2–3 additional screenshots (home page, species page, mobile view) would fill the modal's bento grid.
- **Where to put them**: `public/images/conservation-site(2).png`, `(3).png` …
- **Where to wire them**: Add an `images: [...]` array to the `proj4` entry in the `projectData` array in [src/components/Projects.jsx](src/components/Projects.jsx).

## 5. CourseNotes GitHub link (missing)
- **What**: The featured project (`proj1`, CourseNotes) has `githubLink: ""`, so the modal shows "Private Repository". Add the repo URL if it can be public.
- **Where to wire it**: `githubLink` field of `proj1` in [src/components/Projects.jsx](src/components/Projects.jsx).

## 6. Higher-resolution photography covers (upgrade)
- **What**: `public/images/Scopio.png` and `public/images/WIX.png` are screenshots of the external sites. Two or three actual photographs (portrait orientation, ≥1200px tall) would look far better inside the photography cards — or even a small masonry strip of 6–8 photos.
- **Where to put them**: `public/images/photography/…`
- **Where to wire them**: `photographyData` (the `image` field) in [src/components/Photography.jsx](src/components/Photography.jsx).

## 7. Short demo video / GIF of CourseNotes (nice-to-have)
- **What**: A 10–20s screen recording (MP4/WebM, phone aspect) of the app in use. The phone mockup component can play it instead of the static carousel for a tamalsen-style "app running" feel.
- **Where to put it**: `public/videos/coursenotes-demo.mp4`.
- **Where to wire it**: Swap the `<img>` inside `PhoneMockup` in [src/components/ProjectWorkstation.jsx](src/components/ProjectWorkstation.jsx) for a muted looping `<video>` when a `video` prop is present.

## 8. Resume freshness check (content, not code)
- **What**: `public/Resume.pdf` is downloaded by the hero's `resume.pdf` button — make sure it reflects the current TUM/M.Sc. status. (`public/Resume.docx` is unused by the site and can stay or be removed.)

## Removed / no longer needed by the new design
- `public/backgroundPP.jpg`, `public/backgroundPPcropped.jpg`, `public/backgroundPPcroppedR.jpg`, `public/background.jpg` — the old photo background was replaced by the dark canvas with ambient glows. Safe to delete once you're happy with the new look.
- `src/components/HoneycombSection.jsx`, `src/components/TechSection.jsx`, `src/components/TechHexagon.jsx`, `src/components/Navbar.jsx`, `src/components/ResumeButton.jsx` — no longer imported anywhere. Safe to delete.
