# Personal Portfolio Specification & Implementation Plan

This document serves as the master specification prompt and instructions for building a modern, high-performance personal portfolio website targeted at global engineering managers, technical recruiters, and remote enterprise clients.

---

## 1. Design & Branding Architecture

* **Primary Persona:** M. Hamamul Fikri L. — Frontend-Focused Full-Stack Engineer
* **Target Audience:** US, EU, and Global Remote Hiring Managers, Startup Founders, and Technical Recruiters.
* **Color Palette (Blue Theme):**
  * Accent Primary: `Electric Blue / Royal Blue` (`#2563EB` / Tailwind `blue-600`)
  * Accent Light / Hover: `Sky Blue` (`#38BDF8` / Tailwind `sky-400` or `blue-500`)
  * Background (Dark Mode First): Deep Slate / Navy Tint (`#0B0F19` and `#111827`)
  * Surface Cards: Dark Zinc with subtle blue borders (`border-blue-950/40 bg-zinc-900/60`)
  * Foreground / Text: High-contrast white (`zinc-100`) and muted slate (`zinc-400`)
* **Profile Photo Layout:**
  * Clean, rounded-2xl or circular portrait with a subtle glowing blue gradient ring (`ring-2 ring-blue-500/30 shadow-[0_0_25px_rgba(37,99,235,0.2)]`).
  * Placeholder path: `/public/avatar.jpg`.

---

## 2. Tech Stack & Dependencies

* **Framework:** Next.js 14+ (App Router, TypeScript)
* **Styling:** Tailwind CSS + shadcn/ui components (`Button`, `Card`, `Badge`, `Input`, `Textarea`, `Dialog`)
* **Icons:** `lucide-react`
* **Theming:** `next-themes` (Dark mode default, option to toggle)
* **Scheduling:** Cal.com embed (`@calcom/embed-react`) or Calendly
* **Animations:** Framer Motion (subtle scroll reveals and hover effects)

---

## 3. Directory Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── case-studies/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── capabilities-bento.tsx
│   ├── case-studies.tsx
│   ├── case-study-modal.tsx
│   ├── experience-timeline.tsx
│   ├── booking-section.tsx
│   ├── footer.tsx
│   └── ui/ (shadcn primitives)
├── content/
│   └── case-studies.json
└── public/
    ├── avatar.jpg
    └── og-image.png
```

---

## 4. Page Content & Copywriting (Standard US English)

### Hero Section (`components/hero.tsx`)
* **Status Pill:** `● Available for Global Remote Roles & Contracts (US/EU/APAC)`
* **Headline:** `Frontend-Focused Full-Stack Engineer`
* **Sub-headline:** 
  > Software Engineer with 4+ years of professional experience building high-reliability web systems, responsive UI architectures, and mission-critical API integrations for aviation and enterprise logistics.
* **Profile Media:**
  * Responsive portrait container on the right (desktop) or above headline (mobile).
* **Call to Actions (CTAs):**
  * Primary Button (Solid Blue): `Book an Intro Call` (triggers Cal.com modal or jumps to `#booking`)
  * Secondary Button (Ghost/Outline): `View Case Studies` (jumps to `#case-studies`)
* **Social Links:**
  * GitHub: `https://github.com/hamamullaiqi`
  * LinkedIn: `https://linkedin.com/in/hamamullaiqi`
  * Email: `hamamullaiqi@gmail.com`

---

### Capabilities Bento Grid (`components/capabilities-bento.tsx`)

#### Card 1: Frontend Engineering & UI Architecture
* **Stack:** React, Next.js, TypeScript, Tailwind CSS, Ant Design, Material-UI
* **Focus:** High-performance responsive layouts, modular component systems, client-side caching, and low-latency state orchestration.

#### Card 2: Mission-Critical APIs & Integrations
* **Stack:** Node.js, Express.js, Hono, RESTful Microservices
* **Focus:** Seamless integration with complex third-party platforms (multi-airline reservation systems, logistics hubs), idempotent request handling, and automated retry mechanisms.

#### Card 3: Databases & Analytics Pipelines
* **Stack:** MongoDB (Aggregation Pipelines), PostgreSQL, MySQL
* **Focus:** Synthesizing massive operational logs, indexed query optimization, and decoupled analytical read loads for real-time dashboards.

#### Card 4: System Reliability & Security
* **Stack:** Docker, CI/CD, Role-Based Access Control (RBAC), SLA 24/7 Compliance
* **Focus:** Strict data authorization policies, fail-safe fallback routines during network degradation, and fault-tolerant transaction processing.

---

### Case Studies Section (`components/case-studies.tsx`)

#### 1. Airport Self-Service Check-in Kiosk Engine
* **Category:** Backend & Mission-Critical Integration
* **Tech Stack:** `Node.js`, `Express.js`, `REST APIs`, `Airline Integrations`, `24/7 SLA`
* **Challenge:** Airport kiosk hardware requires continuous 24/7 availability. Network instability between physical airport kiosks and remote airline reservation systems risked session drops and lost booking records during high-traffic windows.
* **Engineering Solution:**
  * Built an Express.js backend engine managing multi-passenger check-in transactions concurrently.
  * Integrated multi-airline reservation APIs for automated PNR lookup, verification, seat allocation, and boarding pass dispatch.
  * Implemented exponential backoff retries, state-preserving session fallbacks, and transaction rollback mechanics.
* **Result & Impact:** Delivered uninterrupted check-in operations during peak flight schedules, preventing counter congestion and meeting strict SLA uptime.

