# Trivanta Impex — Premium Security & Facility Management Website

> **Brand Tagline:** *Your Facility, Our Responsibility.*  
> **Official Identity:** Trivanta Impex Facility and Management Pvt. Ltd.

---

## 🛡️ Overview

This project is a bespoke, responsive website developed for **Trivanta Impex Facility and Management Pvt. Ltd.** The digital experience fuses the refinement of a high-end international corporate brand with the command aesthetic of an advanced Security Operations Center (SOC).

---

## 🎨 Design System & Color Palette

Built strictly according to Trivanta Impex's brand guidelines:

* **Primary Background:** `#061426` (Deep Midnight Command)
* **Secondary Background:** `#0B1F3A` (Navy Elevation)
* **Card Surface:** `#102641` with glassmorphism backdrop blur
* **Electric Blue Accent:** `#0788FF`
* **Cyan Highlight:** `#00D4FF`
* **Muted Typography:** `#AAB8CA`
* **High Contrast Text:** `#FFFFFF`
* **Border Color:** `rgba(0, 212, 255, 0.18)`
* **Typography:** Plus Jakarta Sans & Inter

---

## 📂 Project Architecture (React + Vite + Tailwind CSS)

```
frontend/
├── dist/                      # Production build output
├── public/
│   ├── images/                # Real company photography
│   │   ├── trivanta-security-team-lineup.jpg
│   │   ├── security-checkpoint-screening.jpg
│   │   ├── traffic-gate-security.jpg
│   │   └── fire-safety-training.jpg
│   ├── videos/
│   │   └── hero-security.mp4  # Looping background video
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Logo.jsx           # SVG shield emblem & brandmark
│   │   ├── Navbar.jsx         # Sticky glassmorphic navbar & mobile drawer
│   │   ├── Hero.jsx           # Full-screen video hero with reduced-motion fallback
│   │   ├── TrustHighlights.jsx# Horizontal service quality pillars
│   │   ├── AboutSection.jsx   # Two-column corporate intro with badge
│   │   ├── ServicesSection.jsx# 6 service cards with modal deep-dives
│   │   ├── WhyChooseUs.jsx    # 6 numbered operational differentiators
│   │   ├── IndustriesSection.jsx # 8 specialized sectors served
│   │   ├── SecurityFirstSection.jsx # Editorial split-screen triad
│   │   ├── WorkingProcess.jsx # 4-step deployment timeline
│   │   ├── CareersSection.jsx # Recruitment application form with file upload
│   │   ├── RequestQuoteSection.jsx # High-conversion consultation form
│   │   ├── QuoteModal.jsx     # Global interactive quotation modal
│   │   ├── NotFoundPage.jsx   # Custom 404 security perimeter error page
│   │   └── Footer.jsx         # Dark navy footer with legal modals & back-to-top
│   ├── config/
│   │   └── company.js         # Central configuration for all editable company data
│   ├── styles/
│   │   └── index.css          # Tailwind directives, custom glassmorphism, scrollbars
│   ├── App.jsx                # Application layout & state orchestrator
│   └── main.jsx               # React DOM entry point
├── index.html                 # Semantic HTML5, Schema.org LD+JSON, OpenGraph
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Run Development Server
```bash
pnpm run dev
# or
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
pnpm run build
```
Generates an optimized, tree-shaken static bundle in `frontend/dist/`.

### 4. Preview Production Build
```bash
pnpm run preview
```

---

## ⚙️ Administration & Configuration

All company details, contact phone numbers, headquarters addresses, social media links, service items, and operational descriptions are centralized in:

👉 [`frontend/src/config/company.ts`](./src/config/company.ts)

Administrators can simply update values in this single file without editing React components.

---

## 🔌 Backend Integration Guide

The frontend forms are pre-configured with client-side validation, file size limits, loading spinners, and interactive feedback:

1. **Request a Quote Form (`/api/quote`):**
   - Connects to your CRM (e.g. HubSpot, Salesforce, Zoho) or email notification service (SendGrid, Resend, Nodemailer).
   - Expected payload:
     ```json
     {
       "fullName": "Vikram Malhotra",
       "companyName": "Apex Corp",
       "phone": "+91 98765 43210",
       "email": "vikram@apexcorp.com",
       "serviceRequired": "SECURITY GUARD SERVICES",
       "siteLocation": "Sector 62, Noida",
       "estimatedRequirement": "5-10 Security Personnel",
       "message": "Immediate 24/7 night patrol requirement."
     }
     ```

2. **Careers & Application Form (`/api/careers`):**
   - Handles multi-part `FormData` including the applicant's resume (`.pdf`, `.doc`, `.docx` up to 5MB).
   - In production, set your storage bucket (AWS S3, Google Cloud Storage, Cloudinary) to receive resumes.

---

## 🚀 Deployment Instructions

### Option A: Static Hosting (Vercel, Netlify, Cloudflare Pages)
1. Point your git repository or build folder to `frontend/dist`.
2. Build command: `pnpm run build`
3. Output directory: `dist`

### Option B: Nginx on Ubuntu / Linux VPS
```nginx
server {
    listen 80;
    server_name trivantaimpex.com www.trivantaimpex.com;

    root /var/www/trivanta-impex/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(mp4|webm|jpg|jpeg|png|svg|webp|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

---

## 📈 SEO & Performance Highlights

* **Google Schema.org Structured Data:** Valid `SecurityService` LD+JSON embedded in `<head>`.
* **Social Graph:** OpenGraph and Twitter cards configured for social sharing.
* **Accessibility:** Semantic elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), keyboard navigation, and ARIA labels.
* **Reduced Motion:** Automatic fallback to static photography when user preference `prefers-reduced-motion` is active.
