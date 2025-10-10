"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

export interface NewsArticlePageData {
  slug: string
  title: string
  author: string
  date: string
  readTime: string
  category: string
  coverImage: string
  excerpt: string
  bodyHtml: string
  bodyPlainText: string
  shareUrl: string
}

interface NewsArticleClientPageProps {
  newsItem: NewsArticlePageData | null
}

export default function NewsArticleClientPage({ newsItem }: NewsArticleClientPageProps) {
  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">News non trovata</h1>
          <Link href="/news">
            <Button>Torna alle news</Button>
          </Link>
        </div>
      </div>
    )
  }

  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: newsItem.title,
    description: newsItem.excerpt || newsItem.bodyPlainText.substring(0, 160),
    image: newsItem.coverImage,
    datePublished: newsItem.date,
    author: {
      "@type": "Person",
      name: newsItem.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Psicoterapia Breve e Counselling CMT",
      logo: {
        "@type": "ImageObject",
        url: `${new URL("/placeholder-logo.png", newsItem.shareUrl).href}`,
      },
    },
    articleSection: newsItem.category,
    wordCount: newsItem.bodyPlainText.split(/\s+/).filter(Boolean).length,
  }

  return (
    <div className="min-h-screen bg-background">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }} />
      </head>

      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
      >
        <Image src={newsItem.coverImage || "/placeholder.jpg"} alt={newsItem.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </motion.div>

      <div className="container mx-auto max-w-4xl px-4 -mt-32 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 mb-12">
            <Link href="/news">
              <Button variant="ghost" className="mb-6 -ml-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Torna alle news
              </Button>
            </Link>

            <div className="mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {newsItem.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight mb-6 text-balance">{newsItem.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{newsItem.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(newsItem.date).toLocaleDateString("it-IT", { dateStyle: "long" })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{newsItem.readTime}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{newsItem.excerpt}</p>

            <div
              className="prose prose-lg max-w-none prose-invert prose-headings:text-foreground prose-headings:font-semibold prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6"
              dangerouslySetInnerHTML={{ __html: newsItem.bodyHtml }}
            />

            <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Condividi questa news</span>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Condividi
                  </Button>
                </div>
              </div>
              <ShareButtons
                title={newsItem.title}
                description={newsItem.excerpt || newsItem.bodyPlainText.substring(0, 140)}
                url={newsItem.shareUrl}
                image={newsItem.coverImage}
              />
            </div>
          </Card>
        </motion.article>
      </div>

      <Footer />
    </div>
  )
}
