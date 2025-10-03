"use client"

import { useEffect } from "react"

// Componente per inizializzare TinaCMS
const TinaAdmin = () => {
  useEffect(() => {
    // Inizializza TinaCMS solo in modalità sviluppo
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      // Carica dinamicamente TinaCMS
      import('tinacms').then(({ TinaCMS }) => {
        // Inizializza TinaCMS se non è già inizializzato
        if (!(window as any).tinacms) {
          const cms = new TinaCMS({
            clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
            isLocalClient: true,
          })
          ;(window as any).tinacms = cms
        }
      })
    }
  }, [])

  return null
}

export default TinaAdmin