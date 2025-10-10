import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getAllNews, getNewsBySlug } from "@/lib/tina/news"
import NewsArticleClientPage, { type NewsArticlePageData } from "./NewsArticleClientPage"

import { remark } from "remark"
import remarkHtml from "remark-html"
import strip from "strip-markdown"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.psicoterapiacmt.it"

interface NewsArticlePageProps {
  params: {
    slug: string
  }
}

async function buildNewsArticleData(slug: string): Promise<NewsArticlePageData | null> {
  const newsItem = getNewsBySlug(slug)

  if (!newsItem) {
    return null
  }

  const bodyHtml = String(await remark().use(remarkHtml).process(newsItem.content))
  const bodyPlainText = String(await remark().use(strip).process(newsItem.content)).trim()

  const wordCount = bodyPlainText.split(/\s+/).filter(Boolean).length
  const readTime = newsItem.readTime || `${Math.max(1, Math.round(wordCount / 200))} min`
  const coverImage = newsItem.coverImage || "/placeholder.jpg"
  const shareUrl = new URL(`/news/${newsItem.slug}`, BASE_URL).href

  return {
    slug: newsItem.slug,
    title: newsItem.title,
    author: newsItem.author || "CMT Italian Group",
    date: newsItem.date,
    readTime,
    category: newsItem.category || "News",
    coverImage,
    excerpt: newsItem.excerpt || bodyPlainText.substring(0, 160),
    bodyHtml,
    bodyPlainText,
    shareUrl,
  }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const newsItem = await buildNewsArticleData(params.slug)

  if (!newsItem) {
    notFound()
  }

  return <NewsArticleClientPage newsItem={newsItem} />
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const newsItem = await buildNewsArticleData(params.slug)

  if (!newsItem) {
    return {
      title: "News non trovata",
      description: "La news richiesta non è stata trovata.",
    }
  }

  const imageAbsolute = new URL(newsItem.coverImage, BASE_URL).href

  return {
    title: `${newsItem.title} | Psicoterapia Breve e Counselling CMT`,
    description: newsItem.excerpt || newsItem.bodyPlainText.substring(0, 160),
    openGraph: {
      title: newsItem.title,
      description: newsItem.excerpt || newsItem.bodyPlainText.substring(0, 160),
      url: newsItem.shareUrl,
      type: "article",
      publishedTime: newsItem.date,
      authors: [newsItem.author],
      images: [
        {
          url: imageAbsolute,
          width: 1200,
          height: 630,
          alt: newsItem.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: newsItem.title,
      description: newsItem.excerpt || newsItem.bodyPlainText.substring(0, 160),
      images: [imageAbsolute],
    },
    alternates: {
      canonical: newsItem.shareUrl,
    },
  }
}

export async function generateStaticParams() {
  const news = getAllNews()

  return news.map((item) => ({
    slug: item.slug,
  }))
}
