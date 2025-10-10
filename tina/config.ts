import { defineConfig } from "tinacms"

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "articolo",
        label: "Articoli",
        path: "content/articoli",
        format: "mdx",
        defaultItem: () => ({
          date: new Date().toISOString(),
          readTime: "5 min",
        }),
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titolo",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Estratto",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Autore",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data di pubblicazione",
            required: true,
          },
          {
            type: "string",
            name: "readTime",
            label: "Tempo di lettura",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Categoria",
            description: "Inserisci una categoria libera. Se desideri organizzare le categorie, scrivile coerentemente.",
            required: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Immagine di copertina",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenuto",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/articoli/${document._sys.filename}`,
        },
      },
      {
        name: "membro",
        label: "Membri del Team",
        path: "content/membri",
        format: "mdx",
        defaultItem: () => ({
          nome: "Nome",
          cognome: "Cognome",
          ruolo: "Psicologo",
          bio: "Inserisci la biografia qui",
          ordine: "100",
        }),
        fields: [
          {
            type: "string",
            name: "nome",
            label: "Nome",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "cognome",
            label: "Cognome",
            required: true,
          },
          {
            type: "string",
            name: "ruolo",
            label: "Ruolo / Titolo",
            description: "Es: Psicologo e Psicoterapeuta",
            required: true,
          },
          {
            type: "image",
            name: "immagine",
            label: "Foto profilo",
            required: false,
          },
          {
            type: "string",
            name: "bio",
            label: "Biografia breve",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: false,
          },
          {
            type: "string",
            name: "telefono",
            label: "Telefono",
            required: false,
          },
          {
            type: "string",
            name: "citta",
            label: "Città",
            description: "Es: Roma, Milano",
            required: false,
          },
          {
            type: "string",
            name: "specializzazioni",
            label: "Specializzazioni",
            description: "Separate da virgola. Es: Disturbi d'ansia, Terapia di coppia",
            ui: {
              component: "textarea",
            },
            required: false,
          },
          {
            type: "string",
            name: "ordine",
            label: "Numero Ordine",
            description: "Ordine di visualizzazione (numero basso = prima posizione)",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Descrizione estesa (opzionale)",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys?.filename) {
              return `/professionisti/${document._sys.filename}`
            }
            return `/professionisti`
          },
        },
      },
    ],
  },
})
