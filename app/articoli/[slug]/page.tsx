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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt || article.bodyPlainText.substring(0, 160),
    image: {
      "@type": "ImageObject",
      url: new URL(article.coverImage, BASE_URL).href,
      width: 1200,
      height: 630,
    },
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Psicoterapia Breve e Counselling CMT",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: new URL("/Logo.png", BASE_URL).href,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.shareUrl,
    },
    articleSection: article.category,
    wordCount: article.bodyPlainText.split(/\s+/).filter(Boolean).length,
    inLanguage: "it-IT",
    isAccessibleForFree: true,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleClientPage article={article} />
    </>
  )
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
    keywords: [
      article.category,
      "psicoterapia breve",
      "counselling",
      "CMT",
      "Control Mastery Theory",
      "psicologia",
      article.author,
    ],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt || article.bodyPlainText.substring(0, 160),
      url: article.shareUrl,
      siteName: "Psicoterapia Breve e Counselling CMT",
      locale: "it_IT",
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
      tags: [article.category, "psicoterapia breve", "counselling", "CMT"],
      images: [
        {
          url: imageAbsolute,
          width: 1200,
          height: 630,
          alt: article.title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || article.bodyPlainText.substring(0, 160),
      images: [imageAbsolute],
      creator: "@CMTItalianGroup",
      site: "@CMTItalianGroup",
    },
    alternates: {
      canonical: article.shareUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}