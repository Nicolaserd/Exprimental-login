import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambia 'REPO_NAME' por el nombre de tu repositorio si usas GitHub Pages
// Si haces deploy a <usuario>.github.io (repo especial), deja base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Exprimental-login'
})
