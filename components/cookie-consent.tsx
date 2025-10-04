"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false })
  const bannerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cmt_cookie_consent")
      const storedPrefs = localStorage.getItem("cmt_cookie_preferences")
      if (storedPrefs) {
        try { setPrefs(JSON.parse(storedPrefs)) } catch (e) {}
      }
      if (!stored) {
        // show popup after small delay
        setTimeout(() => setIsVisible(true), 600)
      }
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return
    // focus first actionable element for accessibility
    const btn = bannerRef.current?.querySelector<HTMLButtonElement>("button[data-primary]")
    btn?.focus()
  }, [isVisible])

  const accept = () => {
    try {
      localStorage.setItem("cmt_cookie_consent", "accepted")
    } catch (e) {}
    setIsVisible(false)
  }

  const reject = () => {
    try {
      localStorage.setItem("cmt_cookie_consent", "rejected")
      localStorage.setItem("cmt_cookie_preferences", JSON.stringify({ analytics: false, marketing: false }))
    } catch (e) {}
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Banner consenso cookie"
      className="fixed left-0 right-0 bottom-6 z-50 flex justify-center px-4"
    >
      <div
        ref={bannerRef}
        className="w-full max-w-3xl bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg text-sm transform transition-all duration-300 translate-y-6 animate-slide-up"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="pr-2">
            <h3 className="text-base font-semibold text-foreground">Usiamo i cookie</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Utilizziamo cookie per migliorare l'esperienza e fornire funzionalità. Continuando acconsenti all'uso dei cookie.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              <Link href="/privacy" className="underline text-primary">Privacy</Link>
              {" "}- <Link href="/cookie" className="underline text-primary">Dettagli cookie</Link>
            </p>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <button onClick={() => setShowPrefs(true)} className="text-sm underline text-foreground">Preferenze</button>
            <button data-primary onClick={reject} className="px-3 py-2 rounded-md border border-input bg-transparent text-foreground text-sm">Rifiuta</button>
            <button onClick={accept} className="px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm">Accetta</button>
          </div>
        </div>

        {/* Preferences modal inline */}
        {showPrefs && (
          <div className="mt-4 border-t border-border pt-4">
            <h4 className="font-medium text-foreground mb-2">Preferenze Cookie</h4>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="font-medium">Analytics</p>
                  <p className="text-xs text-muted-foreground">Cookie per statistiche e miglioramento del sito.</p>
                </div>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                  />
                </label>
              </div>

              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="font-medium">Marketing</p>
                  <p className="text-xs text-muted-foreground">Cookie per pubblicità e profilazione.</p>
                </div>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={prefs.marketing}
                    onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                  />
                </label>
              </div>

              <div className="flex gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => {
                    try { localStorage.setItem("cmt_cookie_preferences", JSON.stringify(prefs)); localStorage.setItem("cmt_cookie_consent", "accepted") } catch (e) {}
                    setShowPrefs(false); setIsVisible(false)
                  }}
                  className="px-3 py-2 rounded-md bg-primary text-primary-foreground"
                >
                  Salva preferenze
                </button>
                <button
                  onClick={() => setShowPrefs(false)}
                  className="px-3 py-2 rounded-md border border-input bg-transparent"
                >
                  Annulla
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .animate-slide-up{ animation: slideUp 280ms ease-out forwards }
        @keyframes slideUp{ from{ transform: translateY(12px); opacity: 0 } to{ transform: translateY(0); opacity:1 } }
      `}</style>
    </div>
  )
}
