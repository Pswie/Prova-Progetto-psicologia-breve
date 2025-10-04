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
    ],
  },
})
