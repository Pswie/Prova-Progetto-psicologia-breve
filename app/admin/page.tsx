"use client"

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // In modalità sviluppo, reindirizza al file HTML statico di TinaCMS
    if (process.env.NODE_ENV === 'development') {
      window.location.href = '/admin/index.html'
    }
  }, [])

  // Mostra un messaggio di caricamento durante il reindirizzamento
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Accesso a TinaCMS</h1>
        <p className="text-muted-foreground mb-4">Reindirizzamento all'interfaccia di amministrazione...</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
      </div>
    </div>
  )
}