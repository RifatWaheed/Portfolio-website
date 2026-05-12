# Rifat Waheed — Personal Portfolio

A premium, dark-themed personal portfolio built with **Angular 17** for [rifatwaheed.com](https://rifatwaheed.com).

---

## 🚀 Quick Start

### Prerequisites
- Node.js **18+** (LTS recommended)
- Angular CLI **17+**

### Install & Run

```bash
# 1. Install Angular CLI globally (if not already installed)
npm install -g @angular/cli

# 2. Navigate to project directory
cd rifat-portfolio

# 3. Install dependencies
npm install

# 4. Start development server
ng serve

# 5. Open browser
# → http://localhost:4200
```

### Build for Production

```bash
ng build --configuration production
# Output in: dist/rifat-portfolio/
```

---

## 📁 Project Structure

```
rifat-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Fixed nav with smooth scroll & mobile menu
│   │   │   ├── hero/            # Particle canvas + typing animation
│   │   │   ├── about/           # Bio, stats, education, interests
│   │   │   ├── tech-stack/      # Tech grid + animated skill bars
│   │   │   ├── projects/        # Project cards with expand/collapse
│   │   │   ├── gaming/          # Valorant + YouTube + Football section
│   │   │   ├── contact/         # Reactive form + social links
│   │   │   └── footer/          # Links, copyright, back-to-top
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.scss   # Loading screen animation
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.production.ts
│   ├── styles.scss               # Global variables, reset, utilities
│   └── index.html                # SEO meta tags, Google Fonts, FA icons
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Loading Screen** | Animated progress bar + logo reveal |
| **Particle System** | Interactive canvas particles (mouse-reactive) |
| **Typing Animation** | Typewriter effect for job title |
| **Glassmorphism** | Backdrop-blur glass cards throughout |
| **Intersection Observer** | Scroll-triggered animations on every section |
| **Animated Skill Bars** | Smooth width transitions on scroll |
| **Project Cards** | Expand/collapse with featured badge |
| **Contact Form** | Reactive form with validation |
| **Mobile Menu** | Slide-in panel with hamburger toggle |
| **Back to Top** | Smooth scroll footer button |
| **SEO Ready** | Full meta tags, OG tags, Twitter cards |

---

## 🎨 Design System

```scss
// Key CSS Variables (src/styles.scss)
--color-bg-primary: #080b0f
--color-accent-cyan: #00d4ff
--color-accent-blue: #0099ff
--font-display: 'Syne'
--font-mono: 'Space Mono'
--font-body: 'DM Sans'
```

---

## 🌐 Cloudflare Deployment

```bash
# Build
ng build --configuration production

# Deploy dist/rifat-portfolio/browser/ to Cloudflare Pages
# Connect your GitHub repo at: https://pages.cloudflare.com
# Build command: ng build --configuration production
# Build output: dist/rifat-portfolio/browser
```

For the custom domain `rifatwaheed.com`, add it in Cloudflare Pages → Custom Domains.

---

## 📝 Customisation Notes

- **Contact form**: Wire up `contact.component.ts → onSubmit()` to your email API or Cloudflare Worker
- **Projects**: Edit `projects.component.ts → projects[]` to add real GitHub URLs
- **Avatar**: Replace the initials block in `hero.component.html` with `<img>` for a real photo

---

## 🧰 Tech Stack Used

- **Angular 17** (NgModule, standalone-compatible)
- **SCSS** (no Tailwind — pure custom stylesheet)
- **TypeScript 5.4**
- **Font Awesome 6** (CDN)
- **Google Fonts** — Syne, Space Mono, DM Sans
- **IntersectionObserver API** — scroll animations
- **Canvas API** — particle system
- **Angular Reactive Forms** — contact form

---

Built with ♥ by **Rifat Waheed**
