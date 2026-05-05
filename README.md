<div align="center">

<br/>

```
██████╗ ██╗     ██╗██╗███████╗███████╗
██╔══██╗██║     ██║██║╚══███╔╝██╔════╝
██████╔╝██║     ██║██║  ███╔╝ █████╗  
██╔══██╗██║     ██║██║ ███╔╝  ██╔══╝  
██████╔╝███████╗██║██║███████╗███████╗
╚═════╝ ╚══════╝╚═╝╚═╝╚══════╝╚══════╝
```

### Architecture & Construction — Web Experience

*A Next.js ThemeForest template, fully reimagined and rebuilt in React + Vite*

<br/>

[![React](https://img.shields.io/badge/React-18.x-%2361DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.x-%23646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![GSAP](https://img.shields.io/badge/GSAP-3.x-%2388CE02?style=flat-square&logo=greensock&logoColor=black)](https://gsap.com)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.x-%23528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com)
[![License](https://img.shields.io/badge/License-Envato%20Regular-%23FF6C2C?style=flat-square)](https://codecanyon.net/licenses/standard)

<br/>

---

</div>

## 🏛️ Overview

**Bliize** is a fully custom-built architecture and construction website. Starting from a ThemeForest design reference built on Next.js, this project was **completely rebuilt from scratch using React + Vite** — not a fork or a clone, but an independent implementation preserving the original design vision while modernizing the tech stack and developer experience.

> The goal: a fast, animated, production-ready website for an architecture/construction brand — with buttery GSAP scroll effects, a custom cursor, mega-nav, and a complete multi-page structure.

---

## ⚡ Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **UI Framework** | React 18 | Component-driven, declarative UI |
| **Build Tool** | Vite 5 + HMR | Instant dev server, optimized builds |
| **Animations** | GSAP 3 + ScrollTrigger | Professional-grade scroll animations |
| **Icons** | Font Awesome 6 | Rich icon library, lightweight loading |
| **Styling** | Custom CSS + Variables | Full control, no framework overhead |
| **Routing** | Custom `useState` router | Zero-dependency, single-page feel |

---

## 🗂️ Project Structure

```
bliize/
│
├── 📁 public/
│   └── images/                     # Static assets (team photos, public media)
│
├── 📁 src/
│   │
│   ├── 📁 assets/                  # Bundled image assets
│   │   ├── homeinbt/               # HomeGallery demo images
│   │   ├── servicespageicon/       # SVG icons for service cards
│   │   ├── servicesingle/          # Service detail page images
│   │   └── shop/                   # Product images for shop
│   │
│   ├── 📁 components/              # All page & section components
│   │   │
│   │   ├── ── LAYOUT ──────────────────────────────────────
│   │   ├── Header.jsx              # Sticky nav + mega dropdown + mobile menu
│   │   ├── Footer.jsx              # Site-wide footer
│   │   │
│   │   ├── ── HOME SECTIONS ────────────────────────────────
│   │   ├── Hero.jsx                # Full-screen hero slider
│   │   ├── About.jsx               # About section
│   │   ├── Works.jsx               # Projects/Works showcase
│   │   ├── Services.jsx            # Services highlights
│   │   ├── Stats.jsx               # Animated statistics counters
│   │   ├── Testimonials.jsx        # Client testimonials slider
│   │   ├── Team.jsx                # Team member cards
│   │   ├── BrandSection.jsx        # Animated partner logos
│   │   ├── HomeGallery.jsx         # Demo selector landing page
│   │   │
│   │   ├── ── INNER PAGES ──────────────────────────────────
│   │   ├── AboutPage.jsx           # Full About Us page
│   │   ├── SingleServicePage.jsx   # Services grid (4-card layout)
│   │   ├── ServiceSingle.jsx       # Service detail + video modal
│   │   ├── TeamPage.jsx            # Full team roster
│   │   ├── TeamSinglePage.jsx      # Team member profile
│   │   ├── Pricing.jsx             # Pricing plans page
│   │   ├── Projectssingle.jsx      # Projects portfolio
│   │   │
│   │   ├── ── SHOP ─────────────────────────────────────────
│   │   ├── Shop.jsx                # Product grid + wishlist + pagination
│   │   ├── ShopSingle.jsx          # Single product detail
│   │   ├── Cart.jsx                # Shopping cart
│   │   ├── Checkout.jsx            # Checkout flow
│   │   ├── Wishlist.jsx            # Saved items
│   │   │
│   │   ├── ── BLOG ─────────────────────────────────────────
│   │   ├── Blogrightsidebar.jsx    # Blog — right sidebar layout
│   │   ├── Blogleftsidebar.jsx     # Blog — left sidebar layout
│   │   ├── Blogfullwidth.jsx       # Blog — fullwidth layout
│   │   │
│   │   └── ── UTILITY PAGES ────────────────────────────────
│   │       ├── Login.jsx           # Login page
│   │       ├── Contactsus.jsx      # Contact Us
│   │       ├── Privacy.jsx         # Privacy Policy
│   │       ├── TermsPage.jsx       # Terms & Conditions
│   │       └── NotFoundPage.jsx    # 404 Error page
│   │
│   ├── 📁 data/
│   │   └── siteData.js             # Centralized data: NAV_LINKS, IMAGES, content
│   │
│   ├── App.jsx                     # Root app + custom page router
│   ├── App.css                     # App-level styles
│   ├── index.css                   # Global styles & CSS custom properties
│   └── Sections.css                # Section & component-level styles
│
└── package.json
```

---

## 🗺️ Page Routing

Custom lightweight router using React `useState` — **no React Router, no external dependency**.

| Page | Route Key | Component |
|------|-----------|-----------|
| Home Gallery | `home` | `HomeGallery.jsx` |
| Full Home | `original-home` | Hero + About + Works + ... |
| About Us | `about` | `AboutPage.jsx` |
| Services | `services` | `SingleServicePage.jsx` |
| Service Detail | `service-single` | `ServiceSingle.jsx` |
| Team | `team` | `TeamPage.jsx` |
| Team Profile | `team-single` | `TeamSinglePage.jsx` |
| Pricing | `pricing` | `Pricing.jsx` |
| Login | `login` | `Login.jsx` |
| Contact | `contact` | `Contactsus.jsx` |
| Privacy Policy | `privacy` | `Privacy.jsx` |
| Terms | `terms` | `TermsPage.jsx` |
| 404 | `404` | `NotFoundPage.jsx` |
| Projects | `projects` | `Projectssingle.jsx` |
| Shop | `shop` | `Shop.jsx` |
| Product Detail | `shop-single` | `ShopSingle.jsx` |
| Cart | `cart` | `Cart.jsx` |
| Checkout | `checkout` | `Checkout.jsx` |
| Wishlist | `wishlist` | `Wishlist.jsx` |
| Blog (Right) | `blog-right` | `Blogrightsidebar.jsx` |
| Blog (Left) | `blog-left` | `Blogleftsidebar.jsx` |
| Blog (Full) | `blog-full` | `Blogfullwidth.jsx` |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `v18.0.0` or higher
- **npm** `v9+` or **yarn**

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/melaniUthpala/bliize.git

# 2. Move into the project directory
cd bliize

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

🌐 Open [http://localhost:5173](http://localhost:5173) in your browser.

> Vite's **Hot Module Replacement (HMR)** gives you instant feedback — no full reloads needed during development.

### Other Commands

```bash
npm run build      # Production build → /dist
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint checks
```

---

## ✨ Features

<table>
<tr>
<td width="50%">

**🎬 UI & Animation**
- Animated preloader with Bliizë logo
- Custom cursor — dot + ring tracking effect
- GSAP ScrollTrigger animations on every section
- Sticky header — transparent on top, solid on scroll
- Back to top button

</td>
<td width="50%">

**🧭 Navigation**
- Top info bar — phone, email, socials
- Envato Market bar — original branding
- Mega dropdown with nested sub-menus
- Fully responsive mobile menu

</td>
</tr>
<tr>
<td width="50%">

**📄 Pages & Content**
- 20+ fully built pages
- HomeGallery demo selector
- Services grid with SVG icons
- Service detail page + video modal
- Team profiles with individual pages

</td>
<td width="50%">

**🛒 Shop & Blog**
- Product grid with wishlist & pagination
- Cart, Checkout, Wishlist flows
- 3 blog layout variants
- Animated brand/partner logo strip

</td>
</tr>
</table>

---

## 🔌 Vite Plugin Options

This project uses the official Vite React plugin. Two compiler options are available:

| Plugin | Compiler | Notes |
|--------|----------|-------|
| [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) | [Oxc](https://oxc.rs/) | ✅ Default — fast & lightweight |
| [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) | [SWC](https://swc.rs/) | Alternative — Rust-based, slightly faster builds |

> **React Compiler** is not enabled by default due to its current impact on build performance. To opt in, follow the [official React Compiler installation guide](https://react.dev/learn/react-compiler/installation).

---

## 🧹 ESLint & Code Quality

Basic ESLint is configured out of the box. For production-grade applications, it's recommended to:

1. Migrate to the [TypeScript + Vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
2. Add [`typescript-eslint`](https://typescript-eslint.io/) for type-aware linting rules

---

## 📦 Key Dependencies

```json
{
  "react": "^18.x",
  "vite": "^5.x",
  "gsap": "^3.x"
}
```

---

## 🖼️ Asset Credits

| Asset | Source |
|-------|--------|
| Hero & background images | [Unsplash](https://unsplash.com) |
| Avatar / profile photos | [Pravatar](https://pravatar.cc) |
| UI Icons | [Font Awesome 6](https://fontawesome.com) |
| Service SVG icons | `/src/assets/servicespageicon/` |

---

## 🙏 Credits & Acknowledgements

| | |
|--|--|
| 🎨 **Original Design** | [Bliize — ThemeForest](https://themeforest.net/item/bliize-architecture-construction-next-js-template/57988110) (Next.js template) |
| ⚛️ **Rebuilt & Customized by** | [melaniUthpala](https://github.com/melaniUthpala) — migrated to React + Vite |

---

## 📄 License

This project is based on a commercially purchased ThemeForest template.
Usage is governed by the [Envato Regular License](https://codecanyon.net/licenses/standard).

---

<div align="center">

<br/>

*Built with precision. Inspired by architecture.*

**[⭐ Star this repo](https://github.com/melaniUthpala/bliize)** if you found it useful!

<br/>

</div>