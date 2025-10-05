"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Brain,
  Users,
  Heart,
  Target,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle,
  BookOpen,
  Clock,
  AlertCircle,
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

export default function CounsellingUniversitarioPage() {
  const difficolta = [
    {
      icon: AlertCircle,
      title: "Ansia da Esame",
      description: "Gestione dell'ansia prima e durante gli esami, superamento del blocco da prestazione",
    },
    {
      icon: Brain,
      title: "Difficoltà di Concentrazione",
      description: "Pensieri angosciati, noia estenuante, perdita di focus nello studio",
    },
    {
      icon: Target,
      title: "Blocco all'Ultimo Esame",
      description: "Difficoltà nel sostenere l'ultimo esame o completare la tesi di laurea",
    },
    {
      icon: Heart,
      title: "Demoralizzazione",
      description: "Perdita di motivazione, dubbi sulla scelta della facoltà, crisi di identità",
    },
    {
      icon: Users,
      title: "Adattamento Sociale",
      description: "Difficoltà nel rapportarsi con gli altri, solitudine, senso di inadeguatezza",
    },
    {
      icon: BookOpen,
      title: "Vita Lontano da Casa",
      description: "Adattamento a un nuovo ambiente, gestione dell'autonomia, nostalgia di casa",
    },
  ]

  const benefici = [
    "Supporto specializzato per problematiche universitarie",
    "Psicoterapeuti esperti delle difficoltà degli studenti",
    "Quattro incontri mirati e strutturati",
    "Tariffe agevolate per studenti universitari",
    "Approccio basato sulla Control Mastery Theory",
    "Disponibile per tutte le università di Roma",
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
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm font-medium">Per Studenti Universitari</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary">Counselling Psicologico</span> Universitario
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Un servizio dedicato agli studenti universitari per affrontare le sfide dell'università con il supporto di
              psicoterapeuti esperti
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <GraduationCap className="h-4 w-4 mr-2" />
                Studenti Universitari Roma
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />4 Incontri
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Tariffe Agevolate
              </Badge>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Descrizione Principale */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-10 border-l-4 border-l-primary shadow-lg">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold">Il Percorso Universitario</h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    L'università immerge gli studenti in un mondo nuovo fatto di sogni, ambizioni, potenzialità e
                    sfide, un mondo affascinante e denso di stimoli, ma che richiede molto. Le pressioni che
                    l'università porta con sé ci spingono a confrontarci con le nostre capacità e aspirazioni, i nostri
                    obiettivi e le nostre credenze patogene inconsce, e amplificano le emozioni, positive e negative,
                    che accompagnano i tanti cambiamenti, dentro di noi e intorno a noi, che si susseguono nel corso
                    degli anni. L'ansia ci accompagna nella preparazione e nel sostenimento di ogni esame e la gioia ci
                    rallegra dopo prove portate a conclusione con successo.
                  </p>

                  <p>
                    Non è sempre facile mantenere l'equilibrio tra questa altalena di emozioni, compiti, richieste e
                    aspettative. A volte un esame può diventare un muro invalicabile, la concentrazione si perde in
                    pensieri angosciati o in una noia estenuante, oppure la facoltà che avevamo scelto non siamo sicuri
                    ci piaccia più. Altre volte l'ansia da prestazione o la demoralizzazione diventano qualcosa di
                    insostenibile. A volte, invece, ci blocchiamo a due passi dalla fine: l'ultimo esame o la tesi
                    possono costituire uno scoglio denso di paure.
                  </p>

                  <p>
                    Non è sempre facile inoltre adattarsi a un nuovo ambiente o magari a una nuova vita lontano dalla
                    famiglia. Oppure possiamo avere difficoltà nel rapportarci con gli altri o ci sentiamo soli,
                    inadeguati.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Difficoltà Affrontate */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Quando Può Aiutarti</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Il counselling universitario è pensato per affrontare le sfide tipiche della vita studentesca
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {difficolta.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
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

      {/* Il Servizio */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Target className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold">Il Servizio</h2>
                </div>

                <div className="bg-background/60 backdrop-blur rounded-lg p-6 border-l-4 border-primary">
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    Il <strong>Counselling Psicologico Universitario</strong> è un servizio rivolto a tutti gli
                    studenti di <strong>Sapienza, Roma Tre, Tor Vergata</strong> e di tutte le università, pubbliche e
                    private, di Roma. Offre un ciclo di <strong>quattro incontri</strong> a tariffe agevolate con
                    psicoterapeuti esperti delle problematiche degli studenti universitari.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {benefici.map((beneficio, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-background/60 backdrop-blur rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{beneficio}</span>
                    </motion.div>
                  ))}
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
            <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-xl">
              <CardContent className="text-center space-y-6">
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="h-8 w-8 text-primary" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Prenota il Tuo Appuntamento
                </h2>
                <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
                  Per prenotare il tuo appuntamento o richiedere informazioni, contattaci via email o telefono
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <motion.a
                    href="mailto:counselling@cmt-ig.org"
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="text-lg px-8 w-full sm:w-auto group">
                      <Mail className="mr-2 h-5 w-5" />
                      counselling@cmt-ig.org
                    </Button>
                  </motion.a>

                  <motion.a
                    href="tel:3405744646"
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="text-lg px-8 w-full sm:w-auto group bg-transparent">
                      <Phone className="mr-2 h-5 w-5" />
                      340 574 4646
                    </Button>
                  </motion.a>
                </div>

                <div className="pt-8 border-t">
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
