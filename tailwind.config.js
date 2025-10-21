/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#16a34a', // emerald-600
          dark: '#0a0a0a',
          light: '#f8fafc'
        }
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.5)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
