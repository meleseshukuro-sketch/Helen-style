# Helen Lifestyle

Modern, responsive e-commerce storefront for **Helen Lifestyle** — a multi-department fashion and lifestyle retail store based at Turfloop Plaza, Mankweng, Polokwane, Limpopo, South Africa.

Website: [https://helenlifestyle.co.za](https://helenlifestyle.co.za)

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Reusable React components
- Local product/category data (ready for Shopify, WooCommerce, Supabase, Firebase, Sanity, Strapi, etc.)

## Getting started

### Requirements

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deploy on Render

The project includes `render.yaml` and is ready for [Render](https://render.com).

### Option A — Blueprint (recommended)

1. Push this repo to GitHub (already at `Helen-style` if connected).
2. In Render: **New** → **Blueprint**
3. Select the `Helen-style` repository
4. Apply the `render.yaml` service
5. After deploy, set environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your Render URL (e.g. `https://helen-lifestyle.onrender.com`) or `https://helenlifestyle.co.za`

### Option B — Web Service manually

1. **New** → **Web Service** → connect the GitHub repo
2. Settings:
   - **Runtime:** Node
   - **Build Command:** `npm ci && npm run build`
   - **Start Command:** `npm run start`
   - **Node version:** 20 (or set `NODE_VERSION=20.18.0`)
3. Environment variables:
   - `NODE_ENV` = `production`
   - `NEXT_PUBLIC_SITE_URL` = your live site URL

Render sets `PORT` automatically. The start script binds to `0.0.0.0` so the service is reachable.

### After deploy

- Free tier services sleep after inactivity; the first request may be slow.
- Point `helenlifestyle.co.za` to Render via a custom domain in the Render dashboard when ready.

## Project structure

```
src/
  app/                 # Routes (home, departments, product, bag, checkout, account…)
  components/
    account/           # Account shell & nav
    department/        # Category sidebar & department layout
    home/              # Homepage sections
    layout/            # Header, footer, search, providers
    product/           # Cards, grid, filters, detail, quick view
    ui/                # Buttons, badges, empty/loading states
  context/             # Cart, wishlist, UI state
  data/                # Products, categories, store info, placeholders
  lib/                 # Utils, department page factory, admin prep
  types/               # Shared TypeScript types
public/                # Static assets & favicon
```

## Key features

- Sticky header with announcement bar, desktop nav and mobile drawer
- Kids included as a main navigation department
- Left-side category menus on department pages (desktop sticky / mobile drawer)
- Product listing with sort & filters
- Product detail with gallery, zoom, swipe, size/colour, bag & wishlist
- Search overlay (products, departments, recent/popular/suggested)
- Shopping bag, checkout (guest/login placeholders), confirmation
- Account: profile, orders, addresses, wishlist, returns, password
- About & Contact pages with store hours, WhatsApp, map placeholder
- SEO metadata, Open Graph, `robots.txt`, sitemap
- Prices formatted in South African rand (e.g. `R399.99`)

## Replacing placeholder content

1. **Products & images** — edit `src/data/products.ts` and `src/data/categories.ts` (`placeholderImages`).
2. **Store details** — edit `src/data/store.ts`.
3. **Homepage banners / admin shape** — see `src/lib/admin.ts` for repository interfaces to swap in a real backend.

## Brand notes

- Clean black-and-white layout with a restrained red accent (`#c8102e`)
- Original Helen Lifestyle branding (not affiliated with or copied from other retailers)
- Focus on affordability, variety, convenience and friendly service

## Contact

- Email: HelenLifestylestore@gmail.com
- Phone: +27 60 942 3250
- Location: Helen Lifestyle – Turfloop Plaza, Mankweng, Polokwane, Limpopo, South Africa
