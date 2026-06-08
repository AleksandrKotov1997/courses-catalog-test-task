# Courses Catalog Test Task

Pixel-perfect course catalog block based on the provided Figma layout.

## Demo

Live demo: https://courses-catalog-test-task.vercel.app

## Repository

GitHub repository: https://github.com/AleksandrKotov1997/courses-catalog-test-task

## Stack

- HTML
- SCSS
- Vanilla JavaScript
- BEM methodology
- No frameworks or UI libraries

## Features

- Pixel-perfect desktop layout based on the 1920px Figma design
- Responsive catalog layout down to mobile widths
- Live search by course title without page reload
- Category filtering
- Empty state for search/filter results
- Load more button state handling
- Clean BEM-style class naming

## Project structure

```text
.
├── assets
│   ├── icons
│   └── images
├── css
│   └── styles.css
├── js
│   └── app.js
├── scss
│   └── styles.scss
├── index.html
├── package.json
└── README.md
```

## Running locally

Install dependencies:

```bash
npm install
```

Compile SCSS once:

```bash
npm run sass
```

Or run Sass in watch mode while editing:

```bash
npm run sass:watch
```

Open `index.html` through a local server, for example with VS Code Live Server.

## Notes

The project follows the original test task requirements: static HTML, vanilla JavaScript, SCSS, BEM-style naming, live search, category filtering, and responsive layout behavior.
