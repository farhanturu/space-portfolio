<div align="center">

# STELLAR

**A cosmic-themed portfolio with immersive 3D space environments**

[![Deployed with GitHub Pages](https://img.shields.io/badge/deployed%20with-GitHub%20Pages-222222?style=for-the-badge&logo=github)](https://farhanturu.github.io/space-portfolio/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-000000?style=for-the-badge&logo=three.js)](https://threejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)

[**Live Demo**](https://farhanturu.github.io/space-portfolio/)

</div>

---

## About

Stellar is a developer portfolio built around a deep-space aesthetic. The entire page is backed by a real-time 3D scene powered by Three.js, with floating wireframe geometries, drifting particle fields, and a nebula sphere that responds to scroll and mouse movement.

Designed to feel like browsing the cosmos — every section floats in a persistent starfield.

## Features

| Feature | Detail |
|---------|--------|
| **3D Space Scene** | Real-time Three.js environment with wireframe shapes, 800+ particles, and a nebula sphere |
| **Mouse Parallax** | Camera subtly follows cursor position for depth perception |
| **Scroll Animations** | Framer Motion `useInView` reveals on every section |
| **Responsive** | Full mobile support with collapsible navigation |
| **Contact Form** | Client-side validated form with submit feedback |
| **Dark Theme** | Pure space-dark palette with violet accent |
| **Zero Comments** | Clean code, no fluff |

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **3D:** Three.js + React Three Fiber + Drei
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Phosphor Icons
- **Language:** TypeScript
- **Deploy:** GitHub Pages via GitHub Actions

## Getting Started

```bash
git clone https://github.com/farhanturu/space-portfolio.git
cd space-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build    # static export to ./out
npm start        # serve production build
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-deploys to GitHub Pages on every push to `main`.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Space theme tokens & animations
│   ├── layout.tsx         # Root layout with Geist font
│   └── page.tsx           # Main page composition
└── components/
    ├── SpaceScene.tsx      # Three.js 3D environment
    ├── Navigation.tsx      # Sticky nav with mobile menu
    ├── HeroSection.tsx     # Hero with animated headline
    ├── AboutSection.tsx    # Skills & stats
    ├── WorkSection.tsx     # Project showcase cards
    ├── ContactSection.tsx  # Form + social links
    └── Footer.tsx          # Minimal footer
```

## License

MIT