#### 2. CIS 2.0 & Real-Time Cargo Analytics Dashboard
* **Category:** Full-Stack & Data Analytics
* **Tech Stack:** `React`, `Node.js`, `MongoDB Aggregations`, `Ant Design`, `Performance Tuning`
* **Challenge:** Heavy day-to-day air cargo operations generated millions of operational logs. Leadership required sub-second visibility into production volume and client-tier revenue without causing read contention on the operational database.
* **Engineering Solution:**
  * Designed an executive analytics dashboard using React and Ant Design.
  * Structured multi-stage MongoDB aggregation pipelines to summarize historical data efficiently.
  * Optimized indexing strategies and implemented query caching to minimize database execution time.
* **Result & Impact:** Replaced manual end-of-day spreadsheet reconciliation with real-time, interactive insights for flight cargo capacity planning.

#### 3. AWARES — Air Cargo Warehouse Management UI
* **Category:** Frontend Engineering & Enterprise Logistics
* **Tech Stack:** `React`, `Tailwind CSS`, `TypeScript`, `3rd-Party API Integration`, `State Synchronization`
* **Challenge:** Maintaining strict upstream-to-downstream data consistency across the air cargo lifecycle (from cargo acceptance, weighing, and storage allocation to final flight dispatch) while synchronizing state with multiple external third-party stakeholder systems where payload discrepancies or out-of-order updates could disrupt warehouse operations.
* **Engineering Solution:**
  * Engineered deterministic client-side state orchestration and strict payload validation in React and TypeScript to keep cargo records consistent from initial intake to outbound dispatch.
  * Integrated multi-party REST APIs on the frontend with real-time reconciliation views, immediately surfacing data mismatches between internal warehouse states and third-party systems.
  * Built ergonomic, step-locked UI workflows in Tailwind CSS that prevent invalid downstream transitions until upstream third-party verifications are confirmed.
* **Result & Impact:** Eliminated upstream-to-downstream data drift across third-party integrations and accelerated ground cargo handoffs through a reliable, single-source-of-truth operator interface.

#### 4. SIPP — Passenger Profiling & Security System
* **Category:** Full-Stack Engineering & Aviation Security
* **Tech Stack:** `React`, `Tailwind CSS`, `Node.js`, `Express.js`, `RBAC`, `Data Analytics`
* **Challenge:** Aviation security personnel required low-latency full-stack interfaces and reliable backend query services to screen passenger risk profiles instantly, while strictly enforcing data authorization across sensitive profiling records.
* **Engineering Solution:**
  * Architected both the Node.js/Express.js backend services and the responsive React + Tailwind CSS screening interface.
  * Implemented granular Role-Based Access Control (RBAC) across API endpoints and frontend views to enforce strict data authorization on sensitive passenger records.
  * Optimized backend search and analytical query endpoints to deliver instant risk profile lookups and audit trails for security officers.
* **Result & Impact:** Reduced security screening friction and strengthened data governance through an integrated, RBAC-fortified full-stack platform.

---

### Professional Experience Section (`components/experience-timeline.tsx`)
* **Role:** Full-Stack Developer
* **Company:** PT Edifly Solusi Indonesia
* **Duration:** Apr 2022 – Present (4+ Years)
* **Key Contributions:**
  * Developing and maintaining enterprise frontend architectures and backend endpoints for airport, cargo, and warehouse workflows.
  * Architecting secure RBAC access policies across core operations.
  * Optimizing database query performance and UI rendering for mission-critical 24/7 operations.

---

### Booking & Contact Section (`components/booking-section.tsx`)
* **Booking Widget:** Embed Cal.com or Calendly inline iframe (allows international clients to pick a slot directly in their local timezone).
* **Direct Contact:** Quick contact form (Name, Email, Message) connected to Next.js Route Handler using Resend or Formspree.
* **Timezone Pill:** `Timezone: UTC+7 (Western Indonesia Time) — Readily flexible for US, EU, and APAC operational hours.`

---

## 5. Step-by-Step Antigravity Execution Instructions

### Step 1: Project Scaffolding
```bash
npx create-next-app@latest personal-portfolio --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
cd personal-portfolio
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge input textarea
npm install lucide-react next-themes @calcom/embed-react framer-motion
```

### Step 2: Configure Theme & Tailwind
* Set up dark-mode primary background color in `tailwind.config.ts`:
  * Add custom blue tokens (`#2563EB`, `#1D4ED8`, `#38BDF8`).
* Wrap the app with `ThemeProvider` inside `app/layout.tsx`.

### Step 3: Implement Page Layout & Sections
* Implement `components/navbar.tsx` with smooth scroll navigation and theme toggle.
* Assemble `hero.tsx` with blue radial glow background (`bg-gradient-to-tr from-blue-600/15 via-transparent to-transparent`).
* Place `avatar.jpg` in `/public` and bind to the hero section.
* Implement the Bento Grid in `capabilities-bento.tsx` with subtle blue borders on hover (`hover:border-blue-500/50`).
* Implement `case-studies.tsx` with modal or expand view for deep technical reading.
* Set up `booking-section.tsx` with Cal.com embed.

### Step 4: Metadata & Production Optimization
* Add metadata in `app/layout.tsx`:
  * Title: `M. Hamamul Fikri L. | Frontend-Focused Full-Stack Engineer`
  * Description: `Software Engineer specializing in high-reliability web applications, mission-critical API integrations, and analytics dashboards.`
* Verify responsive breakpoints on mobile (375px), tablet (768px), and desktop (1280px).