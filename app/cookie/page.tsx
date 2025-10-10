import React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Psicoterapia Breve CMT",
  description: "Informativa cookie conforme GDPR 2025",
  robots: "index, follow",
}

export default function CookiePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto p-6 mt-20 prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: 10 ottobre 2025</p>

        <h2>1. Introduzione</h2>
        <p>Questa Cookie Policy descrive i cookie utilizzati dal sito, le finalità e come gestirli.</p>

        <h2>2. Tipologie di Cookie</h2>
        <h3>2.1 Cookie Necessari</h3>
        <ul>
          <li><code>cmt_cookie_consent</code>: consenso cookie</li>
          <li><code>cmt_cookie_preferences</code>: preferenze cookie</li>
        </ul>

        <h3>2.2 Cookie Statistici</h3>
        <p>Google Analytics 4: <code>_ga</code>, <code>_gid</code></p>

        <h2>3. Gestione Cookie</h2>
        <p>Gestisci dal banner o dalle impostazioni browser.</p>

        <h2>4. Normativa</h2>
        <p>Conforme a GDPR, ePrivacy Directive, Codice Privacy italiano.</p>

        <p className="text-sm mt-8">Contatti: <a href="mailto:controlmasteryitalia@gmail.com">controlmasteryitalia@gmail.com</a></p>
      </main>
      <Footer />
    </>
  )
}
