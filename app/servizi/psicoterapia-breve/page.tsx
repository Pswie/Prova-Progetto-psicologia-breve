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
  Brain,
  Users,
  Target,
  TrendingUp,
  Mail,
  Phone,
  BookOpen,
  Lightbulb,
  Heart,
  Award,
  FileText,
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

export default function PsicoterapiaBreve() {
  const caratteristiche = [
    {
      icon: Calendar,
      title: "25 Sedute Settimanali",
      description: "Un percorso strutturato di 6 mesi con sedute a cadenza settimanale",
    },
    {
      icon: Clock,
      title: "Valutazione Iniziale",
      description: "2 incontri di valutazione e restituzione psicodiagnostica",
    },
    {
      icon: TrendingUp,
      title: "Follow-up Incluso",
      description: "1 seduta di follow-up dopo 3 mesi dalla fine della terapia",
    },
    {
      icon: Euro,
      title: "Costi Accessibili",
      description: "Tariffe del professionista o 50€/seduta per progetto ricerca",
    },
  ]

  const obiettivi = [
    {
      icon: Target,
      title: "Obiettivi Clinici",
      description:
        "Rispondere all'esigenza di ricevere un aiuto psicoterapeutico efficace in tempi brevi, abbattendo le riluttanze a chiedere aiuto psicologico",
    },
    {
      icon: BookOpen,
      title: "Obiettivi Empirici",
      description:
        "Raccogliere e pubblicare dati a sostegno dell'efficacia della terapia breve CMT e far luce sui fattori terapeutici",
    },
    {
      icon: Users,
      title: "Obiettivi Formativi",
      description:
        "Formare psicoterapeuti di diverso orientamento che operano in contesti privati e pubblici con percorsi a durata definita",
    },
  ]

  const processo = [
    {
      step: "1",
      title: "Valutazione Iniziale",
      description:
        "Due incontri dedicati alla valutazione clinica e psicodiagnostica per comprendere i motivi della richiesta, gli obiettivi desiderati e verificare l'idoneità del percorso breve",
      icon: FileText,
    },
    {
      step: "2",
      title: "Percorso Terapeutico",
      description:
        "25 sedute settimanali in cui terapeuta e paziente lavorano insieme per comprendere e superare le credenze patogene, identificare i trigger e sviluppare strategie più adattive",
      icon: Brain,
    },
    {
      step: "3",
      title: "Follow-up",
      description:
        "Un incontro dopo 3 mesi dalla fine della terapia per valutare il mantenimento degli obiettivi raggiunti e il benessere generale",
      icon: TrendingUp,
    },
  ]

  const risultatiAttesi = [
    "Consapevolezza del proprio funzionamento psicologico",
    "Comprensione delle credenze patogene e delle loro origini",
    "Identificazione dei trigger e degli schemi disfunzionali",
    "Sviluppo di strategie nuove e più adattive",
    "Mantenimento dei progressi raggiunti nel tempo",
    "Maggiore benessere nelle relazioni interpersonali",
  ]

  const vantaggi = [
    {
      icon: Heart,
      title: "Terapia su Misura",
      description:
        "A differenza di molte psicoterapie brevi, la CMT è personalizzata per il paziente, con strumenti e tecniche adatte alla sua unicità",
    },
    {
      icon: Lightbulb,
      title: "Comprensione Profonda",
      description:
        "Focus sul legame tra esperienze passate e presenti, comprendendo come il passato filtra e plasma il presente",
    },
    {
      icon: Award,
      title: "Validazione Empirica",
      description:
        "Modello teorico validato scientificamente con dati a sostegno della sua efficacia nel trattamento breve",
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
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">Psicoterapia Breve</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Il Servizio di <span className="text-primary">Psicoterapia Breve CMT</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Un percorso di 6 mesi basato sulla Control Mastery Theory per raggiungere obiettivi terapeutici concreti e
              mantenere i progressi nel tempo
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />6 Mesi
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                25 Sedute + Follow-up
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Validata Empiricamente
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
            <Card className="p-8 border-l-4 border-l-primary overflow-hidden">
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
                  Il gruppo di <strong>psicoterapia breve in ottica Control-Mastery Theory (CMT)</strong> nasce nel 2020
                  da un'idea di <strong>Federica Genova</strong> e dalla preziosa adesione al progetto di alcuni soci
                  del <strong>Control-Mastery Theory Italian Group (CMT-IG)</strong> con l'obiettivo di adattare la
                  teoria e la tecnica psicoterapeutica della CMT a un percorso di psicoterapia breve.
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Il progetto ha scopi di ordine <strong>clinico, empirico e formativo</strong>, mirando a promuovere
                  una cultura che assegni un rilievo di primo piano alla salute mentale.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Obiettivi */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Gli Obiettivi del Progetto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Un approccio integrato che unisce clinica, ricerca e formazione
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {obiettivi.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full overflow-hidden">
                      <CardContent className="space-y-4">
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
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

      {/* Caratteristiche */}
      <section className="py-16">
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
              Un percorso strutturato di 6 mesi con valutazione iniziale e follow-up
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
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full text-center overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Il Percorso Terapeutico</h2>
            <p className="text-lg text-muted-foreground text-balance">Tre fasi per il tuo benessere psicologico</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processo.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.step}
                        </motion.div>
                        <motion.div
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="h-5 w-5 text-primary" />
                        </motion.div>
                      </div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Perché Scegliere la CMT Breve</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Un approccio unico che mette al centro la tua unicità
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {vantaggi.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full overflow-hidden">
                      <CardContent className="space-y-4 text-center">
                        <motion.div
                          className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="h-6 w-6 text-secondary" />
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

      {/* Risultati Attesi */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Cosa Aspettarsi</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Al termine di una psicoterapia breve CMT di successo
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {risultatiAttesi.map((risultato, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--muted))" }}
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{risultato}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Costi e Progetto Ricerca */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-6 h-full border-l-4 border-l-primary overflow-hidden">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Euro className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">Costi del Servizio</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Il costo a seduta dipende dalle <strong>tariffe del professionista di riferimento</strong>, che
                    variano in base all'esperienza e alla sede.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6 h-full border-l-4 border-l-secondary overflow-hidden">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <BookOpen className="h-5 w-5 text-secondary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">Progetto di Ricerca</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In caso di partecipazione al <strong>progetto di ricerca</strong> (volontaria e anonima), è prevista
                    una tariffa calmierata di <strong>50 euro a seduta</strong>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 bg-muted/30 overflow-hidden">
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Il Progetto di Ricerca</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Il progetto a puro scopo scientifico mira a <strong>validare empiricamente l'efficacia</strong>{" "}
                      della psicoterapia breve condotta in ottica CMT e a far luce su alcune dimensioni del processo
                      terapeutico. La partecipazione è completamente volontaria e protetta dall'anonimato.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 overflow-hidden">
              <CardContent className="text-center space-y-6">
                <Target className="h-12 w-12 text-primary mx-auto" />
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Pronto a Iniziare?</h2>
                <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
                  Per maggiori informazioni e richiedere un appuntamento per la Psicoterapia Breve, contattaci
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <motion.a
                    href="mailto:psicoterapiabreve.cmt@outlook.it"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="text-lg px-8 group">
                      <Mail className="mr-2 h-5 w-5" />
                      psicoterapiabreve.cmt@outlook.it
                    </Button>
                  </motion.a>
                  
                  <motion.a
                    href="tel:3292125385"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="text-lg px-8 group">
                      <Phone className="mr-2 h-5 w-5" />
                      329 212 5385
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

