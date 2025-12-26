# Axiom Pulse – Token Discovery Table

A frontend-focused implementation of a real-time token discovery table inspired by Axiom Trade’s Pulse interface.

The goal of this project is to demonstrate clean UI architecture, smooth real-time updates, and production-ready frontend patterns commonly used in trading and data-heavy applications.

---

##  Features

- Real-time price updates (WebSocket-style mock)
- Visual price movement feedback (color + glow)
- Market category tabs (Pulse, New Pairs, Final Stretch, Migrated)
- Contextual actions using popovers
- Token detail view using accessible modal
- Skeleton loading states
- Fully responsive layout (320px and above)
- Optimized rendering with memoized components

---

##  Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **Radix UI** (Popover, Dialog)
- **Atomic component architecture**

---

##  Performance & UX

- No layout shifts
- Lightweight animations only where useful
- Memoized rows to avoid unnecessary re-renders
- Fast interactions (<100ms perceived latency)
- Designed to score **90+ on Lighthouse** (mobile & desktop)

---

##  Notes

This project intentionally prioritizes clarity, performance, and usability over heavy visual effects, closely matching real-world trading interfaces where data readability and responsiveness are critical.

---

##  How to run locally

npm install
npm run dev
