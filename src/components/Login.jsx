import React from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login({ onSuccess }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [remember, setRemember] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [show, setShow] = React.useState(false)

  const validate = () => {
    if (!EMAIL_REGEX.test(email)) return 'Ingresa un correo válido'
    if (password.length < 6) return 'La contraseña debe tener al menos 6 caracteres'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (v) return setError(v)
    setError(null)
    setLoading(true)
    try {
      // Simulación de "autenticación" (sin backend)
      await new Promise(r => setTimeout(r, 700))
      const fakeToken = btoa(`${email}:${Date.now()}`)
      if (remember) {
        localStorage.setItem('demo_token', fakeToken)
      }
      onSuccess(fakeToken)
    } catch (err) {
      setError('No se pudo iniciar sesión. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto grid max-w-md gap-6">
      <div className="card">
        <h1 className="mb-1 text-2xl font-semibold text-white">Bienvenido</h1>
        <p className="mb-6 text-sm text-neutral-400">
          Inicia sesión para continuar. (Demo sin backend)
        </p>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-neutral-300">Correo</label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm text-neutral-300">Contraseña</label>
            <div className="relative">
              <input
                id="password"
                type={show ? 'text' : 'password'}
                className="input pr-12"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShow(s => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-2 py-1 text-xs text-neutral-300 hover:bg-neutral-800"
              >
                {show ? 'Ocultar' : 'Ver'}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-neutral-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 accent-emerald-600"
              />
              Recordarme
            </label>
            <a className="link text-xs" href="#" onClick={(e)=>e.preventDefault()}>¿Olvidaste tu contraseña?</a>
          </div>

          {error && (
            <div className="rounded-xl border border-red-600/50 bg-red-600/10 px-3 py-2 text-sm text-red-200">
              {error}
            </div>
          )}

          <button disabled={loading} className="btn btn-primary h-11">
            {loading ? 'Ingresando…' : 'Iniciar sesión'}
          </button>
        </form>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 text-xs text-neutral-400">
        <p className="mb-2 font-semibold text-neutral-300">Notas:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Esta plantilla usa <strong>React + Vite</strong> y <strong>TailwindCSS</strong>.</li>
          <li>La “autenticación” es solo un demo con <code>localStorage</code>.</li>
          <li>Para producción, conecta tu API real (JWT/OAuth, etc.).</li>
        </ul>
      </div>
    </section>
  )
}
