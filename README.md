# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Performance

- Code-splitting enabled via `React.lazy` in `src/main.jsx`.
- Build optimizations in `vite.config.js`: manual chunks, console/debugger dropped, precompression (gzip & brotli), and optional bundle analysis (`npm run build:analyze`).
- ESLint rules discourage heavy imports and console usage in production.

## Production

- Run a production build with analysis:
  - `npm run build:analyze`
  - Open `dist/stats.html` for a visual breakdown.
  - Serve precompressed assets using a static server or Nginx (example config below).

Example Nginx location block for precompressed assets:

```
gzip_static on;
location / {
  try_files $uri $uri/ /index.html;
  add_header Cache-Control "public, max-age=31536000, immutable";
}
location = /index.html {
  add_header Cache-Control "no-cache";
}
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
