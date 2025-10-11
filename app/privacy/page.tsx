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
                <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Titolare del Trattamento</h3>
          <p className="text-sm mb-2">Rete Psicoterapia Breve e Counselling CMT</p>
          <p className="text-sm"><strong>Counselling:</strong> <a href="mailto:counselling@cmt-ig.org" className="text-primary underline">counselling@cmt-ig.org</a> | Tel: 340 574 4646</p>
          <p className="text-sm"><strong>Psicoterapia Breve:</strong> <a href="mailto:psicoterapiabreve.cmt@outlook.it" className="text-primary underline">psicoterapiabreve.cmt@outlook.it</a> | Tel: 329 212 5385</p>
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

        <h2>3. Finalità e Base Giuridica del Trattamento</h2>
        <p>I tuoi dati personali sono trattati per le seguenti finalità, ciascuna con la propria base giuridica:</p>
        
        <div className="overflow-x-auto not-prose mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Finalità</th>
                <th className="border border-border p-3 text-left font-semibold">Base Giuridica</th>
                <th className="border border-border p-3 text-left font-semibold">Obbligatorietà</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">Rispondere alle richieste di contatto e informazioni</td>
                <td className="border border-border p-3">Esecuzione di misure precontrattuali (Art. 6.1.b GDPR)</td>
                <td className="border border-border p-3">Facoltativo</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Gestire la prenotazione e erogazione di consulenze psicologiche</td>
                <td className="border border-border p-3">Esecuzione del contratto (Art. 6.1.b GDPR)</td>
                <td className="border border-border p-3">Necessario per erogare il servizio</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Analisi statistiche e miglioramento del sito web</td>
                <td className="border border-border p-3">Consenso esplicito (Art. 6.1.a GDPR)</td>
                <td className="border border-border p-3">Facoltativo</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Adempimento obblighi di legge (contabilità, fisco)</td>
                <td className="border border-border p-3">Obbligo legale (Art. 6.1.c GDPR)</td>
                <td className="border border-border p-3">Obbligatorio</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Marketing e comunicazioni promozionali</td>
                <td className="border border-border p-3">Consenso esplicito (Art. 6.1.a GDPR)</td>
                <td className="border border-border p-3">Facoltativo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>3.1 Categorie Particolari di Dati (Dati Sanitari)</h3>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 not-prose">
          <p className="font-semibold text-sm mb-1">⚠️ Trattamento di Dati Sanitari</p>
          <p className="text-sm">
            In quanto servizio di psicoterapia e counselling psicologico, potremmo trattare <strong>categorie particolari di dati personali</strong> 
            relativi alla salute (Art. 9 GDPR). Questi dati sono trattati:
          </p>
          <ul className="text-sm mt-2 space-y-1">
            <li>• Solo previo <strong>consenso esplicito</strong> (Art. 9.2.a GDPR)</li>
            <li>• Per finalità di <strong>medicina preventiva/diagnosi</strong> (Art. 9.2.h GDPR)</li>
            <li>• Nel rispetto del <strong>segreto professionale</strong> (Codice Deontologico Psicologi)</li>
            <li>• Con misure di sicurezza rafforzate (crittografia, accesso limitato)</li>
          </ul>
        </div>

        <h3>3.2 Conseguenze del Mancato Conferimento</h3>
        <p>Il conferimento dei dati personali per le finalità di cui sopra è:</p>
        <ul>
          <li><strong>Facoltativo</strong> per richieste di informazioni generali - il mancato conferimento non comporta conseguenze</li>
          <li><strong>Necessario</strong> per prenotare e usufruire dei servizi psicologici - il mancato conferimento rende impossibile l'erogazione del servizio</li>
          <li><strong>Obbligatorio per legge</strong> per adempimenti fiscali/contabili</li>
        </ul>

        <h2>4. Destinatari e Comunicazione dei Dati</h2>
        <p>I dati personali possono essere comunicati o accessibili a:</p>
        
        <h3>4.1 Responsabili del Trattamento</h3>
        <ul>
          <li><strong>Hosting provider</strong>: Vercel Inc. (USA) - per l'hosting del sito web</li>
          <li><strong>Email provider</strong>: Google LLC (USA) - Google Workspace per gestione email</li>
          <li><strong>Analytics provider</strong>: Google LLC (USA) - Google Analytics per analisi statistiche</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Questi fornitori trattano i dati per nostro conto, in qualità di responsabili del trattamento ai sensi dell'Art. 28 GDPR, 
          secondo le istruzioni da noi fornite e con garanzie contrattuali adeguate.
        </p>

        <h3>4.2 Altre Categorie di Destinatari</h3>
        <ul>
          <li><strong>Autorità competenti</strong>: su richiesta per adempimento obblighi legali</li>
          <li><strong>Professionisti esterni</strong>: commercialisti, consulenti legali (vincolati a segreto professionale)</li>
          <li><strong>Organi giurisdizionali</strong>: per difesa in giudizio</li>
        </ul>
        <p>I dati <strong>non sono</strong> ceduti, venduti o condivisi con terze parti per finalità commerciali o pubblicitarie.</p>

        <h2>5. Trasferimenti Internazionali di Dati</h2>
        <p>
          Alcuni dei nostri fornitori di servizi (Google, Vercel) sono localizzati negli <strong>Stati Uniti</strong>. 
          I trasferimenti verso paesi extra-UE avvengono sulla base di:
        </p>
        <ul>
          <li><strong>Decisione di adeguatezza</strong> UE-USA Data Privacy Framework (Art. 45 GDPR)</li>
          <li><strong>Clausole contrattuali standard</strong> approvate dalla Commissione Europea (Art. 46 GDPR)</li>
          <li><strong>Garanzie supplementari</strong> fornite dai responsabili del trattamento</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Per maggiori informazioni sui trasferimenti internazionali e le garanzie adottate, contattaci all'indirizzo email indicato.
        </p>

        <h2>6. Conservazione e Sicurezza dei Dati</h2>
        
        <h3>6.1 Misure di Sicurezza</h3>
        <p>Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da:</p>
        <ul>
          <li>Accesso non autorizzato</li>
          <li>Perdita o distruzione accidentale</li>
          <li>Divulgazione illecita</li>
          <li>Alterazione non autorizzata</li>
        </ul>
        <p><strong>Misure implementate:</strong></p>
        <ul>
          <li>Crittografia delle comunicazioni (HTTPS/TLS 1.3)</li>
          <li>Controlli di accesso e autenticazione forte</li>
          <li>Backup automatici regolari</li>
          <li>Formazione del personale sulla protezione dati</li>
          <li>Procedure di gestione incidenti (data breach)</li>
          <li>Pseudonimizzazione dei dati quando possibile</li>
        </ul>

        <h3>6.2 Periodo di Conservazione</h3>
        <p>I dati sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:</p>
        <div className="overflow-x-auto not-prose mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Tipologia Dati</th>
                <th className="border border-border p-2 text-left">Periodo di Conservazione</th>
                <th className="border border-border p-2 text-left">Base Normativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Dati di contatto (richieste info)</td>
                <td className="border border-border p-2">Tempo necessario a evadere richiesta, poi cancellati</td>
                <td className="border border-border p-2">Principio minimizzazione</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Dati sanitari/clinici</td>
                <td className="border border-border p-2">Fino a revoca consenso + 10 anni (prescrizione)</td>
                <td className="border border-border p-2">Codice Deontologico Psicologi</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Dati contabili/fiscali</td>
                <td className="border border-border p-2">10 anni</td>
                <td className="border border-border p-2">Obbligo fiscale italiano</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Dati analytics (cookie)</td>
                <td className="border border-border p-2">26 mesi</td>
                <td className="border border-border p-2">Google Analytics 4</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Cookie tecnici</td>
                <td className="border border-border p-2">Sessione o max 12 mesi</td>
                <td className="border border-border p-2">Linee Guida Garante</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          Decorsi i termini di conservazione, i dati saranno cancellati o resi anonimi in modo irreversibile.
        </p>

        <h2>7. Diritti dell'Interessato (Artt. 15-22 GDPR)</h2>
        <p>In relazione al trattamento dei tuoi dati personali, hai i seguenti diritti:</p>
        
        <h3>7.1 Diritto di Accesso (Art. 15)</h3>
        <p>Hai diritto di ottenere conferma dell'esistenza di dati personali che ti riguardano e di riceverne copia in formato comprensibile.</p>

        <h3>7.2 Diritto di Rettifica (Art. 16)</h3>
        <p>Hai diritto di ottenere la correzione di dati personali inesatti o l'integrazione di dati incompleti.</p>

        <h3>7.3 Diritto alla Cancellazione - "Diritto all'Oblio" (Art. 17)</h3>
        <p>Hai diritto di ottenere la cancellazione dei tuoi dati personali quando:</p>
        <ul>
          <li>Non sono più necessari rispetto alle finalità</li>
          <li>Revochi il consenso su cui si basa il trattamento</li>
          <li>Ti opponi al trattamento e non sussistono motivi legittimi prevalenti</li>
          <li>I dati sono stati trattati illecitamente</li>
        </ul>

        <h3>7.4 Diritto di Limitazione (Art. 18)</h3>
        <p>Hai diritto di ottenere la limitazione del trattamento quando sussiste una delle seguenti ipotesi:</p>
        <ul>
          <li>Contesti l'esattezza dei dati personali</li>
          <li>Il trattamento è illecito ma ti opponi alla cancellazione</li>
          <li>I dati ti sono necessari per accertare, esercitare o difendere un diritto in sede giudiziaria</li>
        </ul>

        <h3>7.5 Diritto alla Portabilità (Art. 20)</h3>
        <p>Hai diritto di ricevere i dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico, 
        e di trasmetterli a un altro titolare senza impedimenti.</p>

        <h3>7.6 Diritto di Opposizione (Art. 21)</h3>
        <p>Hai diritto di opporti in qualsiasi momento al trattamento dei dati personali basato su legittimo interesse 
        o per finalità di marketing diretto.</p>

        <h3>7.7 Diritto di Revoca del Consenso</h3>
        <p>Quando il trattamento si basa sul consenso, hai diritto di revocarlo in qualsiasi momento, 
        senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.</p>

        <h3>7.8 Diritto di Non Essere Sottoposto a Decisioni Automatizzate (Art. 22)</h3>
        <p>Non effettuiamo processi decisionali automatizzati, inclusa la profilazione.</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 not-prose">
          <p className="font-semibold text-sm mb-2">💡 Come Esercitare i Tuoi Diritti</p>
          <p className="text-sm mb-2">
            Per esercitare uno o più dei diritti sopra elencati, invia una richiesta scritta a:
          </p>
          <p className="text-sm font-medium">
            📧 Counselling: <a href="mailto:counselling@cmt-ig.org" className="text-primary underline">counselling@cmt-ig.org</a><br />
            📧 Psicoterapia Breve: <a href="mailto:psicoterapiabreve.cmt@outlook.it" className="text-primary underline">psicoterapiabreve.cmt@outlook.it</a>
          </p>
          <p className="text-sm mt-2">
            <strong>Tempi di risposta:</strong> Ti risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta 
            (prorogabili di ulteriori 60 giorni in casi complessi, con comunicazione motivata).
          </p>
          <p className="text-sm mt-2">
            <strong>Gratuità:</strong> L'esercizio dei diritti è <strong>gratuito</strong>. In caso di richieste manifestamente 
            infondate o eccessive potremmo richiedere un contributo ragionevole.
          </p>
        </div>

        <h2>8. Diritto di Reclamo all'Autorità Garante</h2>
        <p>
          Se ritieni che il trattamento dei tuoi dati violi il GDPR, hai il diritto di proporre reclamo 
          all'Autorità di controllo competente:
        </p>
        <div className="bg-muted/30 p-4 rounded-md not-prose mb-6">
          <p className="font-medium text-sm">Garante per la Protezione dei Dati Personali</p>
          <p className="text-sm">Piazza Venezia, 11 - 00187 Roma</p>
          <p className="text-sm">Tel: +39 06.696771</p>
          <p className="text-sm">Email: <a href="mailto:garante@gpdp.it" className="text-primary underline">garante@gpdp.it</a></p>
          <p className="text-sm">Web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.garanteprivacy.it</a></p>
        </div>

        <h2>9. Cookie e Tecnologie di Tracciamento</h2>
        <p>
          Il sito utilizza cookie e tecnologie simili. Per informazioni dettagliate su tipologie, finalità, durata e 
          modalità di gestione, consulta la nostra <a href="/cookie" className="text-primary underline font-medium">Cookie Policy</a>.
        </p>

        <h2>10. Modifiche alla Privacy Policy</h2>
        <p>
          Il Titolare si riserva il diritto di modificare, aggiornare o integrare questa Privacy Policy in qualsiasi momento 
          per conformarsi a modifiche normative, migliorare i servizi o per altre ragioni legittime.
        </p>
        <p>
          Le modifiche sostanziali saranno comunicate tramite avviso sul sito web o via email (se in possesso del tuo indirizzo). 
          Ti invitiamo a consultare regolarmente questa pagina per rimanere informato.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Data ultimo aggiornamento:</strong> 10 ottobre 2025
        </p>

        <h2>11. Contatti e Informazioni</h2>
        <p>
          Per qualsiasi domanda, richiesta di chiarimenti o esercizio dei diritti relativi al trattamento dei dati personali, 
          puoi contattare il Titolare del Trattamento:
        </p>
        <div className="bg-muted/30 p-4 rounded-md not-prose mb-6">
          <p className="font-medium">Control Mastery Theory Italian Group</p>
          <p className="text-sm">📧 Email: <a href="mailto:controlmasteryitalia@gmail.com" className="text-primary underline font-medium">controlmasteryitalia@gmail.com</a></p>
        </div>

        <hr className="my-8" />

        <div className="bg-slate-50 p-4 rounded-md not-prose">
          <p className="text-xs text-muted-foreground mb-1">
            <strong>Conformità Normativa</strong>
          </p>
          <p className="text-xs text-muted-foreground">
            Questa Privacy Policy è conforme a:
          </p>
          <ul className="text-xs text-muted-foreground space-y-1 mt-2">
            <li>• Regolamento UE 2016/679 (GDPR)</li>
            <li>• D.Lgs. 196/2003 (Codice Privacy italiano) come modificato dal D.Lgs. 101/2018</li>
            <li>• Direttiva 2002/58/CE (ePrivacy Directive)</li>
            <li>• Linee Guida EDPB (European Data Protection Board)</li>
            <li>• Provvedimenti e Linee Guida del Garante per la Protezione dei Dati Personali italiano</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
