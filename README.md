# Nexus — E-Commerce Demo

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A modern e-commerce storefront for phones and electronics, built with Next.js 16 App Router and Feature-Sliced Design architecture.

**Live demo:** [nexus-five-sooty.vercel.app](https://nexus-five-sooty.vercel.app)
> Demo account: `demo@nexus.com` · Admin account: `admin@nexus.com`
> *(passwords stored in `.env` — see `.env.example`)*

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| UI | React 19 + Tailwind CSS 4 |
| State | Zustand 5 (with persist middleware) |
| Validation | Zod 4 |
| Auth | NextAuth.js 4 (mock provider) |
| Database | Firebase 12 |
| Animations | Motion 12 |
| Package manager | pnpm |

## Architecture

The project follows [Feature-Sliced Design](https://feature-sliced.design/):

```
├── app/          # Next.js routes (pages + layouts)
├── widgets/      # Composite UI sections (Header, Cart, Admin dashboard…)
├── features/     # User interactions with side effects (auth, cart, filters…)
├── entities/     # Business domain models and base UI (Card, Phone, User…)
└── shared/       # Reusable utilities, hooks, UI primitives
```

## Getting started

```bash
# Prerequisites: Node.js 18+, pnpm 8+

git clone https://github.com/shuly69/Nexus.git
cd Nexus
cp .env.example .env.local   # fill in your credentials
pnpm install
pnpm dev                     # http://localhost:3000
```

## Key features

- Product catalog with brand, price, and capacity filters
- Per-variant add-to-cart (color + storage combination)
- Persistent cart and wishlist via `localStorage`
- User authentication with role-based routing (`user` / `admin`)
- Admin dashboard: add, edit, delete products and manage stock
- Responsive design — mobile menu + desktop navigation

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm type-check` | TypeScript check without emitting |
| `pnpm lint` | ESLint |
