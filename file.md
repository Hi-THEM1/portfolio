# Haythem Chabbeh — Portfolio Architecture

A high-performance, dark-themed portfolio web application built with **React 19**, **Vite 8**, **Lenis** kinetic smooth scrolling, and an interactive **GhostFibers** WebGL shader background powered by **OGL**.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack & Dependencies](#tech-stack--dependencies)
- [Architecture & Design System](#architecture--design-system)
  - [1. WebGL GhostFibers Dynamic Background Engine](#1-webgl-ghostfibers-dynamic-background-engine)
  - [2. Kinetic Smooth Scroll Architecture (Lenis)](#2-kinetic-smooth-scroll-architecture-lenis)
  - [3. Glassmorphic Design System & Tokens](#3-glassmorphic-design-system--tokens)
- [Repository File Structure](#repository-file-structure)
- [Components Deep Dive](#components-deep-dive)
- [Getting Started](#getting-started)
- [NPM Scripts](#npm-scripts)
- [Performance & Quality Verification](#performance--quality-verification)

---

## Overview

The portfolio showcases modern frontend and software engineering capabilities, emphasizing:
- **Zero-latency visual design**: Sub-millisecond interactive feedback with smooth micro-animations.
- **Dynamic WebGL immersion**: Full-screen procedural neon fiber shader with layered wave displacement, angular twist, and bloom glow.
- **Inertial physics**: Kinetic scroll dampening coupled directly to the browser's render refresh rate.

---

## Key Features

- **Procedural WebGL Fiber Background**: GPU-accelerated raymarching fiber simulation written in GLSL via OGL.
- **Kinetic Smooth Scroll**: Powered by Lenis with Hermite curve damping and `requestAnimationFrame` lifecycle synchronization.
- **Active Section Navigation**: Intelligent section tracking that highlights active navbar links based on viewport intersection.
- **Interactive Glassmorphism**: Cards and panels with backdrop-blur filters, dynamic hover glows, and gradient borders.
- **Floating Quick Navigation**: Smooth "Back to Top" trigger that reveals itself once the viewport passes 350px scroll depth.
- **Zero-Warning Codebase**: Fully linted with Oxlint and compiled using Vite 8.

---

## Tech Stack & Dependencies

| Tool / Library | Version | Role |
| :--- | :--- | :--- |
| **React** | `^19.2.8` | Core UI library & component model |
| **React DOM** | `^19.2.8` | DOM renderer for React 19 |
| **Vite** | `^8.3.0` | Ultra-fast next-gen build tool & dev server |
| **OGL** | `^1.0.11` | Minimal WebGL library for procedural shader rendering |
| **Lenis** | `^1.3.26` | Momentum-based kinetic smooth scroll library |
| **Oxlint** | `^1.81.0` | High-performance Rust-based linter |
| **Google Fonts** | Outfit, Space Grotesk | Primary UI display and technical monospace fonts |

---

## Architecture & Design System

### 1. WebGL GhostFibers Dynamic Background Engine

The background presentation is encapsulated inside `GhostFibers.jsx`:
- **WebGL 2.0 Shader Pipeline**: Custom vertex and fragment shaders render recursive harmonic sine waves with radial twist and glow falloff.
- **Performance Optimization**: Automatically throttled to display refresh rate, pauses when the browser tab is hidden or when scrolled out of view.
- **Accessibility & Reduced Motion**: Automatically freezes rendering when `prefers-reduced-motion: reduce` is enabled.
- **Contrast Vignette**: A multi-stop radial gradient combined with edge darkening ensures WCAG AA text contrast.

### 2. Kinetic Smooth Scroll Architecture (Lenis)

Smooth scrolling is managed directly in `App.jsx` and `lib/scroll.js`:
- **RAF Coupling**: Uses `requestAnimationFrame` to step the physics simulation on every hardware display frame.
- **Memory Safety**: Unmounting hooks immediately call `destroyScroll()` to clean up event listeners and RAF IDs.

### 3. Glassmorphic Design System & Tokens

Defined in `src/index.css`:
- **Color Variables**:
  - `--void: #07070a`
  - `--neon: #ff2d55`
  - `--coral: #ff5277`
  - `--signal-live: #3ddc97`
  - `--glass-floor: rgba(10, 10, 14, 0.72)`
- **Typography Tokens**:
  - `--font-display`: `'Outfit', -apple-system, BlinkMacSystemFont, sans-serif`
  - `--font-mono`: `'Space Grotesk', ui-monospace, monospace`
- **Utility Classes**:
  - `.glass-panel`: Backdrops with subtle translucent borders, box shadows, and hover glow transitions.

---

## Repository File Structure

```
portfolio/
├── index.html                                 # HTML document shell, meta tags, Google Fonts links
├── vite.config.js                             # Vite configuration utilizing @vitejs/plugin-react
├── package.json                               # Project dependencies and script declarations
├── .oxlintrc.json                             # Oxlint rule configuration
├── file.md                                    # Project documentation & architectural guide
├── README.md                                  # Vite project overview
├── public/
│   ├── favicon.svg                            # Application browser favicon
│   └── icons.svg                              # SVG symbols for social links and docs
└── src/
    ├── main.jsx                               # React 19 mounting root
    ├── index.css                              # Design tokens, Lenis styles, glass utilities, scrollbar
    ├── App.jsx                                # Main portfolio UI, global GhostFibers backdrop & Lenis controller
    ├── App.css                                # Layout, responsive styles, animations
    ├── components/
    │   ├── GhostFibers.jsx                    # Procedural WebGL fiber background component
    │   ├── GhostFibers.css                    # GhostFibers container styling
    │   └── SectionRail.jsx                    # Side indicator rail for section progress
    ├── sections/
    │   ├── Navbar.jsx                         # Responsive header with live clock
    │   ├── Hero.jsx                           # Hero headline, metric badges, CTA actions
    │   ├── About.jsx                          # Bio and background summary
    │   ├── Education.jsx                      # Academic history and coursework
    │   ├── Skills.jsx                         # Tech stack, tools, platforms
    │   ├── SoftSkills.jsx                     # Professional work ethic attributes
    │   ├── Projects.jsx                       # Portfolio project cards
    │   ├── Contact.jsx                        # Interactive contact form & quick links
    │   └── Footer.jsx                         # Footer and back-to-top trigger
    └── content/
        └── portfolio.js                       # Centralized content and metadata
```

---

## Getting Started

### Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm, pnpm, or yarn

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## NPM Scripts

- `npm run dev`: Starts Vite local development server.
- `npm run build`: Compiles production assets into the `/dist` directory.
- `npm run preview`: Serves the production build locally for verification.
- `npm run lint`: Runs Oxlint static code analysis across JavaScript and JSX files.

---

## Performance & Quality Verification

- **Lint Status**: `0 errors, 0 warnings` via Oxlint.
- **Build Output**: Clean production build with Vite 8.
- **Render Execution**: Hardware-accelerated WebGL shader background with zero layout shifts.
