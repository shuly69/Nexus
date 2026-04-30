# Nexus - E-Commerce Demo Project

A modern e-commerce demo application built with Next.js 16, React 19, and TypeScript. This project demonstrates a complete phone/electronics shopping platform with features like product catalog, shopping cart, user authentication, favorites, and admin panel.

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| State Management | Zustand |
| Authentication | NextAuth.js |
| Database | Firebase |
| Validation | Zod |
| Animations | Motion (Framer Motion) |
| Package Manager | pnpm |

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

- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## 🎯 Key Features

### Pages
- **Home** - Main landing page with hero, brands, popular phones, deals
- **Catalog** - Product listing with filtering and sorting
- **Product Details** - Individual product page (`/catalog/[id]`)
- **Cart** - Shopping cart management
- **Favorites** - Saved favorite items
- **Account** - User account dashboard
- **Auth** - Login/Register pages
- **Admin** - Admin dashboard
- **Contacts** - Contact information
- **Returns** - Returns policy page
- **Warranty** - Warranty information

### Functionality
- Product catalog with filtering and sorting
- Shopping cart with add/remove items
- User favorites/wishlist
- User authentication (NextAuth)
- Admin panel for management
- Image upload functionality
- Review and rating system

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety

### State & Data
- `zustand` - Lightweight state management
- `firebase` - Backend services
- `next-auth` - Authentication
- `zod` - Schema validation

### UI & Styling
- `tailwindcss` - Utility-first CSS
- `motion` - Animations

## 📄 License

This is a demo project for learning purposes.