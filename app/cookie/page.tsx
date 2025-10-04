import React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CookiePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4">Cookie</h1>

        <section className="prose mb-6">
          <p>Piccola porzione di dati conservata all’interno del dispositivo dell’Utente.</p>
          <p>
            Questa pagina descrive i cookie utilizzati dall'Applicazione, le finalità e come gestirli. I cookie possono
            essere usati per identificare l'Utente e memorizzare le preferenze necessarie all'erogazione del servizio.
          </p>
        </section>

        <section className="prose mb-6">
          <h2>Tipologie di Cookie</h2>
          <h3>Cookie Tecnici</h3>
          <p>I cookie tecnici sono necessari per il corretto funzionamento del sito e non richiedono consenso.</p>

          <h3>Cookie di Statistica / Analytics</h3>
          <p>
            Servono a raccogliere informazioni in forma aggregata sull'uso del sito (es. Google Analytics). Possono
            essere disattivati dalle preferenze.
          </p>

          <h3>Cookie di Marketing</h3>
          <p>Utilizzati per finalità pubblicitarie e profilazione. Richiedono consenso esplicito dell'Utente.</p>
        </section>

        <section className="prose mb-6">
          <h2>Servizi di terze parti</h2>
          <h3>Google Analytics</h3>
          <p>Dati personali raccolti: Cookie e Dati di utilizzo.</p>
          <p>Luogo del trattamento: USA – consultare la privacy di Google per opt-out.</p>

          <h3>AddThis</h3>
          <p>Servizio di condivisione che può raccogliere dati di utilizzo e cookie.</p>
        </section>

        <section className="prose">
          <h2>Gestione dei Cookie</h2>
          <p>
            Puoi gestire le preferenze relative ai cookie direttamente dal banner al primo accesso o in qualsiasi momento
            tramite il pulsante "Preferenze" presente nel banner. È anche possibile cancellare i cookie dal proprio
            browser per rimuovere le impostazioni salvate.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
