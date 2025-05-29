# Accountia

A modern, modular Angular application for business management, featuring a dynamic sidebar, multi-language support, and a clean, responsive UI.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Sidebar Navigation](#sidebar-navigation)
- [Translation (i18n)](#translation-i18n)
- [Adding/Updating Sidebar Icons](#addingupdating-sidebar-icons)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## Features
- **Dynamic Sidebar** with collapsible sections and SVG icons
- **Multi-language support** (English & Arabic out of the box)
- **Responsive design**
- **Modular code structure**
- **Easy to extend** with new features, routes, and translations

---

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── sidenav/
│   │   │       ├── sidenav.component.ts
│   │   │       ├── sidenav.component.html
│   │   │       ├── sidenav.component.scss
│   │   │       └── sidenav.service.ts
│   │   ├── services/
│   │   ├── assets/
│   │   └── ...
│   ├── assets/
│   │   ├── svg/
│   │   │   ├── dashboard.svg
│   │   │   ├── analytics.svg
│   │   │   ├── settings.svg
│   │   │   └── ...
│   │   └── i18n/
│   │       ├── en.json
│   │       └── ar.json
│   └── ...
├── package.json
├── README.md
└── ...
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Angular CLI](https://angular.io/cli)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd accountia
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   ng serve
   ```
   The app will be available at `http://localhost:4200`.

---

## Available Scripts
- `ng serve` — Start the development server
- `ng build` — Build the app for production
- `ng test` — Run unit tests
- `ng lint` — Lint the codebase

---

## Sidebar Navigation
- The sidebar is defined in `src/app/core/sidenav/`.
- Menu items are managed in `sidenav.service.ts` as an array of objects.
- Supports collapsible sections (e.g., Reports, Analytics, Settings) with child items.
- Each menu item can have:
  - `icon`: Path to SVG icon
  - `label`: Translation key
  - `route`: Router path
  - `hasDropdown`: Boolean for collapsible
  - `children`: Array of submenu items

### Example Menu Item
```ts
{
  icon: 'assets/svg/reports.svg',
  label: 'navigation.reports',
  route: '/reports',
  hasDropdown: true,
  children: [
    { icon: 'assets/svg/reports.svg', label: 'reports.sales', route: '/reports/sales' },
    // ...
  ]
}
```

---

## Translation (i18n)
- Translation files are in `src/assets/i18n/en.json` and `ar.json`.
- Use translation keys in menu items and templates.
- To add a new language:
  1. Create a new JSON file (e.g., `fr.json`).
  2. Add translations for all keys.
  3. Update language service/configuration if needed.

---

## Adding/Updating Sidebar Icons
- SVG icons are stored in `src/assets/svg/`.
- To add a new icon:
  1. Place your SVG file in the folder.
  2. Reference it in the menu item's `icon` property.
- For best results, use 24x24 or 20x20 SVGs with `fill="none"` and `stroke="currentColor"` for theme compatibility.

---

## Troubleshooting
- **Sidebar children not showing?**
  - Ensure `children` array is populated in the service.
  - Check that `openDropdown` logic is working (see console logs).
  - Inspect the DOM to confirm submenu `<ul>` is rendered.
  - Add a background to `.submenu` in SCSS for debugging.
- **Icons not showing?**
  - Confirm the SVG file exists and the path is correct.
  - Check for typos in the `icon` property.
- **Translation not working?**
  - Make sure the translation key exists in the JSON file.
  - Check that the translation pipe is available in the template.
- **Collapsible arrow not rotating?**
  - Ensure the `.rotated` class is applied to the SVG when open.
  - Check the SCSS for the `.dropdown svg.rotated` selector.

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License
MIT
