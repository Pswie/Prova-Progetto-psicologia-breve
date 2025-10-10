import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-config"
import NewsClientPage, { type NewsSummary } from "./_components/NewsClientPage"
import { getAllNews } from "@/lib/tina/news"

export const metadata: Metadata = genMeta({
  title: "News e Aggiornamenti",
  description:
    "Scopri le ultime novità, eventi e aggiornamenti sulla Control Mastery Theory e sui progetti del CMT Italian Group.",
  keywords: ["news psicologia", "eventi CMT", "aggiornamenti", "psicoterapia"],
  path: "/news",
})

export default async function NewsPage() {
  const newsFromMarkdown = getAllNews()

  const newsItems: NewsSummary[] = newsFromMarkdown.map((item) => ({
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    author: item.author,
    date: item.date,
    readTime: item.readTime,
    category: item.category,
    coverImage: item.coverImage,
  }))

  const sortedNews = [...newsItems].sort((a, b) => {
    const timeA = new Date(a.date ?? 0).getTime()
    const timeB = new Date(b.date ?? 0).getTime()
    return timeB - timeA
  })

  const categories = [
    "Tutti",
    ...Array.from(new Set(sortedNews.map((item) => item.category).filter(Boolean))),
  ]

  return <NewsClientPage categories={categories} newsItems={sortedNews} />
}
