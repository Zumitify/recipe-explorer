# 🍳 Recipe Explorer

A simple, responsive web app that searches and displays recipes from a public REST API. Search for any dish, browse the results as cards, and click one to see the full recipe — ingredients and instructions — in a popup.

**Live demo:** _add your deployed URL here after deploying_

![React](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-5-646cff)

## Features

- 🔎 **Search** recipes by name (loads a default set on first visit)
- 🧱 **Responsive card grid** that adapts to mobile, tablet, and desktop
- 📋 **Recipe details** in a modal — image, cuisine, category, ingredients, and instructions
- ⏳ **Loading and error states** with a retry button
- 🔑 **No API key required**

## Tech stack

- [React 18](https://react.dev/) + [Vite](https://vite.dev/)
- Plain CSS (responsive grid + one media query)
- [TheMealDB API](https://www.themealdb.com/api.php) — free public REST API, no key needed

## Project structure

```
src/
  api.js          # fetch helpers for TheMealDB (search + lookup)
  App.jsx         # main view: search, loading/error states, grid
  MealCard.jsx    # one recipe card in the grid
  MealDetail.jsx  # full recipe shown in a modal
  index.css       # all styles (responsive)
  main.jsx        # app entry point
```

## Run locally

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # build for production into dist/
npm run preview  # preview the production build
```

## Deploy (free hosting)

The app is a static site — any of these free hosts work:

- **Netlify** — drag-and-drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo (settings are in `netlify.toml`: build `npm run build`, publish `dist`).
- **Vercel** — import the repo at [vercel.com/new](https://vercel.com/new); it auto-detects Vite.
- **GitHub Pages** — run `npm run build` and publish the `dist/` folder.

## API

This project uses [TheMealDB](https://www.themealdb.com/api.php) with the free developer test key (`1`):

| Purpose          | Endpoint                                        |
| ---------------- | ----------------------------------------------- |
| Search by name   | `/api/json/v1/1/search.php?s={query}`           |
| Look up by id    | `/api/json/v1/1/lookup.php?i={id}`              |

No sign-up or secret key is required, so nothing sensitive is shipped in the frontend.
