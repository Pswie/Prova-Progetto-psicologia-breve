import React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Psicoterapia Breve CMT",
  description: "Informativa sulla privacy e protezione dei dati personali ai sensi del GDPR (Regolamento UE 2016/679)",
  robots: "index, follow",
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto p-6 mt-20 prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Ultimo aggiornamento: 10 ottobre 2025
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-sm not-prose">
          <p className="font-semibold mb-1"> Informativa ai sensi del GDPR</p>
          <p className="text-sm">
            La presente informativa descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali 
            in conformità al Regolamento UE 2016/679 (GDPR) e al D.Lgs. 196/2003 (Codice Privacy italiano).
          </p>
        </div>

        <h2>1. Titolare del Trattamento</h2>
        <div className="bg-muted/30 p-4 rounded-md not-prose mb-6">
          <p className="font-medium">Control Mastery Theory Italian Group</p>
          <p className="text-sm">Email: <a href="mailto:controlmasteryitalia@gmail.com" className="text-primary underline">controlmasteryitalia@gmail.com</a></p>
          <p className="text-sm text-muted-foreground mt-2">
            Il Titolare è responsabile del trattamento dei dati personali raccolti attraverso questo sito web.
          </p>
        </div>

        <h2>2. Tipologie di Dati Raccolti</h2>
        <p>
          Il sito raccoglie e tratta le seguenti categorie di dati personali:
        </p>
        
        <h3>2.1 Dati forniti volontariamente</h3>
        <ul>
          <li><strong>Dati di contatto:</strong> nome, cognome, indirizzo email, numero di telefono</li>
          <li><strong>Dati di comunicazione:</strong> contenuto dei messaggi inviati tramite moduli di contatto</li>
        </ul>

        <h3>2.2 Dati raccolti automaticamente</h3>
        <ul>
          <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, durata della sessione</li>
          <li><strong>Cookie e tecnologie simili:</strong> come descritto nella <a href="/cookie">Cookie Policy</a></li>
        </ul>

        <h2>3. Finalità e Base Giuridica</h2>
        <p>I tuoi dati sono trattati per le seguenti finalità:</p>
        <ul>
          <li><strong>Rispondere alle richieste:</strong> Base giuridica Art. 6.1.b GDPR (misure precontrattuali)</li>
          <li><strong>Erogare servizi psicologici:</strong> Base giuridica Art. 6.1.b GDPR (esecuzione contratto)</li>
          <li><strong>Analisi statistiche:</strong> Base giuridica Art. 6.1.a GDPR (consenso esplicito)</li>
          <li><strong>Marketing:</strong> Base giuridica Art. 6.1.a GDPR (consenso esplicito)</li>
        </ul>

        <h2>4. Conservazione e Sicurezza</h2>
        <p>Adottiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati:</p>
        <ul>
          <li>Crittografia HTTPS/TLS</li>
          <li>Controlli di accesso</li>
          <li>Backup regolari</li>
        </ul>
        <p><strong>Periodo di conservazione:</strong></p>
        <ul>
          <li>Dati di contatto: tempo necessario + consenso</li>
          <li>Dati contabili: 10 anni (obbligo fiscale)</li>
          <li>Analytics: 26 mesi</li>
        </ul>

        <h2>5. Diritti dell'Interessato (Artt. 15-22 GDPR)</h2>
        <p>Hai diritto di:</p>
        <ul>
          <li><strong>Accesso:</strong> ottenere copia dei tuoi dati</li>
          <li><strong>Rettifica:</strong> correggere dati inesatti</li>
          <li><strong>Cancellazione:</strong> diritto all'oblio</li>
          <li><strong>Limitazione:</strong> limitare il trattamento</li>
          <li><strong>Portabilità:</strong> ricevere i dati in formato leggibile</li>
          <li><strong>Opposizione:</strong> opporsi al trattamento</li>
          <li><strong>Revoca consenso:</strong> in qualsiasi momento</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 not-prose">
          <p className="font-semibold text-sm mb-1">💡 Esercita i tuoi diritti</p>
          <p className="text-sm">
            Scrivi a <a href="mailto:controlmasteryitalia@gmail.com" className="text-primary underline font-medium">controlmasteryitalia@gmail.com</a>. Risponderemo entro 30 giorni.
          </p>
        </div>

        <h2>6. Reclamo al Garante</h2>
        <p>Puoi proporre reclamo al Garante Privacy:</p>
        <div className="bg-muted/30 p-4 rounded-md not-prose mb-6">
          <p className="font-medium text-sm">Garante per la Protezione dei Dati Personali</p>
          <p className="text-sm">Piazza Venezia, 11 - 00187 Roma</p>
          <p className="text-sm">Tel: +39 06.696771</p>
          <p className="text-sm">Email: <a href="mailto:garante@gpdp.it" className="text-primary underline">garante@gpdp.it</a></p>
          <p className="text-sm">Web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.garanteprivacy.it</a></p>
        </div>

        <h2>7. Cookie</h2>
        <p>Per informazioni dettagliate consulta la <a href="/cookie">Cookie Policy</a>.</p>

        <h2>8. Modifiche</h2>
        <p>Ci riserviamo il diritto di modificare questa informativa. Le modifiche sostanziali saranno comunicate sul sito.</p>

        <hr className="my-8" />

        <p className="text-xs text-muted-foreground">
          Conforme al GDPR (UE 2016/679), D.Lgs. 196/2003 e Direttiva ePrivacy 2002/58/CE.
        </p>
      </main>
      <Footer />
    </>
  )
}
