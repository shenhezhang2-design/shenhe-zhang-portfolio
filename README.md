# Shenhe Zhang — Portfolio

Personal portfolio website with English and Chinese content. Built with HTML, CSS and JavaScript; no package installation is needed.

## Preview

Run `python -m http.server 4173` in this directory, then visit http://localhost:4173.

## Edit

- `js/content.js`: profile, contact details and interface text.
- `js/projects.js`: projects and case studies.
- `css/style.css`: visual styles.
- `assets/`: photographs and project images.

## GitHub Pages

Publish the `main` branch from `/ (root)` under repository Settings → Pages. The `.nojekyll` file allows the static files to be served directly. Relative asset URLs and hash routes support a repository subdirectory.

## Sites

Run `node scripts/build-static.mjs` to prepare `dist/`. The Sites configuration is in `.openai/hosting.json`.
