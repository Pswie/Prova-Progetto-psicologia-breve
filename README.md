# Psicoterapia CMT – Sito Next.js

Applicazione web basata su **Next.js 14** con **App Router**, interfaccia UI realizzata con i componenti shadcn/ui e gestione dei contenuti tramite **TinaCMS Cloud**.

## Requisiti

- [Node.js](https://nodejs.org/) 18 o superiore
- [pnpm](https://pnpm.io/) (consigliato) oppure npm/yarn
- Account TinaCMS con progetto configurato in cloud

## Prima configurazione

1. Clona il repository da GitHub:

   ```bash
   git clone https://github.com/<tuo-utente>/<tuo-repo>.git
   cd <tuo-repo>
   ```

2. Installa le dipendenze:

   ```bash
   pnpm install
   ```

3. Copia il file `.env.example` in `.env` e compila le variabili con i valori del tuo progetto Tina Cloud:

   ```bash
   cp .env.example .env
   ```

   Variabili richieste:

   - `NEXT_PUBLIC_BASE_URL`: URL pubblico del sito (usato per link canonici/Og)
   - `NEXT_PUBLIC_TINA_CLIENT_ID`: Client ID del progetto Tina Cloud
   - `TINA_TOKEN`: Access Token generato da Tina Cloud
   - `TINA_BRANCH` (opzionale): branch Git da utilizzare, se diverso da `main`

## Script disponibili

| Comando | Descrizione |
| --- | --- |
| `pnpm dev` | Avvia Next.js in sviluppo e il bridge TinaCMS (richiede le variabili d'ambiente per l'autenticazione). |
| `pnpm build` | Esegue `tinacms build` per generare la dashboard statica e successivamente `next build`. |
| `pnpm start` | Avvia l'applicazione in modalità production (dopo il build). |
| `pnpm lint` | Esegue i controlli ESLint. Alcune regole legacy potrebbero richiedere interventi manuali. |

> **Suggerimento:** se vuoi lavorare con i contenuti direttamente dal cloud senza avviare Tina in locale, puoi utilizzare l'editing cloud di TinaCMS oppure avviare `pnpm dev` per sfruttare l'anteprima locale.

## Struttura principale

- `app/` – Pagine Next.js (App Router)
- `components/` – Componenti UI riutilizzabili
- `content/articoli/` – Articoli in formato MDX gestiti da TinaCMS
- `tina/` – Configurazione di TinaCMS
- `public/` – Asset statici (immagini, favicon, ecc.)

## Deploy

Il progetto è compatibile con Vercel o altre piattaforme che supportano Next.js. Ricorda di configurare le stesse variabili d'ambiente del file `.env` all'interno della piattaforma di hosting.

Per includere l'admin Tina sulle build statiche viene generata la cartella `admin/` tramite `tinacms build`; è già esclusa dal versionamento tramite `.gitignore`.

## Note su linting e qualità codice

Il comando `pnpm lint` potrebbe segnalare alcune violazioni storiche (es. virgolette non escape o campi tipizzati con `any`). Non influiscono sull'esecuzione dell'app ma si consiglia di pianificare la loro risoluzione prima di un deploy in produzione.

## Supporto

Per problemi di autenticazione con Tina Cloud assicurati che **clientId** e **token** abbiano i permessi corretti e che il branch impostato corrisponda a quello pubblicato su GitHub. In caso di dubbi consulta la [documentazione ufficiale di TinaCMS](https://tina.io/docs/).
