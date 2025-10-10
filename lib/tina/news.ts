import fs from "fs"
import path from "path"
import matter from "gray-matter"

const newsDirectory = path.join(process.cwd(), "content/news")

export interface NewsItem {
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

function assertServerSide() {
  if (typeof window !== "undefined") {
    console.warn("News helpers can only run on the server")
    return false
  }
  return true
}

function directoryExists(directoryPath: string) {
  return fs.existsSync(directoryPath)
}

export function getAllNews(): NewsItem[] {
  if (!assertServerSide()) {
    return []
  }

  if (!directoryExists(newsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(newsDirectory)
  const allNews = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      return getNewsBySlug(slug)
    })
    .filter((item): item is NewsItem => item !== null && item.published)

  return allNews.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getNewsBySlug(slug: string): NewsItem | null {
  if (!assertServerSide()) {
    return null
  }

  const fullPath = path.join(newsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")
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
    console.error(`Error reading news item ${slug}:`, error)
    return null
  }
}

export function getNewsByCategory(category: string): NewsItem[] {
  const allNews = getAllNews()

  if (category === "Tutti" || !category) {
    return allNews
  }

  return allNews.filter((item) => item.category === category)
}

export function getNewsCategories(): string[] {
  const allNews = getAllNews()
  const categories = allNews.map((item) => item.category).filter(Boolean)
  const uniqueCategories = Array.from(new Set(categories))

  return ["Tutti", ...uniqueCategories]
}
