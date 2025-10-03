"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Euro,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Users,
  Target,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

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
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
}

export default function CounsellingPage() {
  const caratteristiche = [
    {
      icon: Calendar,
      title: "4 Incontri Settimanali",
      description: "Quattro sessioni di consulenza psicologica a cadenza settimanale",
    },
    {
      icon: Clock,
      title: "50 Minuti per Sessione",
      description: "Ogni colloquio ha una durata di circa 50 minuti",
    },
    {
      icon: TrendingUp,
      title: "Follow-up Incluso",
      description: "Un incontro di follow-up dopo tre mesi dal termine del percorso",
    },
    {
      icon: Euro,
      title: "Costo Fisso",
      description: "250 euro totali per tutti i 5 incontri (4 + follow-up)",
    },
  ]

  const benefici = [
    "Intervento psicologico breve e mirato",
    "Basato sulla Control Mastery Theory validata",
    "Consulenti esperti del CMT-IG",
    "Costo accessibile e trasparente",
    "Follow-up per monitorare i progressi",
    "Disponibile in presenza e online",
  ]

  const processo = [
    {
      step: "1",
      title: "Primo Contatto",
      description: "Contattaci via email o telefono per richiedere un appuntamento",
    },
    {
      step: "2",
      title: "4 Incontri Settimanali",
      description: "Quattro sessioni di consulenza psicologica con un consulente esperto CMT",
    },
    {
      step: "3",
      title: "Follow-up",
      description: "Dopo tre mesi, un incontro per verificare i progressi e consolidare i risultati",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Counselling Psicologico</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Il Servizio di <span className="text-primary">Counselling CMT</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Un percorso breve e mirato per affrontare le tue difficoltà con il supporto di consulenti esperti in
              Control Mastery Theory
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />4 Incontri + Follow-up
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Euro className="h-4 w-4 mr-2" />
                250€ Totali
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                50 Minuti
              </Badge>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storia Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-l-4 border-l-primary">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold">La Nascita del Progetto</h2>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  La rete <strong>CounsellingCMT</strong> nasce nel 2018 da un'idea di{" "}
                  <strong>Giuseppe Stefano Biuso</strong> e dalla preziosa adesione al progetto di alcuni soci del{" "}
                  <strong>Control-Mastery Theory Italian Group (CMT-IG)</strong> con l'obiettivo di adattare la teoria e
                  la tecnica psicoterapeutica della CMT a un percorso di counselling psicologico.
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Il servizio mette a disposizione di chi ne fa richiesta un <strong>consulente esperto</strong> con cui
                  poter parlare delle proprie difficoltà in un contesto professionale, accogliente e basato su un
                  modello teorico validato empiricamente.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Come Funziona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Un percorso strutturato e accessibile per il tuo benessere psicologico
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {caratteristiche.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full text-center">
                      <CardContent className="space-y-4">
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="h-6 w-6 text-primary" />
                        </motion.div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefici */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Perché Scegliere il Counselling CMT</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Un servizio professionale, accessibile e basato su evidenze scientifiche
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {benefici.map((beneficio, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--muted))" }}
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{beneficio}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Il Percorso</h2>
            <p className="text-lg text-muted-foreground text-balance">Tre semplici passi per iniziare</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processo.map((item, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <motion.div
                  className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="text-center space-y-6">
                <Target className="h-12 w-12 text-primary mx-auto" />
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Pronto a Iniziare?</h2>
                <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
                  Per maggiori informazioni e richiedere un appuntamento, contattaci via email o telefono
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <motion.a
                    href="mailto:counselling@cmt-ig.org"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="text-lg px-8 group">
                      <Mail className="mr-2 h-5 w-5" />
                      counselling@cmt-ig.org
                    </Button>
                  </motion.a>

                  <motion.a href="tel:3405744646" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" className="text-lg px-8 group bg-transparent">
                      <Phone className="mr-2 h-5 w-5" />
                      340 574 4646
                    </Button>
                  </motion.a>
                </div>

                <div className="pt-6">
                  <Link href="/servizi">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                      <Button variant="ghost" className="group">
                        <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Torna ai Servizi
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
