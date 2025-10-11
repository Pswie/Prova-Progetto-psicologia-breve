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

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-sm not-prose">
          <p className="font-semibold mb-1">🍪 Cosa sono i cookie?</p>
          <p className="text-sm">
            I cookie sono piccoli file di testo che i siti web visitati inviano al tuo browser, dove vengono memorizzati 
            per essere poi ritrasmessi agli stessi siti alla visita successiva. Permettono di ricordare preferenze, 
            migliorare l'esperienza di navigazione e raccogliere informazioni statistiche aggregate.
          </p>
        </div>

        <h2>1. Introduzione</h2>
        <p>
          Questa Cookie Policy fornisce informazioni dettagliate sull'uso dei cookie su questo sito web, 
          in conformità con la normativa vigente (GDPR, ePrivacy Directive, Codice Privacy italiano e Linee Guida del Garante).
        </p>
        <p>
          Utilizzando il sito e accettando i cookie attraverso il banner, acconsenti al loro utilizzo secondo quanto 
          descritto in questa policy.
        </p>

        <h2>2. Tipologie di Cookie Utilizzati</h2>
        
        <h3>2.1 Cookie Tecnici (Necessari)</h3>
        <div className="bg-muted/30 p-4 rounded-md not-prose mb-4">
          <p className="text-sm"><strong>Finalità:</strong> Essenziali per il corretto funzionamento del sito</p>
          <p className="text-sm"><strong>Consenso richiesto:</strong> No (Art. 122 Codice Privacy)</p>
          <p className="text-sm"><strong>Proprietario:</strong> Questo sito web</p>
        </div>
        
        <div className="overflow-x-auto not-prose mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Nome Cookie</th>
                <th className="border border-border p-2 text-left">Finalità</th>
                <th className="border border-border p-2 text-left">Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2"><code>cmt_cookie_consent</code></td>
                <td className="border border-border p-2">Memorizza la scelta dell'utente sul consenso cookie</td>
                <td className="border border-border p-2">12 mesi</td>
              </tr>
              <tr>
                <td className="border border-border p-2"><code>cmt_cookie_preferences</code></td>
                <td className="border border-border p-2">Salva le preferenze sulle categorie di cookie</td>
                <td className="border border-border p-2">12 mesi</td>
              </tr>
              <tr>
                <td className="border border-border p-2"><code>cmt_cookie_consent_date</code></td>
                <td className="border border-border p-2">Data e ora in cui è stato prestato il consenso</td>
                <td className="border border-border p-2">12 mesi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2.2 Cookie Statistici (Analytics)</h3>
        <div className="bg-muted/30 p-4 rounded-md not-prose mb-4">
          <p className="text-sm"><strong>Finalità:</strong> Raccogliere informazioni aggregate sull'utilizzo del sito</p>
          <p className="text-sm"><strong>Consenso richiesto:</strong> Sì</p>
          <p className="text-sm"><strong>Proprietario:</strong> Google LLC (servizio di terze parti)</p>
        </div>

        <p><strong>Google Analytics 4</strong></p>
        <p>
          Utilizziamo Google Analytics, un servizio di analisi web fornito da Google LLC ("Google"). 
          Google Analytics utilizza cookie che consentono di analizzare come gli utenti utilizzano il sito.
        </p>
        
        <div className="overflow-x-auto not-prose mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Nome Cookie</th>
                <th className="border border-border p-2 text-left">Finalità</th>
                <th className="border border-border p-2 text-left">Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2"><code>_ga</code></td>
                <td className="border border-border p-2">Distingue gli utenti unici assegnando un ID generato casualmente</td>
                <td className="border border-border p-2">2 anni</td>
              </tr>
              <tr>
                <td className="border border-border p-2"><code>_ga_*</code></td>
                <td className="border border-border p-2">Mantiene lo stato della sessione per Google Analytics 4</td>
                <td className="border border-border p-2">2 anni</td>
              </tr>
              <tr>
                <td className="border border-border p-2"><code>_gid</code></td>
                <td className="border border-border p-2">Distingue gli utenti</td>
                <td className="border border-border p-2">24 ore</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground">
          <strong>Fornitore:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
          <br />
          <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://policies.google.com/privacy</a>
          <br />
          <strong>Cookie Policy:</strong> <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://policies.google.com/technologies/cookies</a>
          <br />
          <strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Analytics Opt-out Browser Add-on</a>
        </p>

        <h3>2.3 Cookie Funzionali</h3>
        <div className="bg-muted/30 p-4 rounded-md not-prose mb-4">
          <p className="text-sm"><strong>Finalità:</strong> Abilitare funzionalità avanzate (video, mappe, chat live)</p>
          <p className="text-sm"><strong>Consenso richiesto:</strong> Sì</p>
          <p className="text-sm"><strong>Stato attuale:</strong> Non utilizzati al momento</p>
        </div>
        <p>
          Potrebbero essere utilizzati in futuro per integrare servizi come video YouTube embedded, Google Maps o chat dal vivo.
        </p>

        <h3>2.4 Cookie di Marketing/Profilazione</h3>
        <div className="bg-muted/30 p-4 rounded-md not-prose mb-4">
          <p className="text-sm"><strong>Finalità:</strong> Profilazione utenti e pubblicità personalizzata</p>
          <p className="text-sm"><strong>Consenso richiesto:</strong> Sì (esplicito)</p>
          <p className="text-sm"><strong>Stato attuale:</strong> Non utilizzati</p>
        </div>
        <p>
          Attualmente non utilizziamo cookie di marketing o profilazione. Se in futuro decidessimo di utilizzarli, 
          aggiorneremo questa policy e richiederemo il tuo consenso esplicito.
        </p>

        <h2>3. Come Gestire e Disabilitare i Cookie</h2>
        
        <h3>3.1 Tramite il Banner Cookie</h3>
        <p>
          Al primo accesso al sito visualizzerai un banner che ti permette di:
        </p>
        <ul>
          <li><strong>Accettare tutti i cookie</strong>: consenti l'uso di tutte le categorie</li>
          <li><strong>Rifiutare tutto</strong>: disabiliti tutti i cookie non necessari</li>
          <li><strong>Personalizzare</strong>: scegli quali categorie attivare (Analytics, Funzionali, Marketing)</li>
        </ul>
        <p>
          Puoi modificare le tue preferenze in qualsiasi momento cancellando i cookie dal browser e ricaricando la pagina.
        </p>

        <h3>3.2 Tramite le Impostazioni del Browser</h3>
        <p>
          Puoi bloccare o eliminare i cookie tramite le impostazioni del tuo browser. 
          Ti ricordiamo che disabilitando i cookie tecnici il sito potrebbe non funzionare correttamente.
        </p>

        <div className="not-prose mb-6">
          <h4 className="font-semibold mb-2">Istruzioni per i principali browser:</h4>
          <ul className="space-y-2">
            <li>
              <strong>Google Chrome:</strong>{" "}
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Guida ufficiale Chrome
              </a>
            </li>
            <li>
              <strong>Mozilla Firefox:</strong>{" "}
              <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Guida ufficiale Firefox
              </a>
            </li>
            <li>
              <strong>Safari (macOS/iOS):</strong>{" "}
              <a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Guida ufficiale Safari
              </a>
            </li>
            <li>
              <strong>Microsoft Edge:</strong>{" "}
              <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Guida ufficiale Edge
              </a>
            </li>
            <li>
              <strong>Opera:</strong>{" "}
              <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Guida ufficiale Opera
              </a>
            </li>
          </ul>
        </div>

        <h3>3.3 Strumenti di Opt-out di Terze Parti</h3>
        <ul>
          <li>
            <strong>Your Online Choices:</strong>{" "}
            <a href="https://www.youronlinechoices.com/it/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              www.youronlinechoices.com/it/
            </a> - Gestisci le preferenze pubblicitarie
          </li>
          <li>
            <strong>Google Analytics Opt-out:</strong>{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Componente aggiuntivo per disabilitare Google Analytics
            </a>
          </li>
        </ul>

        <h2>4. Trasferimento Dati Extra-UE</h2>
        <p>
          Alcuni cookie (es. Google Analytics) possono comportare il trasferimento di dati personali verso paesi extra-UE, 
          in particolare gli Stati Uniti. Google LLC aderisce al <strong>Data Privacy Framework</strong> UE-USA e garantisce 
          adeguate misure di protezione dei dati come richiesto dall'Art. 45-46 GDPR.
        </p>

        <h2>5. Diritti dell'Interessato</h2>
        <p>
          In relazione ai dati raccolti tramite cookie, hai i seguenti diritti ai sensi degli artt. 15-22 GDPR:
        </p>
        <ul>
          <li>Accesso ai dati</li>
          <li>Rettifica</li>
          <li>Cancellazione (diritto all'oblio)</li>
          <li>Limitazione del trattamento</li>
          <li>Portabilità</li>
          <li>Opposizione</li>
          <li>Revoca del consenso</li>
        </ul>
        <p>
          Per esercitare questi diritti, contattaci agli indirizzi:<br />
          <strong>Counselling:</strong> <a href="mailto:counselling@cmt-ig.org" className="text-primary underline">counselling@cmt-ig.org</a><br />
          <strong>Psicoterapia Breve:</strong> <a href="mailto:psicoterapiabreve.cmt@outlook.it" className="text-primary underline">psicoterapiabreve.cmt@outlook.it</a>
        </p>

        <h2>6. Aggiornamenti della Cookie Policy</h2>
        <p>
          Questa Cookie Policy può essere aggiornata periodicamente. Ti invitiamo a consultare regolarmente questa pagina 
          per rimanere informato su eventuali modifiche. La data dell'ultimo aggiornamento è indicata in cima alla pagina.
        </p>

        <h2>7. Normativa di Riferimento</h2>
        <p>Questa Cookie Policy è conforme a:</p>
        <ul>
          <li>Regolamento UE 2016/679 (GDPR)</li>
          <li>Direttiva 2002/58/CE (ePrivacy Directive)</li>
          <li>D.Lgs. 196/2003 (Codice Privacy italiano) - Art. 122</li>
          <li>Provvedimento Garante Privacy n. 229 dell'8 maggio 2014</li>
          <li>Linee Guida cookie e altri strumenti di tracciamento del Garante (10 giugno 2021)</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 not-prose">
          <p className="font-semibold text-sm mb-2">📧 Hai domande o dubbi sui cookie?</p>
          <p className="text-sm">
            <strong>Counselling:</strong> <a href="mailto:counselling@cmt-ig.org" className="text-primary underline font-medium">counselling@cmt-ig.org</a> | Tel: 340 574 4646<br />
            <strong>Psicoterapia Breve:</strong> <a href="mailto:psicoterapiabreve.cmt@outlook.it" className="text-primary underline font-medium">psicoterapiabreve.cmt@outlook.it</a> | Tel: 329 212 5385
          </p>
          <p className="text-sm mt-2">
            Consulta anche la nostra <a href="/privacy" className="text-primary underline font-medium">Privacy Policy</a> 
            {" "}per informazioni complete sul trattamento dei dati personali.
          </p>
        </div>

        <hr className="my-8" />

        <p className="text-xs text-muted-foreground">
          Ultimo aggiornamento: 10 ottobre 2025
        </p>
      </main>
      <Footer />
    </>
  )
}
