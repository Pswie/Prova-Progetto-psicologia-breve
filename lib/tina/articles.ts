import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articoli')

export interface Article {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  coverImage: string
  author: string
  readTime: string
  tags: string[]
  published: boolean
  content: string
}

// Funzioni che funzionano solo sul server (con fs)
export function getAllArticles(): Article[] {
  // Verifica se siamo sul server
  if (typeof window !== 'undefined') {
    console.warn('getAllArticles può essere chiamata solo sul server')
    return []
  }

  // Verifica se la directory esiste
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      return getArticleBySlug(slug)
    })
  .filter(article => article !== null && article.published) as Article[]

  // Ordina gli articoli per data (più recenti prima)
  return allArticles.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getArticleBySlug(slug: string): Article | null {
  // Verifica se siamo sul server
  if (typeof window !== 'undefined') {
    console.warn('getArticleBySlug può essere chiamata solo sul server')
    return null
  }

  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? new Date().toISOString(),
      excerpt: data.excerpt ?? "",
      category: data.category ?? "",
      coverImage: data.coverImage ?? data.featuredImage ?? "",
      author: data.author ?? "",
      readTime: data.readTime ?? "",
      tags: data.tags ?? [],
      published: data.published ?? true,
      content,
    }
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export function getArticlesByCategory(category: string): Article[] {
  const allArticles = getAllArticles()
  
  if (category === 'Tutti' || !category) {
    return allArticles
  }
  
  return allArticles.filter(article => article.category === category)
}

export function getCategories(): string[] {
  const allArticles = getAllArticles()
  const categories = allArticles.map(article => article.category)
  const uniqueCategories = Array.from(new Set(categories))
  
  return ['Tutti', ...uniqueCategories]
}