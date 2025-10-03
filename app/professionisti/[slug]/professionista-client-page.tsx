"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Award, GraduationCap, Briefcase, Heart } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"
import Script from "next/script"

interface ProfessionistaClientPageProps {
  professionista: any
  personSchema: any
}

export default function ProfessionistaClientPage({ professionista, personSchema }: ProfessionistaClientPageProps) {
  if (!professionista) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Script id="person-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(personSchema)}
      </Script>
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Button variant="ghost" asChild>
              <Link href="/professionisti">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Torna ai Professionisti
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3" />
                  <img
                    src={professionista.immagine || "/placeholder.svg"}
                    alt={professionista.nome}
                    className="relative rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-medium">{professionista.ruolo}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{professionista.nome}</h1>
                <p className="text-xl text-muted-foreground mb-4">{professionista.titolo}</p>
                <p className="text-lg text-muted-foreground mb-6">{professionista.specializzazione}</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{professionista.citta}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href={`mailto:${professionista.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {professionista.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href={`tel:${professionista.telefono.replace(/\s/g, "")}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {professionista.telefono}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" asChild>
                      <Link href="/contatti">Prenota un Consulto</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" asChild>
                      <a href={`mailto:${professionista.email}`}>Invia Email</a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                Chi Sono
              </h2>
              <div className="prose prose-lg max-w-none">
                {professionista.bio.split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Formazione Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                Formazione
              </h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {professionista.formazione.map((item: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Esperienza Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                Esperienza Professionale
              </h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {professionista.esperienza.map((item: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Aree di Specializzazione */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                Aree di Specializzazione
              </h2>
              <div className="flex flex-wrap gap-3">
                {professionista.areeSpecializzazione.map((area: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">{area}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-balance">
                Prenota un Consulto con {professionista.nome.split(" ")[0]}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Disponibile per consulenze in studio a {professionista.citta} e online
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <Link href="/contatti">Prenota Ora</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild>
                    <a href={`tel:${professionista.telefono.replace(/\s/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Chiama Ora
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
