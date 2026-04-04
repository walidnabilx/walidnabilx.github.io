# Dafencii — Ubuntu OS Portfolio

An interactive developer portfolio styled as an Ubuntu/GNOME desktop, built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step.

## Features

- **Boot sequence** with Ubuntu logo and animated loading dots
- **Login screen** with clock, avatar, and click-to-enter
- **GNOME desktop** with top panel, left dock, and wallpaper
- **Draggable/resizable windows** with minimize, maximize, and close
- **7 apps** representing portfolio sections:
  - Settings (About & Stats)
  - Terminal (Skills via neofetch + interactive commands)
  - Files (Projects as Nautilus file manager)
  - Software Center (Services)
  - Text Editor (Experience & Education)
  - Email (Contact form)
  - Firefox (Links & Social)
  - Messages (Client testimonials)
- **Bilingual** English/Arabic with full RTL support
- **Responsive** — adapts to tablet and mobile
- **PWA-ready** — installable as an app

## Quick Start

Open `index.html` in a browser, or serve locally:

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

## Deployment (GitHub Pages)

1. Create a repo (e.g., `your-username.github.io`)
2. Push this code to the `main` branch
3. Go to **Settings > Pages > Source**: Deploy from branch `main` / `/ (root)`
4. Your site is live at `https://your-username.github.io/`

## Customization

All portfolio content lives in **`js/data.js`** — edit that single file to update your name, bio, skills, projects, and everything else. Both English and Arabic text are defined there.

## Structure

```
index.html          — Single-page entry point
css/
  reset.css         — CSS reset
  boot.css          — Boot + login screens
  desktop.css       — Desktop shell, panels, dock
  windows.css       — Window chrome (titlebar, resize)
  apps.css          — App-specific styles
  rtl.css           — Arabic/RTL overrides
  responsive.css    — Mobile/tablet breakpoints
js/
  data.js           — All portfolio content (EN + AR)
  i18n.js           — Language switching
  boot.js           — Boot animation + login logic
  desktop.js        — Dock, panels, clock, context menu
  window-manager.js — Drag, resize, minimize, maximize, close
  apps.js           — App content rendering
```

## License

MIT
