"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [prefs, setPrefs] = useState({ 
    necessary: true, // sempre attivi
    analytics: false, 
    marketing: false,
    functional: false
  })
  const bannerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cmt_cookie_consent")
      const storedPrefs = localStorage.getItem("cmt_cookie_preferences")
      if (storedPrefs) {
        try { 
          const parsed = JSON.parse(storedPrefs)
          setPrefs({ ...prefs, ...parsed, necessary: true })
        } catch (e) {}
      }
      if (!stored) {
        // show popup after small delay
        setTimeout(() => setIsVisible(true), 800)
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

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true, functional: true }
    try {
      localStorage.setItem("cmt_cookie_consent", "accepted")
      localStorage.setItem("cmt_cookie_preferences", JSON.stringify(allAccepted))
      localStorage.setItem("cmt_cookie_consent_date", new Date().toISOString())
    } catch (e) {}
    setIsVisible(false)
    applyConsent(allAccepted)
  }

  const rejectAll = () => {
    const rejected = { necessary: true, analytics: false, marketing: false, functional: false }
    try {
      localStorage.setItem("cmt_cookie_consent", "rejected")
      localStorage.setItem("cmt_cookie_preferences", JSON.stringify(rejected))
      localStorage.setItem("cmt_cookie_consent_date", new Date().toISOString())
    } catch (e) {}
    setIsVisible(false)
    applyConsent(rejected)
  }

  const applyConsent = (preferences: typeof prefs) => {
    // Integrazione con Google Analytics (esempio)
    if (typeof window !== "undefined") {
      if (preferences.analytics && (window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: "granted"
        })
      } else if ((window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: "denied"
        })
      }
      
      // Marketing/Advertising
      if (preferences.marketing && (window as any).gtag) {
        (window as any).gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted"
        })
      } else if ((window as any).gtag) {
        (window as any).gtag("consent", "update", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied"
        })
      }
    }
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
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="pr-2 flex-1">
            <h3 className="text-base font-semibold text-foreground mb-2">Gestione dei Cookie 🍪</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Questo sito utilizza cookie tecnici necessari e, previo tuo consenso, cookie analitici e di marketing per migliorare 
              l'esperienza di navigazione, analizzare l'utilizzo del sito e supportare le nostre attività di comunicazione.
            </p>
            <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
              Puoi accettare tutti i cookie, rifiutarli o personalizzare le tue preferenze. Per maggiori informazioni consulta la nostra{" "}
              <Link href="/privacy" className="underline text-primary font-medium">Privacy Policy</Link>
              {" "}e la{" "}
              <Link href="/cookie" className="underline text-primary font-medium">Cookie Policy</Link>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:min-w-fit">
            <button 
              onClick={() => setShowPrefs(true)} 
              className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded-md hover:bg-muted/50 transition-colors"
            >
              Personalizza
            </button>
            <button 
              data-primary 
              onClick={rejectAll} 
              className="px-4 py-2 rounded-md border border-input bg-transparent text-foreground text-sm font-medium hover:bg-muted/30 transition-colors"
            >
              Rifiuta tutto
            </button>
            <button 
              onClick={acceptAll} 
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Accetta tutto
            </button>
          </div>
        </div>

        {/* Preferences modal inline */}
        {showPrefs && (
          <div className="mt-4 border-t border-border pt-4">
            <h4 className="font-medium text-foreground mb-3">Personalizza le tue preferenze</h4>
            <div className="space-y-4">
              
              {/* Cookie Tecnici/Necessari */}
              <div className="flex items-start justify-between gap-4 p-3 bg-muted/30 rounded-md">
                <div className="flex-1">
                  <p className="font-medium text-foreground flex items-center gap-2">
                    Cookie Necessari
                    <span className="text-xs font-normal text-muted-foreground">(sempre attivi)</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Essenziali per il funzionamento del sito. Non possono essere disattivati.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1 opacity-50 cursor-not-allowed"
                />
              </div>

              {/* Cookie Analytics */}
              <div className="flex items-start justify-between gap-4 p-3 border border-border rounded-md">
                <div className="flex-1">
                  <p className="font-medium text-foreground">Cookie Statistici</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Raccolgono dati aggregati per migliorare l'esperienza (es. Google Analytics).
                  </p>
                </div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                    className="w-5 h-5 cursor-pointer"
                  />
                </label>
              </div>

              {/* Cookie Funzionali */}
              <div className="flex items-start justify-between gap-4 p-3 border border-border rounded-md">
                <div className="flex-1">
                  <p className="font-medium text-foreground">Cookie Funzionali</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Permettono funzionalità avanzate come chat, video embedded, mappe interattive.
                  </p>
                </div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={prefs.functional}
                    onChange={(e) => setPrefs((p) => ({ ...p, functional: e.target.checked }))}
                    className="w-5 h-5 cursor-pointer"
                  />
                </label>
              </div>

              {/* Cookie Marketing */}
              <div className="flex items-start justify-between gap-4 p-3 border border-border rounded-md">
                <div className="flex-1">
                  <p className="font-medium text-foreground">Cookie di Marketing</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Utilizzati per profilazione e pubblicità personalizzata. Richiedono consenso esplicito.
                  </p>
                </div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={prefs.marketing}
                    onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                    className="w-5 h-5 cursor-pointer"
                  />
                </label>
              </div>

              <div className="flex gap-2 pt-2 justify-end">
                <button
                  onClick={() => setShowPrefs(false)}
                  className="px-4 py-2 rounded-md border border-input bg-transparent text-sm"
                >
                  Annulla
                </button>
                <button
                  onClick={() => {
                    try { 
                      localStorage.setItem("cmt_cookie_preferences", JSON.stringify(prefs))
                      localStorage.setItem("cmt_cookie_consent", "accepted")
                      localStorage.setItem("cmt_cookie_consent_date", new Date().toISOString())
                    } catch (e) {}
                    applyConsent(prefs)
                    setShowPrefs(false)
                    setIsVisible(false)
                  }}
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium"
                >
                  Conferma selezione
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
