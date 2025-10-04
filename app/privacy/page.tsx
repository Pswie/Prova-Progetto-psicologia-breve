import React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto p-6 mt-20 prose">
        <h1>Informativa Privacy</h1>

        <h2>Titolare del Trattamento dei Dati</h2>
        <p>
          Control Mastery Theory Italian Group,
          <br /> controlmasteryitalia@gmail.com
        </p>

        <h2>Tipologie di Dati raccolti</h2>
        <p>
          Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Dati di
          utilizzo, Nome, Cognome, Email e Cookie.
        </p>

        <h2>Modalità e luogo del trattamento dei Dati raccolti</h2>
        <h3>Modalità di trattamento</h3>
        <p>
          Il Titolare tratta i Dati Personali degli Utenti adottando le opportune misure di sicurezza volte ad impedire
          l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
        </p>

        <h3>Luogo</h3>
        <p>I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.</p>

        <h3>Tempi</h3>
        <p>I Dati sono trattati per il tempo necessario allo svolgimento del servizio richiesto dall’Utente, o richiesto dalle finalità descritte in questo documento.</p>

        <h2>Finalità del Trattamento dei Dati raccolti</h2>
        <p>
          I Dati dell’Utente sono raccolti per consentire al Titolare di fornire i propri servizi, così come per le
          seguenti finalità: Commento dei contenuti, Registrazione ed autenticazione e Statistica.
        </p>

        <h2>Dettagli sul trattamento dei Dati Personali</h2>
        <h3>Registrazione ed autenticazione</h3>
        <p>
          Con la registrazione o l’autenticazione l’Utente consente all’Applicazione di indentificarlo e di dargli accesso a
          servizi dedicati.
        </p>

        <h3>Registrazione diretta (Questa Applicazione)</h3>
        <p>
          L’Utente si registra compilando il modulo di registrazione e fornendo direttamente a questa Applicazione i
          propri Dati Personali.
        </p>

        <h3>Commento dei contenuti</h3>
        <p>
          I servizi di commento consentono agli Utenti di formulare e rendere pubblici propri commenti riguardanti il
          contenuto di questa Applicazione.
        </p>

        <h3>Statistica</h3>
        <p>
          I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i
          dati di traffico e servono a tener traccia del comportamento dell’Utente.
        </p>

        <h3>Google Analytics (Google)</h3>
        <p>
          Google Analytics
          <br /> Dati personali raccolti: Cookie e Dati di utilizzo.
        </p>

        <h2>Interazione con social network e piattaforme esterne</h2>
        <p>
          Queste integrazioni possono raccogliere informazioni anche quando l’Utente non le usa direttamente.
        </p>

        <h2>Ulteriori informazioni sul trattamento</h2>
        <h3>Difesa in giudizio</h3>
        <p>I Dati Personali dell’Utente possono essere usati per la difesa in giudizio da parte del Titolare.</p>

        <h3>Informative specifiche</h3>
        <p>Su richiesta dell’Utente questa Applicazione potrebbe fornire informative aggiuntive e contestuali.</p>

        <h3>Log di sistema e manutenzione</h3>
        <p>Questa Applicazione e i servizi terzi potrebbero raccogliere Log di sistema, compreso l’indirizzo IP.</p>

        <h2>Esercizio dei diritti da parte degli Utenti</h2>
        <p>
          I soggetti cui si riferiscono i Dati Personali hanno il diritto in qualunque momento di ottenere la conferma
          dell’esistenza o meno degli stessi, di conoscerne il contenuto e l’origine e di richiederne la rettifica o
          cancellazione.
        </p>

        <h2>Modifiche a questa privacy policy</h2>
        <p>
          Il Titolare si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento.
        </p>
      </main>
      <Footer />
    </>
  )
}
