# Modern Glassmorphism Portfolio

A modern, responsive portfolio website built with Nuxt 3, Vue.js, and Tailwind CSS featuring a glassmorphism design style. This portfolio showcases professional experience, projects, skills, and contact information with smooth animations and interactive elements.

![Portfolio Preview](public/images/banner.png)

## Features

- 🌟 Modern glassmorphism UI design
- 🚀 Built with Nuxt 3 and Vue.js
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive for all devices
- 🌓 Light/dark mode support
- ✨ Smooth animations and transitions
- ♿ Accessibility optimized
- 🔍 SEO friendly with meta tags and structured data
- 🚀 GitHub Pages deployment ready

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **UI Library**: [Vue.js](https://vuejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: Custom CSS animations + [VueUse Motion](https://motion.vueuse.org/)
- **Icons**: [Nuxt Icon](https://github.com/nuxt-modules/icon)
- **Fonts**: Google Fonts (Poppins, Space Grotesk)
- **Deployment**: GitHub Pages

## Project Structure

```
├── assets/            # CSS, SCSS, and other assets
├── components/        # Vue components
│   └── Sections/      # Page section components
├── layouts/           # Layout components
├── pages/             # Page components
├── public/            # Static files
│   ├── icons/         # SVG icons
│   └── images/        # Image assets
└── server/            # Server-side code
```

## Setup

This project strictly uses [pnpm](https://pnpm.io/) as its package manager (enforced via `preinstall`).

```bash
pnpm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm generate
```

This will generate a static version of the site in the `.output/public` directory.

## Deployment

Deploy to GitHub Pages with:

```bash
pnpm run deploy
```

(Use `run` — bare `pnpm deploy` is a built-in pnpm workspace command.)

This generates the static site, rebuilds the resume PDF from the fresh build (`scripts/generate-pdf.mjs` via headless Chrome), copies it into `.output/public`, and publishes that directory to the `gh-pages` branch. The PDF is regenerated on every deploy, so content changes never ship with a stale resume.

## Customization

### Content

Update your personal information in the respective section components under `components/Sections/`.

### Styling

- Global styles are in `assets/css/main.scss`
- Tailwind configuration is in `tailwind.config.ts`
- Color scheme can be adjusted in the Tailwind config

### SEO

Update SEO settings in `nuxt.config.ts` and `app.vue`.

## Browser Support

The portfolio is optimized for modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT
