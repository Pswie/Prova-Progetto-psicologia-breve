import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-config"
import ArticoliClientPage, { type ArticleSummary } from "./_components/ArticoliClientPage"
import { getAllArticles } from "@/lib/tina/articles"

export const metadata: Metadata = genMeta({
  title: "Articoli e Approfondimenti",
  description:
    "Articoli, ricerche e approfondimenti sulla Control Mastery Theory, psicoterapia breve e counselling psicologico. Contenuti scientifici e pratici.",
  keywords: ["articoli psicologia", "CMT", "ricerca", "approfondimenti", "psicoterapia"],
  path: "/articoli",
})

export default async function ArticoliPage() {
  const articlesFromMarkdown = getAllArticles()

  const articles: ArticleSummary[] = articlesFromMarkdown.map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    author: article.author,
    date: article.date,
    readTime: article.readTime,
    category: article.category,
    coverImage: article.coverImage,
  }))

  const sortedArticles = [...articles].sort((a, b) => {
    const timeA = new Date(a.date ?? 0).getTime()
    const timeB = new Date(b.date ?? 0).getTime()
    return timeB - timeA
  })

  const categories = [
    "Tutti",
    ...Array.from(new Set(sortedArticles.map((article) => article.category).filter(Boolean))),
  ]

  return <ArticoliClientPage categories={categories} articles={sortedArticles} />
}
