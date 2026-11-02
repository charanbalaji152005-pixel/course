# SkillNest — Online Course Landing Page

A responsive, complete learning-platform landing page built with React and Vite.

## Sections
- Announcement bar and sticky header with mobile menu
- Hero with course search
- Stats strip
- Category cards that filter the course list
- Course grid with category pills, search, wishlist and course detail dialog
- "How it works" steps
- Testimonials
- FAQ accordion
- Newsletter signup with email validation
- Footer with link columns

## Features
- Wishlist and enrolment are saved in the browser (localStorage) and survive a refresh
- Course detail dialog: Escape or click outside to close, page scroll is locked while open
- Mobile menu closes with Escape and reports its open state to screen readers
- Course images fall back to a colour panel if they fail to load
- Respects reduced-motion preferences
- No runtime dependencies beyond React and lucide-react

## Run locally
1. Install Node.js 18+ (LTS recommended).
2. In the project folder:

```bash
npm install
npm run dev
```

3. Open the URL shown in the terminal, usually http://localhost:5173.

## Build for production
```bash
npm run build
npm run preview
```
The build output goes to `dist/` and can be hosted on Netlify, Vercel, GitHub Pages or any static host.

## Customise
- `src/data/courses.js` — courses and category list (add a course by copying an object)
- `src/data/content.js` — stats, steps, testimonials and FAQ copy
- `src/styles.css` — colours and layout
- `src/components/` — one file per section
- `index.html` — page title, meta tags and favicon (`public/favicon.svg`)

## Before you launch
- Replace placeholder testimonials, stats and the footer social links (currently `#top`).
- Connect the newsletter form and the Log in / Join buttons to your email and auth providers (they currently show a message only).
- Course photos are loaded from Unsplash and need an internet connection.
