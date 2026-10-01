# Tulas International School (TIS) — Homepage Redesign

A modern, responsive redesign of the Tulas International School (TIS) homepage, created as a frontend development assessment.

The redesign focuses on a premium educational visual identity, clear conversion-focused CTAs, responsive layouts, smooth interactions, accessibility, and polished scroll-based animations while retaining the core TIS brand direction and content.

##  Live Demo

- **Live Website:** https://tishomepageredesign.vercel.app
- **GitHub Repository:** https://github.com/anandkundurthi/tis-homepage-redesign

##  Project Highlights

- Premium, modern school-focused visual design
- Fully responsive layout for desktop, tablet, and mobile
- Conversion-focused admission CTAs
- Smooth scroll-triggered animations
- Custom cursor interaction on pointer devices
- Scroll progress indicator
- Light / dark theme switcher
- Responsive mobile navigation
- Accessible skip-to-content navigation
- Reduced-motion support
- Modular React component architecture
- Semantic HTML structure
- Centralized content and navigation data

##  Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

##  Standout Features

### 1. Custom Cursor

A custom cursor interaction follows the pointer on desktop devices and responds to interactive elements.

The implementation avoids interfering with touch-based devices and keeps the interaction lightweight.

### 2. Scroll-Triggered Reveals

Content sections progressively reveal themselves as the user scrolls through the page.

Animations are designed to remain subtle and maintain a smooth browsing experience.

### 3. Animated Theme Switcher

The website supports both light and dark visual themes.

Theme changes are handled through semantic CSS variables, allowing the entire interface to transition consistently without duplicating component styles.

### 4. Scroll Progress Indicator

A fixed progress indicator provides visual feedback about the user's position within the page.

##  Project Structure

```text
src/
├── components/
│   ├── animation/
│   │   ├── CustomCursor.tsx
│   │   ├── Reveal.tsx
│   │   └── ScrollProgress.tsx
│   │
│   ├── layout/
│   │   ├── AnnouncementBar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Navbar.tsx
│   │
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── AdmissionsCTA.tsx
│   │   ├── Campus.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── StudentLife.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyTIS.tsx
│   │
│   └── ui/
│       ├── ButtonLink.tsx
│       ├── SchoolLogo.tsx
│       └── SectionHeading.tsx
│
├── data/
│   ├── content.ts
│   ├── images.ts
│   ├── navigation.ts
│   └── stats.ts
│
├── hooks/
│   ├── useActiveSection.ts
│   └── useTheme.ts
│
├── utils/
│   └── cn.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

##  Component Architecture

### `components/ui/`

Reusable interface primitives such as buttons, section headings, and the school logo.

### `components/layout/`

Global page structure including:

- Announcement bar
- Navigation
- Mobile navigation
- Footer

### `components/sections/`

Individual homepage sections are isolated into reusable React components.

This keeps the main `App.tsx` composition-focused rather than placing the entire page implementation in a single component.

### `components/animation/`

Animation-specific components responsible for:

- Custom cursor
- Scroll reveals
- Scroll progress

### `hooks/`

Custom React hooks for:

- Active navigation section tracking
- Theme state management

### `data/`

Static content, navigation configuration, statistics, and image references are separated from presentation components.

##  Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/anandkundurthi/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### 4. Create a production build

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

### 6. Run ESLint

```bash
npm run lint
```

##  Responsive Design

The interface has been designed and tested across:

- Mobile — 375px
- Tablet — 768px
- Desktop — 1280px+

The layout adapts navigation, typography, spacing, imagery, cards, and content flow according to viewport size.

##  Accessibility & UX

The implementation includes several accessibility-focused considerations:

- Semantic HTML structure
- Keyboard-focusable interactive elements
- Visible focus states
- Skip-to-content link
- Accessible navigation controls
- Reduced-motion support
- Touch-friendly mobile interactions
- Responsive typography and spacing

##  Brand Direction

The redesign retains the visual direction of Tulas International School through:

- Deep green brand surfaces
- Warm cream backgrounds
- Gold accent color
- Editorial-style typography
- School-focused imagery
- Clear educational messaging
- Admission-focused calls to action

The design is intended to modernize the experience while maintaining a recognizable TIS visual identity.

##  Deployment

The project is deployed using Vercel.

Every update pushed to the connected GitHub `main` branch can be deployed through the Vercel project.

**Production URL:**

https://tishomepageredesign.vercel.app

##  Verification

Before deployment, the project was checked for:

- Successful development build
- Successful production build
- ESLint errors and warnings
- Responsive layouts
- Navigation behavior
- Theme switching
- Scroll interactions
- Mobile navigation
- Production deployment

##  Assessment Objective

This project was developed as a frontend homepage redesign assessment for Tulas International School, with emphasis on:

- Component architecture
- Responsive frontend development
- Interaction design
- Animation quality
- Accessibility
- Visual polish
- Production readiness

---

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.
