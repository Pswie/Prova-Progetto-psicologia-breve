"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Interfaccia per gli articoli
interface Article {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  featuredImage: string
  author: string
  tags: string[]
  published: boolean
  content: string
}

interface ArticlesClientProps {
  articles: Article[]
  categories: string[]
}

// Funzione per calcolare il tempo di lettura stimato
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min`
}

// Mappa degli autori per visualizzare nomi più leggibili
const authorMap: { [key: string]: string } = {
  "dott-rossi": "Dott. Mario Rossi",
  "dott-ssa-bianchi": "Dott.ssa Laura Bianchi",
}

// Mappa delle categorie per visualizzare nomi più leggibili
const categoryMap: { [key: string]: string } = {
  "psicoterapia": "Psicoterapia",
  "counselling": "Counselling", 
  "crescita-personale": "Crescita Personale",
  "relazioni": "Relazioni",
  "benessere": "Benessere",
}

export default function ArticlesClient({ articles, categories }: ArticlesClientProps) {
  // State per ricerca e filtri
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filtriamo gli articoli in base alla ricerca e categoria selezionata
  const filteredArticles = useMemo(() => {
    let filtered = articles

    // Filtro per categoria
    if (selectedCategory) {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    // Filtro per ricerca
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    return filtered
  }, [articles, selectedCategory, searchTerm])

  if (articles.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Al momento non ci sono articoli pubblicati. Torna presto per nuovi contenuti!
        </p>
        <Button asChild>
          <Link href="/">Torna alla Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Cerca articoli..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchTerm("")}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          className="rounded-full"
          onClick={() => setSelectedCategory(null)}
        >
          Tutti
        </Button>
        {categories.map((category: string) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setSelectedCategory(category)}
          >
            {categoryMap[category] || category}
          </Button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-center mb-8">
        <p className="text-muted-foreground">
          {filteredArticles.length === articles.length
            ? `${filteredArticles.length} articoli`
            : `${filteredArticles.length} di ${articles.length} articoli`}
        </p>
      </div>

      {/* No results message */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            Nessun articolo trovato per la ricerca "{searchTerm}"
            {selectedCategory && ` nella categoria "${categoryMap[selectedCategory] || selectedCategory}"`}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory(null)
            }}
          >
            Cancella filtri
          </Button>
        </div>
      ) : (
        <>
          {/* Featured Article */}
          <section className="pb-16">
            <div>
              <Link href={`/articoli/${filteredArticles[0].slug}`}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={filteredArticles[0].featuredImage || "/placeholder.svg"}
                        alt={filteredArticles[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          In Evidenza
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(filteredArticles[0].date).toLocaleDateString("it-IT", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>
                            {calculateReadTime(filteredArticles[0].content)}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {filteredArticles[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-6 text-balance">{filteredArticles[0].excerpt}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{authorMap[filteredArticles[0].author] || filteredArticles[0].author}</span>
                      </div>
                      <Button variant="ghost" className="group/btn mt-4 w-fit">
                        Leggi di più
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </section>

          {/* More Articles Grid */}
          {filteredArticles.length > 1 && (
            <section className="pb-24">
              <h2 className="text-3xl font-bold text-center mb-12">Altri Articoli</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.slice(1).map((article: Article) => (
                  <div key={article.slug}>
                    <Link href={`/articoli/${article.slug}`}>
                      <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.featuredImage || "/placeholder.svg"}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                              {categoryMap[article.category] || article.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(article.date).toLocaleDateString("it-IT", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{calculateReadTime(article.content)}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex-1">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                            <User className="h-4 w-4" />
                            <span>{authorMap[article.author] || article.author}</span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  )
}