"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const professionisti = [
  {
    slug: "giuseppe-stefano-biuso",
    nome: "Giuseppe Stefano Biuso",
    titolo: "Psicologo, Counsellor, Psicoterapeuta",
    specializzazione: "Specialista in Psicologia Clinica",
    citta: "Roma",
    immagine: "/psychologist-portrait.png",
    ruolo: "Responsabile Rete Counselling CMT",
  },
  {
    slug: "maria-rossi",
    nome: "Maria Rossi",
    titolo: "Psicologa, Psicoterapeuta",
    specializzazione: "Specialista in Psicoterapia Cognitiva",
    citta: "Milano",
    immagine: "/female-psychologist-portrait.png",
    ruolo: "Membro CMT Italian Group",
  },
  {
    slug: "luca-bianchi",
    nome: "Luca Bianchi",
    titolo: "Psicologo, Psicoterapeuta",
    specializzazione: "Specialista in Psicologia Clinica",
    citta: "Roma",
    immagine: "/male-psychologist-portrait.png",
    ruolo: "Membro CMT Italian Group",
  },
  {
    slug: "anna-ferrari",
    nome: "Anna Ferrari",
    titolo: "Psicologa, Counsellor",
    specializzazione: "Specialista in Psicologia del Lavoro",
    citta: "Milano",
    immagine: "/professional-female-therapist.png",
    ruolo: "Membro CMT Italian Group",
  },
  {
    slug: "marco-colombo",
    nome: "Marco Colombo",
    titolo: "Psicologo, Psicoterapeuta",
    specializzazione: "Specialista in Psicoterapia Breve",
    citta: "Torino",
    immagine: "/male-therapist-portrait-professional.jpg",
    ruolo: "Membro CMT Italian Group",
  },
  {
    slug: "elena-greco",
    nome: "Elena Greco",
    titolo: "Psicologa, Psicoterapeuta",
    specializzazione: "Specialista in Psicologia Dinamica",
    citta: "Bologna",
    immagine: "/female-psychotherapist-portrait.jpg",
    ruolo: "Membro CMT Italian Group",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ProfessionistiClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">I Nostri Professionisti</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                La rete Psicoterapia Breve Counselling CMT è composta da professionisti psicologi e psicoterapeuti con
                esperienza nell'intervento psicologico breve, appartenenti al Control Mastery Theory Italian Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Professionisti Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {professionisti.map((professionista) => (
                <motion.div key={professionista.slug} variants={itemVariants}>
                  <Link href={`/professionisti/${professionista.slug}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={professionista.immagine}
                          alt={professionista.nome}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {professionista.nome}
                        </h3>
                        <p className="text-muted-foreground mb-2">{professionista.titolo}</p>
                        <p className="text-sm text-muted-foreground mb-4">{professionista.specializzazione}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{professionista.citta}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <Award className="h-4 w-4" />
                          <span>{professionista.ruolo}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-balance">Trova il Professionista Giusto per Te</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                I nostri professionisti operano a Roma, Milano e altre città italiane, presso i loro studi privati o
                attraverso videoconsulenze online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <Link href="/contatti">Prenota un Consulto</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild>
                    <a href="mailto:counselling@cmt-ig.org">
                      <Mail className="mr-2 h-4 w-4" />
                      Contattaci via Email
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
