# Nexus — E-Commerce Storefront

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A full-featured e-commerce SPA for phones and electronics built with Next.js 16 App Router, strict TypeScript, and Feature-Sliced Design architecture.

**Live demo → [nexus-five-sooty.vercel.app](https://nexus-five-sooty.vercel.app)**

> **Demo credentials**
> User: `demo@nexus.com` · Admin: `admin@nexus.com`
> *(passwords are loaded from `.env` — see `.env.example`)*

---

## Overview

Nexus covers the full e-commerce surface: browsing, filtering, product detail, cart, wishlist, checkout flow, user profile, and an admin dashboard for inventory management — all wired together with persistent client state and role-based access control.

The project is intentionally kept as a realistic portfolio piece: no lorem-ipsum data, no placeholder pages, decisions documented in comments.

---

## Tech stack

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | File-based routing, server components, layout nesting |
| Language | TypeScript 5 (strict) | Full type coverage — zero `any` in source |
| UI | React 19 + Tailwind CSS 4 | Composition-first components, utility classes |
| State | Zustand 5 + persist middleware | Minimal boilerplate, cart/wishlist survive refresh |
| Validation | Zod 4 | Runtime schema validation on forms and API responses |
| Auth | NextAuth.js 4 (mock provider) | Role-based routing (`user` / `admin`) |
| Database | Firebase 12 | Cloud storage for products and uploads |
| Animations | Motion 12 | Declarative enter/exit transitions |
| Package manager | pnpm | Fast installs, strict hoisting |

---

## Architecture

The project follows [Feature-Sliced Design (FSD)](https://feature-sliced.design/) — a layered architecture that makes it easy to locate any piece of logic and prevents circular dependencies between layers.

```
├── app/              # Next.js App Router — pages, layouts, API routes
│   ├── catalog/      # /catalog and /catalog/[slug]
│   ├── cart/
│   ├── admin/
│   ├── auth/
│   └── api/          # Upload endpoint, NextAuth
│
├── widgets/          # Self-contained page sections (no business logic leaks up)
│   ├── Navigation/   # Header + mobile menu
│   ├── Cart/         # Cart table, order summary, recommendations
│   ├── Admin/        # Dashboard tabs: overview, products, add/edit form
│   ├── Catalog/      # Product grid, search bar, filter sidebar
│   └── Phone/        # Product detail page sections
│
├── features/         # User-facing interactions with side effects
│   ├── auth/         # Login/register forms, Zustand auth store, rehydration
│   ├── cart/         # Cart store (persist), add/remove/quantity actions
│   ├── favourite/    # Wishlist store (persist), toggle logic
│   ├── catalog-filters/ # Search, sort, brand/price filter logic
│   ├── admin/        # Admin CRUD store, phone form state, UI store
│   ├── checkout/     # Multi-step checkout flow (confirm → address → payment)
│   └── profile/      # Profile store (persist), hydration hook
│
├── entities/         # Domain models — types, Zod schemas, base UI
│   ├── Card/         # ProductCard, Rating, ColorPicker, AddToCart button
│   ├── Phone/        # Validators, lib functions (stats, stock, price)
│   ├── Product/      # getProductBySlug
│   ├── Promo/        # Countdown timer, mock promo API
│   └── User/         # User store
│
└── shared/           # Framework-agnostic utilities and primitives
    ├── ui/           # Container, Modal, Logo, Icon, UploadButton
    ├── hooks/        # useCurrentUser
    ├── config/       # Static data: nav links, brands, colors, capacity options
    ├── lib/          # slugify, uploadPhoto, toast helpers
    └── api/          # createPhone helper
```

### Key architectural decisions

**Zustand over Redux** — The app has three independent persistence domains (cart, wishlist, admin inventory). Zustand's `persist` middleware handles each with a single line; the equivalent Redux Toolkit setup would be 3× the boilerplate for the same result.

**Role stored on the user object, not derived from name** — `user.role === "admin"` instead of `user.name === "Admin"`. Role is set at login time by the auth API and is part of the `AuthUser` type — adding new roles requires no changes outside `auth.ts`.

**Auth token in memory, not in the store's persist layer** — The Zustand auth store is intentionally not persisted. `useAuthRehydrate` reads `localStorage` once on mount and populates the store, so the token is never directly accessible from the store object by untrusted code after startup.

**`prev: any` eliminated via typed setters** — `AddTabSection` used 8 identical `setFormData((prev: any) => ...)` calls. Replaced with two typed helpers: `setField<K extends keyof CardPhone>` and `setSpec<K extends keyof ProductSpecs>`, both constrained by `keyof`.

**Single source of truth for admin phones** — The original code called `localStorage.setItem` manually in every action (addPhone, updatePhone, deletePhone, toggleBadge, updateVariantQuantity, removeVariant — 6 places). Replaced with a single `zustand/persist` declaration that handles serialization automatically.

---

## Features

### Storefront
- **Product catalog** — filterable by brand, price range, and storage capacity; sortable by price / rating / name
- **Free-text search** — matches model name, brand, capacity, and color names simultaneously
- **Product detail page** — image, specs table, color/storage selection, quantity picker, key features list
- **Shopping cart** — line items keyed by `(id, colorId, capacity)` so different variants stay separate; quantity controls; order summary with subtotal
- **Wishlist** — heart-button toggle on every card; dedicated `/favourite` page
- **Promo countdown** — server-synced timer on the deals section

### Auth & accounts
- **Login / Register** — Zod-validated forms, field-level error messages, show/hide password
- **Persistent session** — `rememberMe` stores the token in `localStorage`; `useAuthRehydrate` rehydrates the Zustand store on every page load
- **Role-based routing** — `user` lands on `/account`, `admin` lands on `/admin`; the admin page guard checks `user.role` server-side on every render

### Admin dashboard
- **Overview tab** — live stats: total phones, variants, brands, average price, total stock; top-rated and most-expensive lists
- **Products tab** — expandable rows with inline stock editing and badge cycling (New Arrival / Best Seller / Limited Time)
- **Add / Edit tab** — full phone form with Zod validation; image upload via UploadThing; variant builder (color + storage + stock); SKU field

### Infrastructure
- **Image uploads** — UploadThing integration; uploaded URL stored as `imageUrl` on the phone record
- **Responsive layout** — mobile burger menu + desktop navigation; catalog grid reflows at `lg` breakpoint
- **Error states** — empty cart, empty wishlist, product not found — all have dedicated UI components

---

## Getting started

```bash
# Prerequisites: Node.js 18+, pnpm 8+

git clone https://github.com/shuly69/Nexus.git
cd Nexus

cp .env.example .env.local
# Fill in Firebase config and UploadThing keys

pnpm install
pnpm dev       # → http://localhost:3000
```

### Environment variables

```bash
# Demo credentials (mock auth only — remove in production)
NEXT_PUBLIC_DEMO_EMAIL=demo@nexus.com
NEXT_PUBLIC_ADMIN_EMAIL=admin@nexus.com

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server on port 3000 |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm type-check` | Run `tsc --noEmit` (no output files) |
| `pnpm lint` | Run ESLint |

---

## Project status

This is a portfolio / demo project. The auth layer uses a mock provider — to productionise it, replace `features/auth/api/auth.ts` with real API calls and configure a NextAuth adapter for your database.

Pull requests and issues are welcome.
