"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Clock, ArrowRight, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export type NewsSummary = {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  coverImage: string
}

interface NewsClientPageProps {
  categories: string[]
  newsItems: NewsSummary[]
}

export default function NewsClientPage({ categories, newsItems }: NewsClientPageProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] ?? "Tutti")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNews = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return newsItems.filter((item) => {
      const matchesCategory = selectedCategory === "Tutti" || item.category === selectedCategory
      const matchesSearch =
        normalizedSearch.length === 0 ||
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.excerpt.toLowerCase().includes(normalizedSearch) ||
        item.author.toLowerCase().includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [newsItems, searchTerm, selectedCategory])

  const [featuredNews, ...otherNewsItems] = filteredNews

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              News e Aggiornamenti
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Rimani aggiornato su eventi, iniziative e novità del CMT Italian Group e del mondo della psicoterapia breve
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.length <= 6 ? (
              categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))
            ) : (
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="border bg-background rounded-full px-4 py-2 text-sm"
                aria-label="Seleziona categoria"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Cerca per titolo, autore o parole chiave"
                className="pl-12 h-12 rounded-full"
                aria-label="Cerca news"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {featuredNews ? (
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href={`/news/${featuredNews.slug}`}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <Image
                        src={featuredNews.coverImage || "/placeholder.svg"}
                        alt={featuredNews.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          In evidenza
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredNews.date).toLocaleDateString("it-IT", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredNews.readTime}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {featuredNews.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 text-balance">{featuredNews.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <User className="w-4 h-4" />
                          <span>{featuredNews.author}</span>
                        </div>
                        <Button variant="ghost" className="group/btn">
                          Leggi di più
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center text-muted-foreground">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              Nessuna news trovata. Prova a modificare i filtri o la ricerca.
            </motion.p>
          </div>
        </section>
      )}

      {otherNewsItems.length > 0 && (
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherNewsItems.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Link href={`/news/${item.slug}`}>
                    <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.coverImage || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(item.date).toLocaleDateString("it-IT", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow text-balance">{item.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <User className="w-3 h-3" />
                            <span>{item.author}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
