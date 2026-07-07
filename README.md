# ✨ Ashmita Mazumdar — Developer Portfolio

A modern, interactive portfolio built from scratch to showcase my work as a **Computer Science student** and **Full Stack Developer**. Rather than relying on templates, every section, animation, and interaction was designed and implemented with a focus on performance, responsiveness, and user experience.

**🌐 Live Demo:** https://final-portfolio-liard-sigma.vercel.app
**📧 Email:** [ashmita110609@gmail.com](mailto:ashmita110609@gmail.com)

---

## Preview

> A premium single-page portfolio featuring custom animations, interactive UI components, smooth transitions, and a responsive experience across desktop and mobile devices.

---

## Tech Stack

| Category        | Technologies                       |
| --------------- | ---------------------------------- |
| Frontend        | React 19, Vite 8                   |
| Styling         | Tailwind CSS v4                    |
| Animations      | Framer Motion, GSAP, ScrollTrigger |
| Icons           | Lucide React, React Icons          |
| Deployment      | Vercel                             |
| Version Control | Git & GitHub                       |

---

# Features

## Modern UI & Design

* Custom amber & gold design system
* Responsive layout across desktop, tablet, and mobile
* Animated gradient mesh backgrounds
* Mouse-reactive hero spotlight effect
* Custom dual-layer cursor with hover interactions
* Smooth section transitions
* Animated text scramble section headings

---

## Interactive Experience

* Command Palette (**Ctrl/Cmd + K**) for quick navigation
* Scroll progress indicator
* Scroll-to-top button
* Hidden Konami Code easter egg
* Animated statistics counters
* Infinite technology marquee
* Skill proficiency visualizations
* GitHub contribution graph integration

---

## Project Showcase

* GSAP-powered horizontal scrolling project showcase
* Automatic mobile fallback for touch devices
* Interactive 3D tilt project cards
* Floating magnetic project preview cards
* Fully responsive project layouts

---

## About Section

* Interactive education & achievement timeline
* Clickable certificate preview modals
* Categorized technology stack
* Custom SVG robot mascot providing dynamic section-aware commentary

---

# Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── Avatar
│   ├── CertificateModal
│   ├── CommandPalette
│   ├── CustomCursor
│   ├── CursorGlow
│   ├── EasterEgg
│   ├── GithubActivity
│   ├── GradientMesh
│   ├── MagneticButton
│   ├── MagneticPreview
│   ├── Marquee
│   ├── Navbar
│   ├── ScrambleText
│   ├── ScrollProgress
│   ├── ScrollToTop
│   ├── SkillBars
│   ├── StatsCounter
│   ├── TechStack
│   ├── TiltCard
│   └── Timeline
│
├── data/
│   └── portfolioData.js
│
├── sections/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Getting Started

### Clone the repository

```bash
git clone https://github.com/ashmita-dev/final_portfolio.git
```

### Navigate into the project

```bash
cd final_portfolio
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The development server runs at:

```text
http://localhost:5173
```

---

## Production Build

```bash
npm run build
npm run preview
```

---

# Design Decisions

### Custom Design System

The portfolio uses a handcrafted amber and gold theme instead of common blue or purple developer palettes to create a distinctive yet professional visual identity.

### Desktop-first Project Showcase

Projects use GSAP-powered horizontal scrolling on larger screens while automatically reverting to traditional vertical scrolling on mobile devices for improved usability.

### Custom SVG Mascot

Instead of a static profile illustration, the portfolio features a lightweight SVG robot mascot that reacts to the user's current section using the Intersection Observer API.

---

# Performance Highlights

* Component-based architecture
* Single source of truth using centralized data
* Responsive across major screen sizes
* Optimized animations with GSAP & Framer Motion
* Clean and maintainable project structure
* Built using modern React practices

---

# Connect With Me

* **LinkedIn:** https://linkedin.com/in/ashmita-mazumdar-009863394
* **GitHub:** https://github.com/ashmita-dev
* **Email:** [ashmita110609@gmail.com](mailto:ashmita110609@gmail.com)

---

## License

This repository contains my personal portfolio project.

You're welcome to explore the codebase for learning and inspiration, but please do not copy or redistribute the design, content, or assets without permission.

---

<p align="center">
Built using React, Tailwind CSS, GSAP, and Framer Motion.
</p>
