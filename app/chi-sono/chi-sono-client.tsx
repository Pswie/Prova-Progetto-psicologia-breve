"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Video, Award, CheckCircle, Quote, ArrowRight, Globe } from "lucide-react"
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
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 },
}

export default function ChiSiamoClient() {
  const caratteristiche = [
    {
      title: "Professionisti Esperti",
      description:
        "Psicologi e psicoterapeuti con esperienza nell'intervento psicologico breve, appartenenti al Control Mastery Theory Italian Group.",
      icon: Users,
    },
    {
      title: "Presenza Territoriale",
      description: "I professionisti della rete operano a Roma, Milano e Torino presso i loro studi privati.",
      icon: MapPin,
    },
    {
      title: "Videoconsulenze Online",
      description:
        "Possibilità di effettuare sedute online attraverso videoconsulenze, per garantire accessibilità ovunque tu sia.",
      icon: Video,
    },
    {
      title: "Modello Validato",
      description:
        "Il lavoro clinico è guidato dal modello teorico della Control Mastery Theory, validato empiricamente.",
      icon: Award,
    },
  ]

  const valori = [
    {
      title: "Accessibilità",
      description:
        "Servizi di counselling psicologico a costi accessibili per rendere il supporto disponibile a tutti.",
      icon: CheckCircle,
    },
    {
      title: "Evidenza Scientifica",
      description: "Approccio fondato su un modello teorico validato empiricamente dalla ricerca internazionale.",
      icon: Award,
    },
    {
      title: "Specializzazione",
      description:
        "Particolare attenzione alle dinamiche che caratterizzano gli interventi psicologici brevi e la loro efficacia.",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Chi <span className="text-primary">Siamo</span>
            </motion.h1>
            <motion.div
              className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Quote className="h-8 w-8 text-primary mb-4 mx-auto" />
              <p className="text-lg md:text-xl text-foreground font-medium italic text-balance leading-relaxed">
                "La principale motivazione di un individuo è l'adattamento alla realtà, soprattutto alla realtà del suo
                mondo interpersonale"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none leading-relaxed space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p className="text-lg text-muted-foreground" variants={fadeInUp}>
              La rete <strong className="text-foreground">CounsellingCMT</strong> è composta da professionisti psicologi
              e psicoterapeuti con esperienza nell'intervento psicologico breve, appartenenti al{" "}
              <strong className="text-foreground">Control Mastery Theory Italian Group</strong> (
              <a
                href="http://www.cmt-ig.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                http://www.cmt-ig.org/
              </a>
              ).
            </motion.p>

            <motion.p className="text-lg text-muted-foreground" variants={fadeInUp}>
              I professionisti della rete operano a <strong className="text-foreground">Roma, Milano e Torino</strong>{" "}
              presso i loro studi privati, o attraverso{" "}
              <strong className="text-foreground">videoconsulenze online</strong>. Il loro lavoro clinico è guidato dal
              modello teorico della Control Mastery Theory e presta particolare attenzione alla peculiarità delle
              dinamiche che caratterizzano gli interventi psicologici brevi.
            </motion.p>

            <motion.p className="text-lg text-muted-foreground" variants={fadeInUp}>
              La rete CounsellingCMT si pone lo scopo di fornire un{" "}
              <strong className="text-foreground">servizio di counselling psicologico</strong>, a{" "}
              <strong className="text-foreground">costi accessibili</strong>, fondato su un modello teorico{" "}
              <strong className="text-foreground">validato empiricamente</strong>.
            </motion.p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">La Nostra Rete</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Professionisti qualificati al tuo servizio in tutta Italia.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {caratteristiche.map((caratteristica, index) => {
              const IconComponent = caratteristica.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                      <CardContent className="space-y-4">
                        <motion.div
                          className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="h-7 w-7 text-primary" />
                        </motion.div>
                        <h3 className="font-semibold text-xl">{caratteristica.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{caratteristica.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">I Nostri Valori</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Ciò che guida il nostro lavoro e il nostro impegno verso ogni persona.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {valori.map((valore, index) => {
              const IconComponent = valore.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                      <CardContent className="space-y-4">
                        <motion.div
                          className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="h-8 w-8 text-secondary" />
                        </motion.div>
                        <h3 className="font-semibold text-xl">{valore.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{valore.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CMT Italian Group */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Globe className="h-10 w-10 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Control Mastery Theory Italian Group</h2>
            <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed">
              Tutti i professionisti della rete fanno parte del Control Mastery Theory Italian Group, un'organizzazione
              che promuove la ricerca, la formazione e la pratica clinica basata sulla Control Mastery Theory.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <a href="http://www.cmt-ig.org/" target="_blank" rel="noopener noreferrer">
                  Visita il Sito CMT-IG
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
            Scopri i Nostri Professionisti
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conosci il team di psicologi e psicoterapeuti della rete CounsellingCMT e trova il professionista più adatto
            alle tue esigenze.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/professionisti">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 group">
                  Vedi i Professionisti
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
            <Link href="/contatti">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Contattaci
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
