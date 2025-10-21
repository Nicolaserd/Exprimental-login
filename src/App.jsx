import React from 'react'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'

export default function App() {
  const [token, setToken] = React.useState(() => localStorage.getItem('demo_token'))

  const handleLogin = (value) => {
    localStorage.setItem('demo_token', value)
    setToken(value)
  }

  const handleLogout = () => {
    localStorage.removeItem('demo_token')
    setToken(null)
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-brand-green"></div>
            <span className="text-lg font-semibold text-white">Login Demo</span>
          </div>
          <nav className="text-sm text-neutral-300">
            {token ? (
              <button onClick={handleLogout} className="btn btn-primary">Cerrar sesión</button>
            ) : null}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {!token ? (
          <Login onSuccess={handleLogin} />
        ) : (
          <Dashboard />
        )}
      </main>

      <footer className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-400">
        React + Vite + Tailwind • Plantilla lista para GitHub Pages
      </footer>
    </div>
  )
}
