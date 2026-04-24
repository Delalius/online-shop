# Online Shop

Интернет-магазин на `React + TypeScript + Vite` с каталогом товаров, фильтрацией, страницей товара, корзиной и оформлением заказа.

## Возможности

- каталог товаров с поиском, фильтрацией и сортировкой
- страница товара с подробной информацией и похожими товарами
- корзина на `zustand` с сохранением в `localStorage`
- оформление заказа с валидацией полей
- адаптивный интерфейс на `Tailwind CSS`

## Стек

- `React`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `Zustand`
- `React Router`

## Запуск

```bash
npm install
npm run dev
```

## Скрипты

```bash
npm run dev
npm run build
npm run lint
```

## Структура

```text
src/
  app/         # router and app-level setup
  entities/    # domain entities
  features/    # business features, e.g. cart
  pages/       # page-level screens
  shared/      # api, types, shared ui
  widgets/     # reusable page sections
```

## Репозиторий

GitHub: `https://github.com/Delalius/online-shop`
