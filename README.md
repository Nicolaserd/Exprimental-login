# React + Vite + Tailwind — Login (JSX)

Plantilla minimal para **React + Vite + TailwindCSS** con una pantalla de inicio de sesión (demo sin backend), lista para desplegar en **GitHub Pages**.

> ⚠️ La autenticación es solo de ejemplo usando `localStorage`. Para producción, conecta tu backend (JWT/OAuth).

## Requisitos
- Node.js 18+ y npm

## Instalación
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages (Workflow incluido)
1. Crea un repositorio en GitHub y sube este proyecto.
2. Edita `vite.config.js` y reemplaza `REPO_NAME` por el nombre exacto del repo o exporta la variable `VITE_BASE` en el workflow.
3. Asegúrate de que **Pages** esté activado en `Settings › Pages` con la fuente **GitHub Actions**.

El workflow ya está en `.github/workflows/deploy.yml`. Cada push a `main` ejecutará build y publicará.

### Nota sobre `base`
- Si tu repo es `usuario.github.io`, deja `base: '/'` (puedes hacerlo con `VITE_BASE=/` en el workflow).
- Si tu repo es `usuario/mi-repo`, usa `base: '/mi-repo/'`.

## Estructura
```
react-vite-tailwind-login
├─ .github/workflows/deploy.yml
├─ public/favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ Dashboard.jsx
│  │  └─ Login.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
└─ .gitignore
```

## Estilo
- Paleta base: verde, blanco y negro.
- Tailwind preconfigurado.
