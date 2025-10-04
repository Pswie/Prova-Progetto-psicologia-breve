"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement | null>(null)

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
            <Link href="/cookie" className="text-sm underline text-foreground">Gestisci</Link>
            <button data-primary onClick={reject} className="px-3 py-2 rounded-md border border-input bg-transparent text-foreground text-sm">Rifiuta</button>
            <button onClick={accept} className="px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm">Accetta</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-slide-up{ animation: slideUp 280ms ease-out forwards }
        @keyframes slideUp{ from{ transform: translateY(12px); opacity: 0 } to{ transform: translateY(0); opacity:1 } }
      `}</style>
    </div>
  )
}
