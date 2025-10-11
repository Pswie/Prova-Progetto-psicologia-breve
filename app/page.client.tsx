"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, Users, Clock, CheckCircle, ArrowRight, MapPin, Video, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import CMTDynamicSection from "@/components/cmt-dynamic-section"
import type { CombinedContent } from "@/lib/tina/combined-content"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 },
}

interface HomePageClientProps {
  latestContent: CombinedContent[]
}

export default function HomePageClient({ latestContent }: HomePageClientProps) {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Psicoterapia Breve e Counselling <span className="text-primary">CMT</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground text-balance mb-4 leading-relaxed italic"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              "La principale motivazione di un individuo è l'adattamento alla realtà, soprattutto alla realtà del suo
              mondo interpersonale"
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Un servizio di counselling psicologico e psicoterapia breve a costi accessibili, fondato sulla Control
              Mastery Theory, un modello teorico validato empiricamente.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contatti">
                  <Button size="lg" className="text-lg px-8">
                    Richiedi un Appuntamento
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#chi-siamo">
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Chi Siamo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


            {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Perché Scegliere la Control Mastery Theory
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Un modello teorico scientificamente validato che si concentra sull'adattamento alla realtà interpersonale
              e sul superamento delle convinzioni patogene.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full overflow-hidden">
                  <CardContent className="space-y-3 sm:space-y-4">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Brain className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">Validato Empiricamente</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      La Control Mastery Theory è un modello teorico supportato da ricerche scientifiche e validazione
                      empirica.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full overflow-hidden">
                  <CardContent className="space-y-3 sm:space-y-4">
                    <motion.div
                      className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Clock className="h-6 w-6 text-secondary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">Interventi Brevi</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Specializzati in interventi psicologici brevi con focus su risultati concreti in tempi definiti.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full overflow-hidden">
                  <CardContent className="space-y-3 sm:space-y-4">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Heart className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">Costi Accessibili</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Servizi di qualità a costi accessibili per rendere la psicoterapia alla portata di tutti.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full overflow-hidden">
                  <CardContent className="space-y-3 sm:space-y-4">
                    <motion.div
                      className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Users className="h-6 w-6 text-secondary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">Professionisti Esperti</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Rete di psicologi e psicoterapeuti esperti appartenenti al Control Mastery Theory Italian Group.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="chi-siamo" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Location and Online Services */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full overflow-hidden">
                  <CardContent className="space-y-4 min-w-0">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">Studi in Tutta Italia</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed break-words">
                      I nostri professionisti operano a Roma, Milano e altre città italiane presso i loro studi privati.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full overflow-hidden">
                  <CardContent className="space-y-4 min-w-0">
                    <motion.div
                      className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Video className="h-6 w-6 text-secondary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">Videoconsulenze Online</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed break-words">
                      Offriamo anche la possibilità di effettuare sedute online, comodamente da casa tua.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Dynamic CMT Section */}
      <CMTDynamicSection />

      {/* Services Preview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">I Nostri Servizi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              La rete Psicoterapia Breve e Counselling CMT mette a disposizione di chi ne fa richiesta un terapeuta
              esperto con cui poter parlare delle proprie difficoltà.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Card className="p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow h-full overflow-hidden">
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-semibold">Psicoterapia Breve</h3>
                      <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        6 mesi
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Un ciclo di psicoterapia breve della durata di sei mesi, guidato dal modello della Control Mastery
                      Theory, per affrontare difficoltà psicologiche con un approccio strutturato e validato.
                    </p>
                    <div className="space-y-2">
                      <motion.div
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Percorso strutturato di 6 mesi</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Basato sulla Control Mastery Theory</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Costi accessibili</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Card className="p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow h-full overflow-hidden">
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-semibold">Counselling Psicologico</h3>
                      <span className="text-sm font-medium bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                        1 mese
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Un ciclo di counselling della durata di un mese per supporto psicologico mirato, ideale per
                      affrontare situazioni specifiche o momenti di difficoltà temporanea.
                    </p>
                    <div className="space-y-2">
                      <motion.div
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Intervento breve di 1 mese</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Supporto mirato e focalizzato</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Accessibile a tutti</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/servizi">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="group bg-transparent">
                  Scopri Tutti i Servizi
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articoli e News Section */}
      {latestContent && latestContent.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Articoli e News</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scopri gli ultimi approfondimenti sulla Control Mastery Theory e le novità della nostra rete
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {latestContent.map((item) => (
                <motion.div key={item.slug} variants={fadeInUp}>
                  <Link href={item.url} className="block group h-full">
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      {item.coverImage && (
                        <div className="relative w-full h-48 overflow-hidden bg-muted">
                          <Image
                            src={item.coverImage}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant={item.type === 'news' ? 'default' : 'secondary'} className="shadow-md">
                              {item.type === 'news' ? (
                                <>
                                  <Calendar className="w-3 h-3 mr-1" />
                                  News
                                </>
                              ) : (
                                <>
                                  <BookOpen className="w-3 h-3 mr-1" />
                                  Articolo
                                </>
                              )}
                            </Badge>
                          </div>
                        </div>
                      )}

                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          {item.category && <span className="font-medium">{item.category}</span>}
                          {item.readTime && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {item.readTime}
                              </span>
                            </>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold break-words mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                          <span>{item.author}</span>
                          <span>
                            {new Date(item.date).toLocaleDateString('it-IT', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all">
                          <span className="text-sm">Leggi di più</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/articoli">
                <Button variant="outline" size="lg" className="gap-2">
                  Vedi Tutti gli Articoli
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-balance mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Inizia il Tuo Percorso di Benessere
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Per maggiori informazioni e richiedere un appuntamento, contattaci via email o telefono. I nostri
            professionisti sono pronti ad aiutarti.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contatti">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8">
                  Richiedi un Appuntamento
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <a href="mailto:counselling@cmt-ig.org">Scrivici via Email</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.p
            className="text-sm text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Email:{" "}
            <a href="mailto:counselling@cmt-ig.org" className="text-primary hover:underline">
              counselling@cmt-ig.org
            </a>{" "}
            | Telefono:{" "}
            <a href="tel:3405744646" className="text-primary hover:underline">
              340 574 4646
            </a>
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  )
}




