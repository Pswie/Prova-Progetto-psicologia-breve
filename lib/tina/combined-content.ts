import { getAllArticles, type Article } from './articles'
import { getAllNews, type NewsItem } from './news'

export interface CombinedContent {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  coverImage: string
  type: 'article' | 'news'
  url: string
}

/**
 * Ottiene gli ultimi contenuti combinati (articoli + news) ordinati per data
 * @param limit Numero massimo di contenuti da restituire (default: 3)
 */
export function getLatestCombinedContent(limit: number = 3): CombinedContent[] {
  const articles = getAllArticles()
  const news = getAllNews()

  // Mappa gli articoli al formato combinato
  const mappedArticles: CombinedContent[] = articles.map(article => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    author: article.author,
    date: article.date,
    readTime: article.readTime,
    category: article.category,
    coverImage: article.coverImage,
    type: 'article' as const,
    url: `/articoli/${article.slug}`
  }))

  // Mappa le news al formato combinato
  const mappedNews: CombinedContent[] = news.map(item => ({
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    author: item.author,
    date: item.date,
    readTime: item.readTime,
    category: item.category,
    coverImage: item.coverImage,
    type: 'news' as const,
    url: `/news/${item.slug}`
  }))

  // Combina e ordina per data (più recenti prima)
  const combined = [...mappedArticles, ...mappedNews].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })

  // Restituisci solo il numero richiesto
  return combined.slice(0, limit)
}
