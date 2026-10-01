# Tulas International School — Homepage Redesign

## Overview

A redesign of the homepage of [Tulas International School](https://tis.edu.in/) (TIS), a co-educational CBSE boarding and day school in Dehradun, Uttarakhand. It was built as a frontend developer assessment.

The design keeps what the school already is: the "Let's do it with Tulas" line, the circular student portraits, the yellow accent, and the school's own figures, rankings, awards and parent reviews. It reorganises them into a calmer editorial page: a serif display face, hairline rules instead of cards, and one deep-green panel colour reused for the announcement bar, rankings, admissions and footer.

**Content rule.** Every fact on the page comes from tis.edu.in (homepage, admission page, the school's own articles) or from the images the school publishes. Numbers the school does not publish are not shown. The rankings, awards and parent reviews are attributed as published there. The footer states that this is a concept, not the official site.

## Live Demo

Not deployed yet. After deploying, add the URL here.

## Tech Stack

| Tool | Why it is here |
| --- | --- |
| React 19 + TypeScript | Component model and type-checked content |
| Vite 7 | Dev server and build; the build produces a single `dist/index.html` |
| Tailwind CSS 4 | Utility styling driven by CSS variable tokens |
| Framer Motion | Scroll reveals, scroll progress, cursor spring, menu transitions |
| Lucide React | A handful of UI icons (menu, theme, arrows, phone) |
| clsx + tailwind-merge | `cn()` helper so component class overrides win |

> **A note on Next.js.** The brief asked for Next.js, but this project template builds with Vite and is served as a static `dist/index.html`. I kept the folder layout from the brief (`components/ui|layout|sections|animation`, `data`, `hooks`) so moving to the Next.js App Router is mostly mechanical: the page becomes `app/page.tsx`, and the interactive components (`Navbar`, `MobileMenu`, `CustomCursor`, `ScrollProgress`, `Reveal`) get `"use client"`. Images use plain `<img>` with explicit `width`/`height` instead of `next/image`.

## Features

- Announcement bar with the admissions helpline and enquiry link
- Sticky navbar that compacts on scroll, highlights the section in view, and collapses to an accessible dialog menu below 1280px
- Editorial hero with a masked headline reveal and an asymmetric portrait composition
- Sections: at-a-glance figures, About, Academics, Why TIS (rankings and awards), Campus and boarding life, Student life, Community, Admissions, Contact with map, Footer
- Custom cursor ring on mouse devices only
- Scroll-triggered reveals
- Light and dark themes, persisted, with no flash on load
- Thin scroll-progress bar
- Skip-to-content link

## Project Structure

```
src/
├── App.tsx                  Page composition
├── index.css                Theme tokens, utilities, base styles
├── data/
│   ├── images.ts            Official TIS media URLs, including its emblem
│   ├── navigation.ts        Nav, footer and social links, external URLs
│   ├── stats.ts             Published figures and rankings
│   └── content.ts           Copy for each section
├── hooks/
│   ├── useTheme.ts          Theme state, persistence, transition class
│   └── useActiveSection.ts  IntersectionObserver for the nav highlight
├── utils/cn.ts
└── components/
    ├── ui/                  ButtonLink, SectionHeading
    ├── layout/              AnnouncementBar, Navbar, MobileMenu, Footer
    ├── sections/            One file per homepage section
    └── animation/           CustomCursor, ScrollProgress, Reveal
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev      # start Vite
npm run lint     # ESLint with typescript-eslint and react-hooks rules
npx tsc --noEmit # type-check
```

## Production Build

```bash
npm run build    # outputs dist/index.html
npm run preview  # serve the build locally
```

The build uses `vite-plugin-singlefile`, so scripts and styles are inlined into `dist/index.html`. School photos and the emblem are loaded from tis.edu.in.

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages): build command `npm run build`, output directory `dist`. On Vercel, import the repository and keep the Vite preset. If the project is migrated to Next.js, Vercel's default Next.js preset applies.

## Design Decisions

- **Palette.** Warm paper (`#f6f1e7`), ink green-black, one deep green for panels, and the school's marigold as the only accent. The accent marks actions and emphasis; it is never decoration.
- **Typography.** Fraunces for headlines (a serif with an editorial feel), Instrument Sans for reading text. Headlines carry the hierarchy, so the page needs few boxes.
- **Circles as the motif.** TIS portraits are already circular, so the hero, student-life row and cursor ring all echo that shape. Everything else is square-cornered with 1px rules, which keeps the circles distinctive.
- **Semantic tokens.** Components use `bg-paper`, `text-muted`, `border-line` and so on. The `.on-brand` class re-scopes those tokens inside green panels, so a section on a dark background needs no per-element colour overrides.
- **Dark theme is its own palette**: deep green-black surfaces, cream text, and the accent doubling as the emphasis colour. The Google Maps iframe is inverted in dark mode so it does not glare.
- **Real imagery only.** Photos and the official emblem are loaded from the school's own site. The emblem is paired with a custom typographic lockup in `SchoolLogo.tsx`; the seal itself is not redrawn. Alt text describes only what is visible.

## Animation Decisions

- **Reveal**: opacity plus a 16px rise over 0.5s, `whileInView` with `viewport={{ once: true }}`. Small delays (0.06–0.1s steps) stagger siblings. With reduced motion enabled, elements render in their final state.
- **Hero**: the headline slides up behind an `overflow-hidden` mask and the portraits settle in on mount. This runs once, so it does not use scroll triggers.
- **Scroll progress**: `useScroll` feeds `scaleX` through a light spring. It animates a transform only, so there is no layout work.
- **Cursor**: pointer position goes into motion values, so mouse movement never re-renders React. State changes only when the pointer enters or leaves an interactive element (`pointerover` plus `closest()`). It is gated on `(hover: hover) and (pointer: fine)` and ignores non-mouse pointers. The native cursor stays visible, so nothing is lost if the ring lags.
- **Theme**: `useTheme` adds a `theme-transition` class for 400ms while toggling, so colours fade. The class is removed afterwards so it never interferes with other transitions.
- **Navbar compacting** uses `useMotionValueEvent` on scroll position and only calls `setState` when the boolean changes.

## Responsive Design

- **375px**: single column, full-width CTAs, menu button in place of links, 2×2 figures grid. The hero portraits sit under the copy.
- **768px**: award and parent-review rows become three columns; the campus images form an asymmetric 8/4 grid.
- **1024px**: two-column hero, About and Academics splits, with a sticky Academics heading. The navbar still uses the menu button because six links plus a CTA do not fit comfortably yet.
- **1280px and up**: full navbar. Content is capped at 80rem.
- Checked with Playwright (Chromium) at 375, 768, 1024, 1280 and 1440px: `scrollWidth` equals `clientWidth` at every width, and the page logged no console errors or warnings.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, `h2` per section, `h3` within sections
- Skip link, visible focus ring in a colour that adapts to the surface behind it (including green panels)
- Mobile menu is a `role="dialog"` with `aria-modal`, Escape to close, a Tab loop, scroll lock, and focus returned to the trigger on close
- Theme and menu controls are real `<button>`s with descriptive `aria-label`s; all CTAs are real links, and external ones use `rel="noopener noreferrer"`
- Current section marked with `aria-current` in the nav
- Decorative icons and rules are `aria-hidden`; the map iframe has a title
- `prefers-reduced-motion` is respected in reveals, hero entrance, cursor and CSS transitions
- Muted text is darker than a typical grey so it stays readable on the sand-coloured sections. A formal contrast audit has not been run.

## Performance

- Images are served from the school's official media paths in `data/images.ts`, with `loading="lazy"` below the fold and `fetchpriority="high"` on the main hero portrait. This avoids missing local binary assets but depends on those official URLs remaining available.
- No scroll listeners: the nav highlight uses IntersectionObserver, the progress bar uses Framer's `useScroll`
- Cursor movement bypasses React renders
- The build inlines scripts and styles. School imagery is requested separately from tis.edu.in, so it does not inflate the HTML bundle, but the original files may be larger than responsive, self-hosted alternatives.
- Fonts are loaded from Google Fonts with `display=swap` and preconnect

## Future Improvements

- Migrate to Next.js App Router with `next/image` and `next/font`, and keep static sections as Server Components
- Serve images as separate files with responsive `srcset`
- Update the Calendar link when the school publishes a newer edition (the PDF on the official site is the 2024 one)
- Add the remaining official pages (Events, Alumni Network, Mandatory Disclosure) as real routes
- Run an automated accessibility audit (axe) and add Playwright smoke tests for the menu, theme and anchors
- Confirm the school's current rankings and awards with the school before launch, since they are repeated from the official site
