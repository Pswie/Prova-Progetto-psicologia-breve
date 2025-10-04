"use client"

import { useEffect, useState } from "react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cmt_cookie_consent")
      if (!stored) {
        // show popup after small delay
        setTimeout(() => setIsVisible(true), 600)
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem("cmt_cookie_consent", "accepted")
    } catch (e) {}
    setIsVisible(false)
  }

  const reject = () => {
    try {
      localStorage.setItem("cmt_cookie_consent", "rejected")
    } catch (e) {}
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 pointer-events-none">
      <div className="max-w-3xl w-full pointer-events-auto bg-background/95 backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg text-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Cookie e Privacy</h3>
            <p className="text-muted-foreground mt-1">
              Questo sito utilizza cookie per migliorare l'esperienza e fornire funzionalità. Procedendo accetti l'uso dei cookie.
            </p>
            <p className="text-muted-foreground mt-2 text-xs">
              Puoi leggere la nostra Informativa completa su <a href="/privacy" className="underline text-primary">Privacy</a> e la pagina sui <a href="/cookie" className="underline text-primary">Cookie</a>.
            </p>
          </div>

          <div className="flex-shrink-0 flex gap-2">
            <button onClick={reject} className="btn border px-3 py-2 rounded-md bg-transparent text-foreground">Rifiuta</button>
            <button onClick={accept} className="btn px-3 py-2 rounded-md bg-primary text-primary-foreground">Accetta</button>
          </div>
        </div>
      </div>
    </div>
  )
}
