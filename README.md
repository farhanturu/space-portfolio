<div align="center">

# STELLAR

**A cosmic-themed portfolio with immersive 3D space environments**

[![Deployed with GitHub Pages](https://img.shields.io/badge/deployed%20with-GitHub%20Pages-222222?style=for-the-badge&logo=github)](https://farhanturu.github.io/space-portfolio/)
[![WebGL](https://img.shields.io/badge/WebGL-3D%20Space-9b59b6?style=for-the-badge)](https://farhanturu.github.io/space-portfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-Clean%20Code-e34f26?style=for-the-badge&logo=html5)](https://farhanturu.github.io/space-portfolio/)

[**Live Demo**](https://farhanturu.github.io/space-portfolio/)

</div>

---

## About

Stellar is a developer portfolio built around a deep-space aesthetic. The entire page is backed by a real-time **WebGL fragment shader** that renders:

- **3-layer parallax starfield** with individual twinkle animations
- **Procedural nebula clouds** using layered noise functions
- **Mouse-reactive camera movement** for depth perception
- **Smooth scroll-triggered reveals** on every section

Designed by PaongLabs to feel like browsing the cosmos.

## Features

| Feature | Detail |
|---------|--------|
| **WebGL Space Scene** | Real-time fragment shader with stars, nebula, and mouse parallax |
| **Scroll Animations** | IntersectionObserver-based fade-in reveals |
| **Responsive** | Full mobile support with collapsible navigation |
| **Contact Form** | Client-side validated form with submit feedback |
| **Dark Theme** | Pure space-dark palette with violet accent |
| **Zero Dependencies** | Pure HTML + CSS + vanilla JS + WebGL |

## Tech Stack

- **Markup:** Semantic HTML5
- **Styling:** Custom CSS (no framework)
- **3D:** Raw WebGL with GLSL fragment shaders
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Deploy:** GitHub Pages (static, zero build)

## Getting Started

```bash
git clone https://github.com/farhanturu/space-portfolio.git
cd space-portfolio
open index.html
```

Or just double-click `index.html` in your file manager.

## Project Structure

```
space-portfolio/
├── index.html      # Single-page portfolio (HTML + CSS + JS + WebGL)
├── README.md       # This file
└── .gitignore
```

## License

MIT
