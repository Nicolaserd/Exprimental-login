import React from 'react'

export default function Dashboard() {
  return (
    <section className="grid gap-6">
      <div className="card">
        <h2 className="mb-2 text-xl font-semibold text-white">Dashboard</h2>
        <p className="text-sm text-neutral-400">
          Sesión iniciada correctamente. Este es un ejemplo de pantalla posterior al login.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[1,2,3].map(i => (
          <div key={i} className="card">
            <p className="text-sm text-neutral-400">Tarjeta #{i}</p>
            <p className="mt-2 text-2xl font-bold text-white">✔️</p>
          </div>
        ))}
      </div>
    </section>
  )
}
