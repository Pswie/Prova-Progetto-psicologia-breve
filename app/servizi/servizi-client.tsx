"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, CheckCircle, Calendar, ArrowRight, Brain, MessageCircle, Video, MapPin, GraduationCap } from "lucide-react"
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

export default function ServiziClientPage() {
  const servizi = [
    {
      title: "Psicoterapia Breve CMT",
      description:
        "Un percorso di psicoterapia breve della durata di sei mesi (25 sedute settimanali + valutazione iniziale + follow-up). Nato nel 2020 da un'idea di Federica Genova, mira a fornire un aiuto efficace in tempi brevi con obiettivi clinici, empirici e formativi.",
      icon: Brain,
      duration: "6 mesi",
      price: "Variabile o 50€/seduta",
      benefits: [
        "25 sedute settimanali + follow-up",
        "Valutazione psicodiagnostica iniziale",
        "Terapia personalizzata su misura",
        "Validata empiricamente",
        "Progetto di ricerca disponibile",
      ],
      color: "primary",
      link: "/servizi/psicoterapia-breve", // aggiunto link alla nuova pagina
    },
    {
      title: "Counselling Psicologico CMT",
      description:
        "Quattro incontri di consulenza psicologica a cadenza settimanale, seguiti da un incontro di follow-up dopo tre mesi. Nato nel 2018 da un'idea di Giuseppe Stefano Biuso, ideale per affrontare difficoltà specifiche in tempi brevi.",
      icon: MessageCircle,
      duration: "1 mese + follow-up",
      price: "€250 totali",
      benefits: [
        "4 incontri settimanali da 50 minuti",
        "1 follow-up dopo 3 mesi",
        "Costo fisso di 250 euro",
        "Consulenti esperti CMT",
        "Intervento mirato e breve",
      ],
      color: "secondary",
      link: "/servizi/counselling",
    },
    {
      title: "Counselling Psicologico Universitario",
      description:
        "Servizio dedicato agli studenti universitari di Roma per affrontare le sfide dell'università: ansia da esame, blocchi nello studio, adattamento, relazioni sociali. Quattro incontri a tariffe agevolate con psicoterapeuti esperti.",
      icon: GraduationCap,
      duration: "4 incontri",
      price: "Tariffa agevolata",
      benefits: [
        "Rivolto a studenti universitari di Roma",
        "Psicoterapeuti esperti in problematiche universitarie",
        "Supporto per ansia da esame e blocchi",
        "Aiuto nell'adattamento universitario",
        "Tariffe agevolate per studenti",
      ],
      color: "primary",
      link: "/servizi/counselling-universitario",
    },
  ]

  const specializzazioni = [
    {
      area: "Adattamento Interpersonale",
      description: "Difficoltà nelle relazioni, problemi di comunicazione, conflitti relazionali",
      icon: Users,
    },
    {
      area: "Credenze Patogene",
      description: "Convinzioni limitanti, schemi disfunzionali, pattern ripetitivi",
      icon: Brain,
    },
    {
      area: "Obiettivi Inconsci",
      description: "Comprensione e superamento di obiettivi inconsci che guidano il comportamento",
      icon: MessageCircle,
    },
    {
      area: "Test del Paziente",
      description: "Riconoscimento e gestione dei test inconsci nelle relazioni terapeutiche",
      icon: CheckCircle,
    },
  ]

  const caratteristiche = [
    {
      icon: Users,
      title: "Rete di Professionisti",
      description: "Psicologi e psicoterapeuti esperti del Control-Mastery Theory Italian Group (CMT-IG)",
    },
    {
      icon: MapPin,
      title: "Sedi Multiple",
      description: "Operativi a Roma, Milano e altre città italiane presso studi privati",
    },
    {
      icon: Video,
      title: "Videoconsulenze Online",
      description: "Possibilità di seguire il percorso terapeutico comodamente da casa",
    },
    {
      icon: CheckCircle,
      title: "Modello Validato",
      description: "Approccio teorico della Control Mastery Theory validato empiricamente",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I Nostri <span className="text-primary">Servizi</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              La rete Psicoterapia Breve e Counselling CMT offre servizi di qualità a costi accessibili, fondati sulla
              Control Mastery Theory validata empiricamente.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {servizi.map((servizio, index) => {
              const IconComponent = servizio.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary h-full">
                      <CardHeader className="pb-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div
                              className={`w-12 h-12 bg-${servizio.color}/10 rounded-lg flex items-center justify-center`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <IconComponent className={`h-6 w-6 text-${servizio.color}`} />
                            </motion.div>
                            <div>
                              <CardTitle className="text-xl mb-2">{servizio.title}</CardTitle>
                              <div className="flex gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {servizio.duration}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {servizio.price}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">{servizio.description}</p>

                        <div className="space-y-3">
                          <h4 className="font-medium text-sm text-foreground">Cosa Include:</h4>
                          <div className="space-y-2">
                            {servizio.benefits.map((benefit, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {servizio.link ? (
                          <Link href={servizio.link}>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button className="w-full group">
                                Scopri di Più
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </motion.div>
                          </Link>
                        ) : (
                          <Link href="/contatti">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button className="w-full group">
                                Richiedi Informazioni
                                <motion.div
                                  className="ml-2"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                >
                                  <Calendar className="h-4 w-4" />
                                </motion.div>
                              </Button>
                            </motion.div>
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Caratteristiche della Rete CMT */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">La Rete CMT</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Professionisti esperti del Control-Mastery Theory Italian Group al tuo servizio
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

      {/* Specializzazioni */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Aree di Intervento</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              La Control Mastery Theory si concentra su aspetti fondamentali del funzionamento psicologico
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {specializzazioni.map((spec, index) => {
              const IconComponent = spec.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent className="h-4 w-4 text-primary" />
                          </motion.div>
                          <h3 className="font-semibold text-lg">{spec.area}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-balance mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Pronto a Iniziare?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contattaci per maggiori informazioni sui nostri servizi di psicoterapia breve e counselling CMT.
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
                <Button size="lg" className="text-lg px-8 group">
                  Contattaci
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
            <Link href="/chi-sono">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Chi Siamo
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
