# Maison Éclat

Maison Éclat is a luxury selective boutique built with `React`, `TypeScript`, and `Vite`. The project presents a curated collection of premium fragrances and elevated hair-care formulas with an editorial homepage, detailed product pages, persistent cart, and checkout flow.

## Features

- Luxury selective boutique UI with a French-inspired brand direction
- Product cards with brand, collection, rating, accords, formula type, and volume
- Search and filters by product name, brand, product type, family, notes, and accords
- Product detail pages with scent/care profile, mood, benefits, and related products
- Persistent cart powered by `Zustand` and `localStorage`
- Checkout flow with delivery, payment, comments, validation, order summary, and success screen
- Fully responsive layout styled with `Tailwind CSS`

## Tech Stack

- `React`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `Zustand`
- `React Router`
- `Lucide React`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  app/         # router and app-level setup
  entities/    # domain entities such as product cards
  features/    # business features such as cart state
  pages/       # home, product, cart, and checkout screens
  shared/      # data, api facade, types, and shared UI
  widgets/     # reusable page sections such as filters and header
```

## Product Data

The boutique collection of perfumes and shampoos is stored locally in:

```text
src/shared/data/perfumes.ts
```

The API facade in `src/shared/api/products.ts` keeps the rest of the app decoupled from the data source, so the local perfume and hair-care collection can later be replaced with a real backend without rewriting the UI.

## Repository

GitHub: `https://github.com/Delalius/online-shop`
