import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getAllArticles, getArticleBySlug } from "@/lib/tina/articles"
import ArticleClientPage, { type ArticlePageData } from "./ArticleClientPage"

import { remark } from "remark"
import remarkHtml from "remark-html"
import strip from "strip-markdown"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.psicoterapiacmt.it"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

async function buildArticleData(slug: string): Promise<ArticlePageData | null> {
  const article = getArticleBySlug(slug)

  if (!article) {
    return null
  }

  const bodyHtml = String(await remark().use(remarkHtml).process(article.content))
  const bodyPlainText = String(await remark().use(strip).process(article.content)).trim()

  const wordCount = bodyPlainText.split(/\s+/).filter(Boolean).length
  const readTime = article.readTime || `${Math.max(1, Math.round(wordCount / 200))} min`
  const coverImage = article.coverImage || "/placeholder.jpg"
  const shareUrl = new URL(`/articoli/${article.slug}`, BASE_URL).href

  return {
    slug: article.slug,
    title: article.title,
    author: article.author || "CMT Italian Group",
    date: article.date,
    readTime,
    category: article.category || "Articoli",
    coverImage,
    excerpt: article.excerpt || bodyPlainText.substring(0, 160),
    bodyHtml,
    bodyPlainText,
    shareUrl,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await buildArticleData(params.slug)

  if (!article) {
    notFound()
  }

  return <ArticleClientPage article={article} />
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await buildArticleData(params.slug)

  if (!article) {
    return {
      title: "Articolo non trovato",
      description: "L'articolo richiesto non è stato trovato.",
    }
  }

  const imageAbsolute = new URL(article.coverImage, BASE_URL).href

  return {
    title: `${article.title} | Psicoterapia Breve e Counselling CMT`,
    description: article.excerpt || article.bodyPlainText.substring(0, 160),
    openGraph: {
      title: article.title,
      description: article.excerpt || article.bodyPlainText.substring(0, 160),
      url: article.shareUrl,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: imageAbsolute,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || article.bodyPlainText.substring(0, 160),
      images: [imageAbsolute],
    },
    alternates: {
      canonical: article.shareUrl,
    },
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}