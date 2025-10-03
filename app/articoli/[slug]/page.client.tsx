"use client""use client""use client""use client"



import { motion } from "framer-motion"

import Link from "next/link"

import Image from "next/image"import { motion } from "framer-motion"



import Navigation from "@/components/navigation"import Link from "next/link"

import Footer from "@/components/footer"

import { Button } from "@/components/ui/button"export default function Test() {import { motion } from "framer-motion"

import { Card } from "@/components/ui/card"

import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"import Navigation from "@/components/navigation"

import ShareButtons from "@/components/share-buttons"

import Footer from "@/components/footer"  return <div>test</div>import Link from "next/link"

export interface ArticlePageData {

  slug: stringimport { Button } from "@/components/ui/button"

  title: string

  author: stringimport { Card } from "@/components/ui/card"}

  date: string

  readTime: stringimport { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

  category: string

  coverImage: stringimport { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text"import Navigation from "@/components/navigation"

  excerpt: string

  bodyHtml: stringimport Footer from "@/components/footer"

  bodyPlainText: string

  shareUrl: stringexport interface ArticlePageData {import { Button } from "@/components/ui/button"

}

  slug: stringimport { Card } from "@/components/ui/card"

interface ArticleClientPageProps {

  article: ArticlePageData | null  title: stringimport { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

}

  author: stringimport { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text"

export default function ArticleClientPage({ article }: ArticleClientPageProps) {

  if (!article) {  date: string

    return (

      <div className="min-h-screen bg-background flex items-center justify-center">  readTime: stringexport interface ArticlePageData {

        <div className="text-center">

          <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>  category: string  slug: string

          <Link href="/articoli">

            <Button>Torna agli articoli</Button>  coverImage: string  title: string

          </Link>

        </div>  excerpt: string  author: string

      </div>

    )  body: TinaMarkdownContent | null  date: string

  }

  bodyPlainText: string  readTime: string

  const articleSchema = {

    "@context": "https://schema.org",}  category: string

    "@type": "Article",

    headline: article.title,  coverImage: string

    description: article.excerpt || article.bodyPlainText.substring(0, 160),

    image: article.coverImage,interface ArticleClientPageProps {  excerpt: string

    datePublished: article.date,

    author: {  article: ArticlePageData | null  body: TinaMarkdownContent | null

      "@type": "Person",

      name: article.author,}  bodyPlainText: string

    },

    publisher: {}

      "@type": "Organization",

      name: "Psicoterapia Breve e Counselling CMT",export default function ArticleClientPage({ article }: ArticleClientPageProps) {

      logo: {

        "@type": "ImageObject",  if (!article) {interface ArticleClientPageProps {

        url: `${new URL("/placeholder-logo.png", article.shareUrl).href}`,

      },    return (  article: ArticlePageData | null

    },

    articleSection: article.category,      <div className="min-h-screen bg-background flex items-center justify-center">}

    wordCount: article.bodyPlainText.split(/\s+/).filter(Boolean).length,

  }        <div className="text-center">



  return (          <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>export default function ArticleClientPage({ article }: ArticleClientPageProps) {

    <div className="min-h-screen bg-background">

      <head>          <Link href="/articoli">  if (!article) {

        <script

          type="application/ld+json"            <Button>Torna agli articoli</Button>    return (

          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}

        />          </Link>      <div className="min-h-screen bg-background flex items-center justify-center">

      </head>

        </div>        <div className="text-center">

      <Navigation />

      </div>          <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>

      <motion.div

        initial={{ opacity: 0 }}    )          <Link href="/articoli">

        animate={{ opacity: 1 }}

        transition={{ duration: 0.6 }}  }            <Button>Torna agli articoli</Button>

        className="relative h-[50vh] md:h-[60vh] overflow-hidden"

      >          </Link>

        <Image

          src={article.coverImage || "/placeholder.jpg"}  const articleSchema = {        </div>

          alt={article.title}

          fill    "@context": "https://schema.org",      </div>

          className="object-cover"

          priority    "@type": "Article",    )

        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />    headline: article.title,  }

      </motion.div>

    description: article.excerpt || article.bodyPlainText.substring(0, 160),    </div>

      <div className="container mx-auto max-w-4xl px-4 -mt-32 relative z-10">

        <motion.article    image: article.coverImage,  )

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}    datePublished: article.date,}

          transition={{ duration: 0.6, delay: 0.2 }}

        >    author: {            </Link>}export interface ArticlePageData {// Mockup articoli - in futuro verranno dal database

          <Card className="p-8 md:p-12 mb-12">

            <Link href="/articoli">      "@type": "Person",

              <Button variant="ghost" className="mb-6 -ml-2">

                <ArrowLeft className="w-4 h-4 mr-2" />      name: article.author,

                Torna agli articoli

              </Button>    },

            </Link>

    publisher: {            <div className="mb-4">

            <div className="mb-4">

              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">      "@type": "Organization",

                {article.category}

              </span>      name: "Psicoterapia Breve e Counselling CMT",              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">

            </div>

      logo: {

            <h1 className="text-4xl font-bold tracking-tight mb-6 text-balance">{article.title}</h1>

        "@type": "ImageObject",                {article.category}interface ArticleClientPageProps {  slug: string"use client"

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">

              <div className="flex items-center gap-2">        url: "https://www.psicoterapiacmt.it/logo.png",

                <User className="w-4 h-4" />

                <span>{article.author}</span>      },              </span>

              </div>

              <div className="flex items-center gap-2">    },

                <Calendar className="w-4 h-4" />

                <span>{new Date(article.date).toLocaleDateString("it-IT", { dateStyle: "long" })}</span>    articleSection: article.category,            </div>  article: ArticlePageData | null

              </div>

              <div className="flex items-center gap-2">    wordCount: article.bodyPlainText.split(/\s+/).filter(Boolean).length,

                <Clock className="w-4 h-4" />

                <span>{article.readTime}</span>  }

              </div>

            </div>



            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">  return (            <h1 className="text-4xl font-bold tracking-tight mb-6">{article.title}</h1>}  title: string

              {article.excerpt}

            </p>    <div className="min-h-screen bg-background">



            <div      <head>

              className="prose prose-lg max-w-none prose-invert

                prose-headings:text-foreground prose-headings:font-semibold        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                prose-p:text-muted-foreground prose-p:leading-relaxed

                prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80      </head>            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">

                prose-strong:text-foreground prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6"

              dangerouslySetInnerHTML={{ __html: article.bodyHtml }}

            />

      <Navigation />              <div className="flex items-center gap-2">

            <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">

              <div>

                <span className="text-sm text-muted-foreground">Condividi questo articolo</span>

                <div className="flex items-center gap-2 mt-2">      <motion.div                <User className="w-4 h-4" />export default function ArticleClientPage({ article }: ArticleClientPageProps) {  author: stringimport { motion } from "framer-motion"

                  <Button variant="outline" size="sm">

                    <Share2 className="w-4 h-4 mr-2" />        initial={{ opacity: 0 }}

                    Condividi

                  </Button>        animate={{ opacity: 1 }}                <span>{article.author}</span>

                </div>

              </div>        transition={{ duration: 0.6 }}

              <ShareButtons

                title={article.title}        className="relative h-[50vh] md:h-[60vh] overflow-hidden"              </div>  if (!article) {

                description={article.excerpt || article.bodyPlainText.substring(0, 140)}

                url={article.shareUrl}      >

                image={article.coverImage}

              />        <img src={article.coverImage || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />              <div className="flex items-center gap-2">

            </div>

          </Card>        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        </motion.article>

      </div>      </motion.div>                <Calendar className="w-4 h-4" />    return (  date: stringimport Link from "next/link"



      <Footer />

    </div>

  )      <div className="container mx-auto max-w-4xl px-4 -mt-32 relative z-10">                <span>{new Date(article.date).toLocaleDateString("it-IT", { dateStyle: "long" })}</span>

}

        <motion.article

          initial={{ opacity: 0, y: 20 }}              </div>      <div className="min-h-screen bg-background flex items-center justify-center">

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.2 }}              <div className="flex items-center gap-2">

        >

          <Card className="p-8 md:p-12 mb-12">                <Clock className="w-4 h-4" />        <div className="text-center">  readTime: stringimport Navigation from "@/components/navigation"

            <Link href="/articoli">

              <Button variant="ghost" className="mb-6 -ml-2">                <span>{article.readTime}</span>

                <ArrowLeft className="w-4 h-4 mr-2" />

                Torna agli articoli              </div>          <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>

              </Button>

            </Link>            </div>



            <div className="mb-4">          <Link href="/articoli">  category: stringimport Footer from "@/components/footer"

              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">

                {article.category}            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">

              </span>

            </div>              {article.excerpt}            <Button>Torna agli articoli</Button>



            <h1 className="text-4xl font-bold tracking-tight mb-6">{article.title}</h1>            </p>



            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">          </Link>  coverImage: stringimport { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

              <div className="flex items-center gap-2">

                <User className="w-4 h-4" />            <div className="prose prose-lg prose-invert max-w-none">

                <span>{article.author}</span>

              </div>              {article.body ? <TinaMarkdown content={article.body} /> : <p>{article.bodyPlainText}</p>}        </div>

              <div className="flex items-center gap-2">

                <Calendar className="w-4 h-4" />            </div>

                <span>{new Date(article.date).toLocaleDateString("it-IT", { dateStyle: "long" })}</span>

              </div>      </div>  excerpt: stringimport { Button } from "@/components/ui/button"

              <div className="flex items-center gap-2">

                <Clock className="w-4 h-4" />            <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">

                <span>{article.readTime}</span>

              </div>              <div>    )

            </div>

                <span className="text-sm text-muted-foreground">Condividi questo articolo</span>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">

              {article.excerpt}                <div className="flex items-center gap-2 mt-2">  }  body: TinaMarkdownContent | nullimport { Card } from "@/components/ui/card"

            </p>

                  <Button variant="outline" size="sm">

            <div className="prose prose-lg prose-invert max-w-none">

              {article.body ? <TinaMarkdown content={article.body} /> : <p>{article.bodyPlainText}</p>}                    <Share2 className="w-4 h-4 mr-2" />

            </div>

                    Condividi

            <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">

              <div>                  </Button>  const articleSchema = {  bodyPlainText: stringimport { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text"

                <span className="text-sm text-muted-foreground">Condividi questo articolo</span>

                <div className="flex items-center gap-2 mt-2">                </div>

                  <Button variant="outline" size="sm">

                    <Share2 className="w-4 h-4 mr-2" />              </div>    "@context": "https://schema.org",

                    Condividi

                  </Button>            </div>

                </div>

              </div>          </Card>    "@type": "Article",}

            </div>

          </Card>        </motion.article>

        </motion.article>

      </div>      </div>    headline: article.title,



      <Footer />

    </div>

  )      <Footer />    description: article.excerpt || article.bodyPlainText.substring(0, 160),export interface ArticlePageData {

}

    </div>

  )    image: article.coverImage,

}

    datePublished: article.date,interface ArticleClientPageProps {  slug: string

    author: {

      "@type": "Person",  article: ArticlePageData | null  title: string

      name: article.author,

    },}  author: string

    publisher: {

      "@type": "Organization",  date: string

      name: "Psicoterapia Breve e Counselling CMT",

      logo: {export default function ArticleClientPage({ article }: ArticleClientPageProps) {  readTime: string

        "@type": "ImageObject",

        url: "https://www.psicoterapiacmt.it/logo.png",  if (!article) {  category: string

      },

    },    return (  coverImage: string

    articleSection: article.category,

    wordCount: article.bodyPlainText.split(/\s+/).filter(Boolean).length,      <div className="min-h-screen bg-background flex items-center justify-center">  excerpt: string

  }

        <div className="text-center">  body: TinaMarkdownContent | null

  return (

    <div className="min-h-screen bg-background">          <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>  bodyPlainText: string

      <head>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />          <Link href="/articoli">}

      </head>

      <Navigation />            <Button>Torna agli articoli</Button>



      <motion.div          </Link>interface ArticleClientPageProps {

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}        </div>  article: ArticlePageData

        transition={{ duration: 0.6 }}

        className="relative h-[50vh] md:h-[60vh] overflow-hidden"      </div>}

      >

        <img src={article.coverImage || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />    )

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      </motion.div>  }export default function ArticleClientPage({ article }: ArticleClientPageProps) {



      <div className="container mx-auto max-w-4xl px-4 -mt-32 relative z-10">  if (!article) {

        <motion.article

          initial={{ opacity: 0, y: 20 }}  const articleSchema = {    return (

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.2 }}    "@context": "https://schema.org",      <div className="min-h-screen bg-background flex items-center justify-center">

        >

          <Card className="p-8 md:p-12 mb-12">    "@type": "Article",        <div className="text-center">

            <Link href="/articoli">

              <Button variant="ghost" className="mb-6 -ml-2">    headline: article.title,          <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>

                <ArrowLeft className="w-4 h-4 mr-2" />

                Torna agli articoli    description: article.excerpt || article.bodyPlainText.substring(0, 160),          <Link href="/articoli">

              </Button>

            </Link>    image: article.coverImage,            <Button>Torna agli articoli</Button>



            <div className="mb-4">    datePublished: article.date,          </Link>

              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">

                {article.category}    author: {        </div>

              </span>

            </div>      "@type": "Person",      </div>



            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>      name: article.author,    )



            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">    },  }

              <div className="flex items-center gap-2">

                <User className="w-4 h-4" />    publisher: {

                <span>{article.author}</span>

              </div>      "@type": "Organization",      <ul>

              <div className="flex items-center gap-2">

                <Calendar className="w-4 h-4" />      name: "Psicoterapia Breve e Counselling CMT",        <li>Problemi circoscritti e specifici</li>

                <span>

                  {new Date(article.date).toLocaleDateString("it-IT", {      logo: {        <li>Crisi situazionali</li>

                    day: "numeric",

                    month: "long",        "@type": "ImageObject",        <li>Disturbi d'ansia e depressione lieve-moderata</li>

                    year: "numeric",

                  })}        url: "https://www.psicoterapiacmt.it/logo.png",        <li>Difficoltà relazionali</li>

                </span>

              </div>      },        <li>Supporto in momenti di transizione</li>

              <div className="flex items-center gap-2">

                <Clock className="w-4 h-4" />    },      </ul>

                <span>{article.readTime} di lettura</span>

              </div>    articleSection: article.category,

              <Button variant="ghost" size="sm" className="ml-auto">

                <Share2 className="w-4 h-4 mr-2" />    wordCount: article.bodyPlainText.split(/\s+/).filter(Boolean).length,      <blockquote style="border-left: 4px solid #e3aa5c; padding-left: 20px; margin: 30px 0; font-style: italic; color: #666;">

                Condividi

              </Button>  }        "La durata della terapia non è necessariamente correlata alla sua efficacia. Ciò che conta è la qualità dell'intervento e la capacità di attivare le risorse del paziente."

            </div>

      </blockquote>

            <div

              className="prose prose-lg max-w-none  return (

                prose-headings:font-bold prose-headings:text-foreground

                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6    <div className="min-h-screen bg-background">      <h2>Conclusioni</h2>

                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4

                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6      <head>      <p>La psicoterapia breve rappresenta un'opzione terapeutica valida ed efficace, supportata da solide evidenze scientifiche. La sua efficacia, unita alla maggiore accessibilità economica e temporale, la rende una scelta eccellente per molte persone che cercano supporto psicologico.</p>

                prose-ul:my-6 prose-ul:text-muted-foreground

                prose-ol:my-6 prose-ol:text-muted-foreground        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />    `,

                prose-li:my-2

                prose-strong:text-foreground prose-strong:font-semibold      </head>  },

                prose-blockquote:border-l-4 prose-blockquote:border-primary

                prose-blockquote:pl-6 prose-blockquote:italic      <Navigation />  "adattamento-realta-interpersonale": {

                prose-img:rounded-lg prose-img:shadow-lg"

            >    title: "L'Adattamento alla Realtà Interpersonale",

              {article.body ? <TinaMarkdown content={article.body} /> : <p>Contenuto non disponibile.</p>}

            </div>      <motion.div    author: "Dr. Marco Bianchi",

          </Card>

        initial={{ opacity: 0 }}    date: "2024-01-05",

          <motion.div

            initial={{ opacity: 0, y: 20 }}        animate={{ opacity: 1 }}    readTime: "10 min",

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6, delay: 0.4 }}        transition={{ duration: 0.6 }}    category: "Approfondimenti",

          >

            <Card className="p-8 mb-12">        className="relative h-[50vh] md:h-[60vh] overflow-hidden"    image: "/interpersonal-relationships-connection-abstract.jpg",

              <div className="flex items-start gap-6">

                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">      >    content: `

                  <User className="w-10 h-10 text-primary" />

                </div>        <img src={article.coverImage || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />      <p>Secondo la Control Mastery Theory, la principale motivazione di un individuo è l'adattamento alla realtà, soprattutto alla realtà del suo mondo interpersonale. Questa affermazione, apparentemente semplice, ha profonde implicazioni per la comprensione del comportamento umano e della psicopatologia.</p>

                <div>

                  <h3 className="text-xl font-bold mb-2">Scritto da {article.author}</h3>        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                  <p className="text-muted-foreground mb-4">

                    Psicologo e psicoterapeuta specializzato in Control Mastery Theory, membro del Control-Mastery      </motion.div>      <h2>Il Primato delle Relazioni</h2>

                    Theory Italian Group.

                  </p>      <p>Gli esseri umani sono creature fondamentalmente sociali. Fin dalla nascita, la nostra sopravvivenza e il nostro benessere dipendono dalle relazioni con gli altri. Non sorprende quindi che la nostra psiche sia orientata principalmente verso l'adattamento al mondo interpersonale.</p>

                  <Button variant="outline" size="sm">

                    Altri articoli dell'autore      <div className="container mx-auto max-w-4xl px-4 -mt-32 relative z-10">

                  </Button>

                </div>        <motion.article      <img src="/family-relationships-connection-warmth.jpg" alt="Relazioni interpersonali" style="width: 100%; border-radius: 8px; margin: 20px 0;" />

              </div>

            </Card>          initial={{ opacity: 0, y: 20 }}

          </motion.div>

          animate={{ opacity: 1, y: 0 }}      <h2>Come si Sviluppano le Credenze Patogene</h2>

          <motion.div

            initial={{ opacity: 0, y: 20 }}          transition={{ duration: 0.6, delay: 0.2 }}      <p>Durante l'infanzia, i bambini sviluppano credenze su se stessi, sugli altri e sul mondo basandosi sulle loro esperienze relazionali. Quando l'ambiente familiare presenta difficoltà o disfunzioni, il bambino può sviluppare credenze patogene nel tentativo di adattarsi:</p>

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6, delay: 0.6 }}        >

          >

            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5">          <Card className="p-8 md:p-12 mb-12">      <ul>

              <h2 className="text-3xl font-bold mb-4">Hai bisogno di supporto?</h2>

              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">            <Link href="/articoli">        <li><strong>Credenze su di sé:</strong> "Non sono abbastanza buono", "Sono un peso per gli altri"</li>

                Contatta la rete Psicoterapia Breve e Counselling CMT per un primo colloquio

              </p>              <Button variant="ghost" className="mb-6 -ml-2">        <li><strong>Credenze sugli altri:</strong> "Gli altri mi abbandoneranno", "Non posso fidarmi di nessuno"</li>

              <div className="flex flex-wrap gap-4 justify-center">

                <Link href="/contatti">                <ArrowLeft className="w-4 h-4 mr-2" />        <li><strong>Credenze sul mondo:</strong> "Il mondo è pericoloso", "Esprimere i propri bisogni è sbagliato"</li>

                  <Button size="lg">Prenota un Appuntamento</Button>

                </Link>                Torna agli articoli      </ul>

                <Link href="/servizi">

                  <Button size="lg" variant="outline">              </Button>

                    Scopri i Servizi

                  </Button>            </Link>      <h2>Il Senso di Colpa del Sopravvissuto</h2>

                </Link>

              </div>      <p>Un concetto centrale nella CMT è il "senso di colpa del sopravvissuto". I bambini possono sentirsi in colpa per essere più felici, più di successo o più sani dei loro genitori o fratelli. Questo senso di colpa può portare a comportamenti di auto-sabotaggio nell'età adulta.</p>

            </Card>

          </motion.div>            <div className="mb-4">

        </motion.article>

      </div>              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">      <blockquote style="border-left: 4px solid #89d692; padding-left: 20px; margin: 30px 0; font-style: italic; color: #666;">



      <Footer />                {article.category}        "Molte persone limitano inconsciamente la propria felicità e il proprio successo per lealtà verso i membri della famiglia che hanno sofferto."

    </div>

  )              </span>      </blockquote>

}

            </div>

      <h2>L'Importanza dell'Adattamento Sano</h2>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>      <p>Non tutto l'adattamento è patologico. Gli esseri umani hanno una straordinaria capacità di adattarsi in modo sano e costruttivo alle sfide della vita. La terapia CMT mira a:</p>



            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">      <ol>

              <div className="flex items-center gap-2">        <li>Distinguere tra adattamenti sani e patologici</li>

                <User className="w-4 h-4" />        <li>Aiutare i pazienti a riconoscere quando le loro strategie di adattamento non sono più necessarie</li>

                <span>{article.author}</span>        <li>Sviluppare nuove modalità di relazione più funzionali</li>

              </div>      </ol>

              <div className="flex items-center gap-2">

                <Calendar className="w-4 h-4" />      <img src="/personal-growth-transformation-positive.jpg" alt="Crescita personale" style="width: 100%; border-radius: 8px; margin: 20px 0;" />

                <span>

                  {new Date(article.date).toLocaleDateString("it-IT", {      <h2>Implicazioni per la Terapia</h2>

                    day: "numeric",      <p>Comprendere che i problemi psicologici derivano da tentativi di adattamento ha importanti implicazioni terapeutiche:</p>

                    month: "long",

                    year: "numeric",      <ul>

                  })}        <li>I sintomi non sono segni di debolezza, ma di tentativi di far fronte a situazioni difficili</li>

                </span>        <li>Il paziente non è "malato" ma sta usando strategie che erano adattive in passato ma non lo sono più</li>

              </div>        <li>La terapia non deve "curare" il paziente, ma aiutarlo a sviluppare nuove strategie più funzionali</li>

              <div className="flex items-center gap-2">      </ul>

                <Clock className="w-4 h-4" />

                <span>{article.readTime} di lettura</span>      <h2>Conclusioni</h2>

              </div>      <p>L'adattamento alla realtà interpersonale è al centro della nostra esperienza umana. Comprendere come questo processo può portare allo sviluppo di credenze patogene ci aiuta a essere più compassionevoli verso noi stessi e gli altri, e ci fornisce una strada chiara verso il cambiamento e la crescita personale.</p>

              <Button variant="ghost" size="sm" className="ml-auto">    `,

                <Share2 className="w-4 h-4 mr-2" />  },

                Condividi  "counselling-psicologico-quando-serve": {

              </Button>    title: "Counselling Psicologico: Quando è la Scelta Giusta",

            </div>    author: "Dr.ssa Laura Verdi",

    date: "2023-12-28",

            <div    readTime: "7 min",

              className="prose prose-lg max-w-none    category: "Servizi",

                prose-headings:font-bold prose-headings:text-foreground    image: "/counseling-support-guidance-warm-colors.jpg",

                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6    content: `

                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4      <p>Il counselling psicologico è un intervento breve e focalizzato che può essere estremamente efficace per affrontare difficoltà specifiche o momenti di crisi. Ma come capire se il counselling è la scelta giusta per te, o se invece sarebbe più appropriata una psicoterapia?</p>

                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6

                prose-ul:my-6 prose-ul:text-muted-foreground      <h2>Cos'è il Counselling Psicologico</h2>

                prose-ol:my-6 prose-ol:text-muted-foreground      <p>Il counselling psicologico è un intervento di supporto psicologico breve, tipicamente di 4-8 incontri, che si concentra su problematiche specifiche e circoscritte. A differenza della psicoterapia, che può durare mesi o anni e affrontare problemi più profondi, il counselling è orientato alla soluzione di difficoltà attuali.</p>

                prose-li:my-2

                prose-strong:text-foreground prose-strong:font-semibold      <h2>Quando Scegliere il Counselling</h2>

                prose-blockquote:border-l-4 prose-blockquote:border-primary      <p>Il counselling psicologico è particolarmente indicato in queste situazioni:</p>

                prose-blockquote:pl-6 prose-blockquote:italic

                prose-img:rounded-lg prose-img:shadow-lg"      <ul>

            >        <li><strong>Momenti di transizione:</strong> Cambio di lavoro, trasferimento, fine di una relazione</li>

              {article.body ? <TinaMarkdown content={article.body} /> : <p>Contenuto non disponibile.</p>}        <li><strong>Decisioni importanti:</strong> Scelte di vita che richiedono chiarezza e supporto</li>

            </div>        <li><strong>Difficoltà circoscritte:</strong> Problemi specifici che non richiedono un intervento approfondito</li>

          </Card>        <li><strong>Crisi situazionali:</strong> Eventi stressanti che richiedono supporto immediato</li>

        <li><strong>Miglioramento delle relazioni:</strong> Difficoltà comunicative o conflitti specifici</li>

          <motion.div      </ul>

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}      <img src="/counseling-session-supportive-environment.jpg" alt="Sessione di counselling" style="width: 100%; border-radius: 8px; margin: 20px 0;" />

            transition={{ duration: 0.6, delay: 0.4 }}

          >      <h2>Quando Scegliere la Psicoterapia</h2>

            <Card className="p-8 mb-12">      <p>La psicoterapia è più indicata quando:</p>

              <div className="flex items-start gap-6">

                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">      <ul>

                  <User className="w-10 h-10 text-primary" />        <li>I problemi sono ricorrenti e di lunga data</li>

                </div>        <li>Ci sono sintomi di disturbi psicologici (depressione, ansia, disturbi alimentari, ecc.)</li>

                <div>        <li>Si desidera un cambiamento profondo della propria personalità o dei propri schemi relazionali</li>

                  <h3 className="text-xl font-bold mb-2">Scritto da {article.author}</h3>        <li>Ci sono traumi del passato che influenzano il presente</li>

                  <p className="text-muted-foreground mb-4">      </ul>

                    Psicologo e psicoterapeuta specializzato in Control Mastery Theory, membro del Control-Mastery

                    Theory Italian Group.      <h2>I Vantaggi del Counselling CMT</h2>

                  </p>      <p>Il counselling basato sulla Control Mastery Theory offre vantaggi specifici:</p>

                  <Button variant="outline" size="sm">

                    Altri articoli dell'autore      <ol>

                  </Button>        <li><strong>Approccio focalizzato:</strong> Si concentra su obiettivi specifici e raggiungibili</li>

                </div>        <li><strong>Breve durata:</strong> 4 incontri settimanali + 1 follow-up dopo 3 mesi</li>

              </div>        <li><strong>Costo accessibile:</strong> 250 euro per l'intero percorso</li>

            </Card>        <li><strong>Basato su evidenze:</strong> Fondato su un modello teorico validato empiricamente</li>

          </motion.div>        <li><strong>Rispetto dell'autonomia:</strong> Valorizza le risorse e la capacità di auto-aiuto del cliente</li>

      </ol>

          <motion.div

            initial={{ opacity: 0, y: 20 }}      <blockquote style="border-left: 4px solid #e3aa5c; padding-left: 20px; margin: 30px 0; font-style: italic; color: #666;">

            animate={{ opacity: 1, y: 0 }}        "Il counselling non è una psicoterapia 'di serie B', ma un intervento specifico per bisogni specifici. La scelta giusta dipende dalla natura del problema e dagli obiettivi della persona."

            transition={{ duration: 0.6, delay: 0.6 }}      </blockquote>

          >

            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5">      <h2>Come Funziona il Counselling CMT</h2>

              <h2 className="text-3xl font-bold mb-4">Hai bisogno di supporto?</h2>      <p>Nel counselling CMT, il consulente lavora con il cliente per:</p>

              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">

                Contatta la rete Psicoterapia Breve e Counselling CMT per un primo colloquio      <ol>

              </p>        <li>Identificare il problema specifico e gli obiettivi</li>

              <div className="flex flex-wrap gap-4 justify-center">        <li>Comprendere le credenze che ostacolano il raggiungimento degli obiettivi</li>

                <Link href="/contatti">        <li>Sviluppare strategie concrete per affrontare la situazione</li>

                  <Button size="lg">Prenota un Appuntamento</Button>        <li>Monitorare i progressi e consolidare i cambiamenti</li>

                </Link>      </ol>

                <Link href="/servizi">

                  <Button size="lg" variant="outline">      <img src="/goal-achievement-success-growth.jpg" alt="Raggiungimento obiettivi" style="width: 100%; border-radius: 8px; margin: 20px 0;" />

                    Scopri i Servizi

                  </Button>      <h2>Conclusioni</h2>

                </Link>      <p>Il counselling psicologico è una risorsa preziosa per chi affronta difficoltà specifiche o momenti di crisi. La sua brevità e il suo focus lo rendono accessibile e efficace. Se non sei sicuro se il counselling o la psicoterapia sia più adatto a te, un primo colloquio può aiutarti a chiarire quale percorso intraprendere.</p>

              </div>    `,

            </Card>  },

          </motion.div>  "credenze-patogene-superarle": {

        </motion.article>    title: "Credenze Patogene: Come Riconoscerle e Superarle",

      </div>    author: "Dr. Giuseppe Stefano Biuso",

    date: "2023-12-20",

      <Footer />    readTime: "9 min",

    </div>    category: "Teoria",

  )    image: "/mind-beliefs-psychology-abstract-gradient.jpg",

}    content: `

      <p>Le credenze patogene sono convinzioni inconsce che limitano la nostra vita e il nostro benessere. Secondo la Control Mastery Theory, queste credenze sono al centro di molti problemi psicologici. Comprendere come si formano e come superarle è fondamentale per il processo terapeutico.</p>

      <h2>Cosa Sono le Credenze Patogene</h2>
      <p>Le credenze patogene sono convinzioni inconsce su noi stessi, sugli altri e sul mondo che si sviluppano nell'infanzia come tentativi di adattamento all'ambiente familiare. Anche se erano funzionali nel contesto in cui si sono formate, diventano problematiche quando continuano a influenzare il nostro comportamento nell'età adulta.</p>

      <h2>Come si Formano</h2>
      <p>Le credenze patogene si sviluppano attraverso due meccanismi principali:</p>

      <ul>
        <li><strong>Identificazione traumatica:</strong> Il bambino si identifica con un genitore che soffre, sviluppando la credenza che anche lui debba soffrire</li>
        <li><strong>Obbedienza a comandi impliciti:</strong> Il bambino interiorizza messaggi impliciti dei genitori su come dovrebbe essere o comportarsi</li>
      </ul>

      <img src="/childhood-memories-family-dynamics.jpg" alt="Dinamiche familiari" style="width: 100%; border-radius: 8px; margin: 20px 0;" />

      <h2>Esempi Comuni di Credenze Patogene</h2>
      <p>Ecco alcuni esempi di credenze patogene frequenti:</p>

      <ul>
        <li>"Se sono felice, tradisco i miei genitori che hanno sofferto"</li>
        <li>"Se ho successo, farò sentire gli altri inferiori"</li>
        <li>"Esprimere i miei bisogni è egoista e danneggia gli altri"</li>
        <li>"Se mi avvicino troppo agli altri, li ferirò o mi feriranno"</li>
        <li>"Non merito di essere amato"</li>
        <li>"Devo essere perfetto per essere accettato"</li>
      </ul>

      <h2>Come Riconoscere le Proprie Credenze Patogene</h2>
      <p>Riconoscere le proprie credenze patogene non è sempre facile, poiché sono inconsce. Tuttavia, ci sono alcuni segnali:</p>

      <ol>
        <li><strong>Schemi ripetitivi:</strong> Situazioni che si ripetono nella tua vita (es. relazioni che finiscono sempre allo stesso modo)</li>
        <li><strong>Auto-sabotaggio:</strong> Comportamenti che ostacolano il raggiungimento dei tuoi obiettivi</li>
        <li><strong>Senso di colpa irrazionale:</strong> Sentirsi in colpa per cose positive (successo, felicità, ecc.)</li>
        <li><strong>Ansia anticipatoria:</strong> Paura eccessiva di situazioni che potrebbero portare a risultati positivi</li>
      </ol>

      <blockquote style="border-left: 4px solid #89d692; padding-left: 20px; margin: 30px 0; font-style: italic; color: #666;">
        "Le credenze patogene sono come occhiali invisibili attraverso cui vediamo il mondo. Non ci rendiamo conto di indossarli, ma colorano tutto ciò che vediamo."
      </blockquote>

      <h2>Come la Terapia CMT Aiuta a Superarle</h2>
      <p>La Control Mastery Theory offre un approccio specifico per superare le credenze patogene:</p>

      <ol>
        <li><strong>Identificazione:</strong> Il terapeuta aiuta il paziente a identificare le credenze patogene attraverso l'analisi dei suoi comportamenti e delle sue emozioni</li>
        <li><strong>Test:</strong> Il paziente testa inconsciamente il terapeuta per verificare se le sue credenze sono valide</li>
        <li><strong>Disconferma:</strong> Il terapeuta risponde ai test in modo da disconfermare le credenze patogene</li>
        <li><strong>Insight:</strong> Man mano che le credenze vengono disconfermate, il paziente acquisisce nuove prospettive</li>
        <li><strong>Cambiamento:</strong> Con le nuove prospettive, il paziente può cambiare i suoi comportamenti e le sue relazioni</li>
      </ol>

      <img src="/breakthrough-insight-transformation-light.jpg" alt="Insight terapeutico" style="width: 100%; border-radius: 8px; margin: 20px 0;" />

      <h2>Cosa Puoi Fare da Solo</h2>
      <p>Anche se la terapia è il modo più efficace per superare le credenze patogene, ci sono alcune cose che puoi fare da solo:</p>

      <ul>
        <li>Osserva i tuoi schemi comportamentali ripetitivi</li>
        <li>Chiediti: "Quale credenza su me stesso potrebbe spiegare questo comportamento?"</li>
        <li>Cerca esperienze che contraddicano le tue credenze negative</li>
        <li>Pratica l'auto-compassione invece dell'auto-critica</li>
        <li>Parla con persone di fiducia delle tue paure e preoccupazioni</li>
      </ul>

      <h2>Conclusioni</h2>
      <p>Le credenze patogene sono potenti influenze inconsce sul nostro comportamento, ma non sono immutabili. Con consapevolezza, supporto terapeutico e impegno, è possibile riconoscerle, metterle in discussione e superarle, aprendo la strada a una vita più libera e soddisfacente.</p>
    `,
  },
  "terapia-online-vantaggi": {
    title: "Terapia Online: Vantaggi e Considerazioni",
    author: "Dr.ssa Anna Neri",
    date: "2023-12-15",
    readTime: "5 min",
    category: "Servizi",
    image: "/online-therapy-video-call-technology.jpg",
    content: `
      <p>La terapia online, o videoconsulenza psicologica, è diventata sempre più popolare negli ultimi anni. Ma è efficace quanto la terapia in presenza? Quali sono i suoi vantaggi e le sue limitazioni? Esploriamo insieme questo tema.</p>

      <h2>Cos'è la Terapia Online</h2>
      <p>La terapia online è una forma di intervento psicologico che si svolge attraverso piattaforme di videochiamata sicure. Il terapeuta e il paziente si incontrano virtualmente, proprio come farebbero in uno studio, ma ciascuno dal comfort del proprio spazio.</p>

      <h2>I Vantaggi della Terapia Online</h2>
      <p>La terapia online offre numerosi vantaggi:</p>

      <ul>
        <li><strong>Accessibilità:</strong> Puoi accedere alla terapia da qualsiasi luogo, eliminando le barriere geografiche</li>
        <li><strong>Flessibilità:</strong> Più facile trovare orari compatibili con i tuoi impegni</li>
        <li><strong>Comfort:</strong> Puoi fare terapia dal comfort di casa tua</li>
        <li><strong>Continuità:</strong> Puoi continuare la terapia anche se ti trasferisci o viaggi</li>
        <li><strong>Riduzione dello stigma:</strong> Alcune persone si sentono più a loro agio iniziando online</li>
        <li><strong>Risparmio di tempo:</strong> Niente spostamenti o tempo perso nel traffico</li>
      </ul>

      <img src="/person-video-call-comfortable-home-setting.jpg" alt="Terapia online" style="width: 100%; border-radius: 8px; margin: 20px 0;" />

      <h2>L'Efficacia della Terapia Online</h2>
      <p>La ricerca scientifica ha dimostrato che la terapia online è efficace quanto quella in presenza per molte problematiche psicologiche, tra cui:</p>

      <ul>
        <li>Depressione</li>
        <li>Ansia</li>
        <li>Disturbo da stress post-traumatico</li>
        <li>Problemi relazionali</li>
        <li>Difficoltà di adattamento</li>
      </ul>

      <blockquote style="border-left: 4px solid #e3aa5c; padding-left: 20px; margin: 30px 0; font-style: italic; color: #666;">
        "Ciò che conta nella terapia non è il mezzo attraverso cui avviene, ma la qualità della relazione terapeutica e la competenza del terapeuta."
      </blockquote>

      <h2>Considerazioni Pratiche</h2>
      <p>Per una terapia online efficace, è importante:</p>

      <ol>
        <li><strong>Connessione stabile:</strong> Assicurati di avere una buona connessione internet</li>
        <li><strong>Spazio privato:</strong> Trova un luogo tranquillo dove non sarai disturbato</li>
        <li><strong>Dispositivo adeguato:</strong> Usa un computer o tablet con webcam e microfono funzionanti</li>
        <li><strong>Piattaforma sicura:</strong> Verifica che la piattaforma utilizzata garantisca la privacy</li>
      </ol>

      <h2>Quando la Terapia in Presenza è Preferibile</h2>
      <p>Ci sono situazioni in cui la terapia in presenza potrebbe essere più appropriata:</p>

      <ul>
        <li>Crisi acute o situazioni di emergenza</li>
        <li>Disturbi gravi che richiedono monitoraggio stretto</li>
        <li>Quando il paziente preferisce il contatto di persona</li>
        <li>Quando non è possibile garantire privacy o connessione adeguata</li>
      </ul>

      <img src="/placeholder.svg?height=400&width=800" alt="Studio terapeutico" style="width: 100%; border-radius: 8px; margin: 20px 0;" />

      <h2>La Terapia Online nella Rete CMT</h2>
      <p>La rete Psicoterapia Breve e Counselling CMT offre sia sedute in presenza che videoconsulenze online. I nostri terapeuti sono formati per fornire interventi efficaci in entrambe le modalità, garantendo la stessa qualità e professionalità.</p>

      <h2>Conclusioni</h2>
      <p>La terapia online è un'opzione valida ed efficace che può rendere il supporto psicologico più accessibile a molte persone. La scelta tra terapia online e in presenza dipende dalle tue preferenze personali, dalla tua situazione e dal tipo di problematica che vuoi affrontare. L'importante è trovare la modalità che funziona meglio per te.</p>
    `,
  },
}

export default function ArticleClientPage() {
  const params = useParams()
  const slug = params.slug as string
  const article = articlesData[slug]

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>
          <Link href="/articoli">
            <Button>Torna agli articoli</Button>
          </Link>
        </div>
      </div>
    )
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt || article.bodyPlainText.substring(0, 160),
    image: article.coverImage,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Psicoterapia Breve e Counselling CMT",
      logo: {
        "@type": "ImageObject",
        url: "https://www.psicoterapiacmt.it/logo.png",
      },
    },
    articleSection: article.category,
    wordCount: article.bodyPlainText.split(/\s+/).filter(Boolean).length,
  }

  return (
    <div className="min-h-screen bg-background">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </head>
      <Navigation />

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
      >
  <img src={article.coverImage || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </motion.div>

      {/* Article Content */}
      <div className="container mx-auto max-w-4xl px-4 -mt-32 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 mb-12">
            {/* Back Button */}
            <Link href="/articoli">
              <Button variant="ghost" className="mb-6 -ml-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Torna agli articoli
              </Button>
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.date).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} di lettura</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Condividi
              </Button>
            </div>

            {/* Article Content - HTML from database */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-ul:text-muted-foreground
                prose-ol:my-6 prose-ol:text-muted-foreground
                prose-li:my-2
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-primary
                prose-blockquote:pl-6 prose-blockquote:italic
                prose-img:rounded-lg prose-img:shadow-lg"
            >
              {article.body ? <TinaMarkdown content={article.body} /> : <p>Contenuto non disponibile.</p>}
            </div>
          </Card>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scritto da {article.author}</h3>
                  <p className="text-muted-foreground mb-4">
                    Psicologo e psicoterapeuta specializzato in Control Mastery Theory, membro del Control-Mastery
                    Theory Italian Group.
                  </p>
                  <Button variant="outline" size="sm">
                    Altri articoli dell'autore
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="text-3xl font-bold mb-4">Hai bisogno di supporto?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">
                Contatta la rete Psicoterapia Breve e Counselling CMT per un primo colloquio
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contatti">
                  <Button size="lg">Prenota un Appuntamento</Button>
                </Link>
                <Link href="/servizi">
                  <Button size="lg" variant="outline">
                    Scopri i Servizi
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </motion.article>
      </div>

      <Footer />
    </div>
  )
}
