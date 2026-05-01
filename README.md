# Nexus - E-Commerce Demo Project

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> A modern e-commerce demo application showcasing best practices in Next.js 16, React 19, and TypeScript development.

## 🌐 Live Demo

Visit the live site: [https://nexus-five-sooty.vercel.app](https://nexus-five-sooty.vercel.app)

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Screenshots](#-screenshots)
- [Dependencies](#-dependencies)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [License](#-license)

## 📖 Overview

Nexus is a comprehensive e-commerce demo project designed to demonstrate modern web development practices. It features a complete phone/electronics shopping platform with:

- 🛒 Product catalog with advanced filtering and sorting
- 👤 User authentication and profile management
- ❤️ Favorites/wishlist functionality
- 🏠 Admin dashboard for product management
- 📱 Fully responsive design
- ✨ Smooth animations and transitions

This project is ideal for learning purposes, portfolio demonstration, or as a starting point for e-commerce applications.

## 🚀 Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 16.1.6 |
| Language | TypeScript | 5.x |
| UI Library | React | 19.2.3 |
| Styling | Tailwind CSS | 4 |
| State Management | Zustand | 5.0.12 |
| Authentication | NextAuth.js | 4.24.14 |
| Database | Firebase | 12.12.0 |
| Validation | Zod | 4.3.6 |
| Animations | Motion | 12.34.4 |
| Package Manager | pnpm | - |

## 📁 Project Structure

```
my-app/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── account/            # User account page
│   ├── admin/              # Admin dashboard
│   ├── auth/               # Authentication pages
│   ├── cart/               # Shopping cart
│   ├── catalog/            # Product catalog
│   ├── contacts/           # Contact page
│   ├── favourite/          # User favorites
│   ├── registration/      # User registration
│   ├── returns/           # Returns policy page
│   └── warranty/          # Warranty information
├── entities/               # Domain entities
│   ├── Card/               # Shopping cart entity
│   ├── Contacts/          # Contact entity
│   ├── Phone/              # Phone product entity
│   ├── Product/           # Generic product entity
│   ├── Promo/              # Promotion entity
│   └── User/               # User entity
├── features/               # Business logic modules
│   ├── admin/              # Admin functionality
│   ├── auth/               # Authentication logic
│   ├── cart/               # Cart management
│   ├── catalog-filters/    # Catalog filtering
│   ├── checkout/           # Checkout process
│   ├── favourite/          # Favorites management
│   ├── hero-filters/       # Hero section filters
│   ├── phone/              # Phone-specific features
│   └── profile/            # User profile management
├── widgets/                # Reusable UI components
│   ├── Admin/              # Admin widgets
│   ├── Auth/               # Auth widgets
│   ├── Banner/             # Banner components
│   ├── Brand/              # Brand display
│   ├── Cart/               # Cart widgets
│   ├── Catalog/            # Catalog widgets
│   ├── Category/           # Category widgets
│   ├── Contacts/           # Contact widgets
│   ├── Deal/               # Deal/promotion widgets
│   ├── Favourite/          # Favorites widgets
│   ├── Footer/             # Footer component
│   ├── Header/             # Header component
│   ├── Hero/               # Hero section
│   ├── Navigation/         # Navigation widgets
│   ├── Phone/              # Phone-specific widgets
│   ├── Popular-phones/     # Popular phones
│   ├── Profile/            # Profile widgets
│   ├── Review/             # Review widgets
│   ├── Subscribe/          # Newsletter subscribe
│   └── Support/            # Support widgets
├── shared/                 # Shared utilities
│   ├── api/                # API utilities
│   ├── config/             # Configuration files
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   └── ui/                 # Base UI components
└── public/                 # Static assets
    ├── images/             # Image assets
    └── svg/                # SVG assets
```

## 🛠️ Getting Started

### Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | 18+ | LTS recommended |
| pnpm | 8+ | Package manager |

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd my-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
