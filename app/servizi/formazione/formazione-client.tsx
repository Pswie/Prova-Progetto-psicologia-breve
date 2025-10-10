"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Users,
  GraduationCap,
  CheckCircle,
  Clock,
  Video,
  Calendar,
  FileText,
  Award,
  Target,
  Brain,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

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

export default function FormazioneClientPage() {
  const [formData, setFormData] = useState({
    servizio: "",
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    professione: "",
    esperienza: "",
    messaggio: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, servizio: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Qui andrà la logica di invio del form
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({
        servizio: "",
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        professione: "",
        esperienza: "",
        messaggio: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const percorsiFormativi = [
    {
      title: "Formazione in Counselling Psicologico CMT",
      icon: MessageCircle,
      duration: "6-12 mesi",
      modalita: "Mista (online + in presenza)",
      description:
        "Percorso formativo specifico per acquisire competenze nel counselling psicologico breve basato sulla Control Mastery Theory. Include teoria, pratica supervisionata e analisi di casi clinici.",
      moduli: [
        "Fondamenti della Control Mastery Theory",
        "Tecniche di counselling psicologico breve",
        "Valutazione e formulazione del caso",
        "Gestione della relazione terapeutica",
        "Supervisione su casi reali",
        "Role-playing e simulazioni",
      ],
      requisiti: [
        "Laurea in Psicologia o titolo equipollente",
        "Iscrizione all'Albo degli Psicologi",
        "Esperienza clinica pregressa (preferibile)",
      ],
    },
    {
      title: "Formazione in Psicoterapia Breve CMT",
      icon: Brain,
      duration: "12-24 mesi",
      modalita: "Mista (online + in presenza)",
      description:
        "Percorso formativo avanzato per psicoterapeuti che desiderano specializzarsi nell'approccio della psicoterapia breve secondo la Control Mastery Theory. Formazione teorica intensiva e supervisione clinica continua.",
      moduli: [
        "CMT avanzata: teoria e ricerca empirica",
        "Psicoterapia breve: protocolli a 6 mesi",
        "Valutazione psicodiagnostica integrata",
        "Formulazione del piano terapeutico CMT",
        "Test del paziente e tecniche specifiche",
        "Supervisione intensiva su casi complessi",
        "Metodologia di ricerca in psicoterapia",
      ],
      requisiti: [
        "Specializzazione in Psicoterapia riconosciuta",
        "Iscrizione all'Albo degli Psicologi",
        "Almeno 2 anni di esperienza clinica",
      ],
    },
  ]

  const vantaggi = [
    {
      icon: Award,
      title: "Certificazione Riconosciuta",
      description: "Attestato finale rilasciato dalla rete CMT-IG, riconosciuto a livello nazionale",
    },
    {
      icon: Users,
      title: "Docenti Esperti",
      description: "Formatori con esperienza pluriennale nella CMT e nella pratica clinica",
    },
    {
      icon: Target,
      title: "Supervisione Clinica",
      description: "Supervisione continuativa sui casi seguiti durante il percorso formativo",
    },
    {
      icon: Video,
      title: "Modalità Flessibile",
      description: "Formazione mista con lezioni online e workshop in presenza",
    },
    {
      icon: FileText,
      title: "Materiali Didattici",
      description: "Accesso a biblioteca digitale, articoli scientifici e video registrazioni",
    },
    {
      icon: GraduationCap,
      title: "Community Professionale",
      description: "Ingresso nella rete CMT-IG con accesso a eventi, convegni e gruppi di studio",
    },
  ]

  const faq = [
    {
      question: "Quali sono i requisiti di accesso?",
      answer:
        "Per il counselling è richiesta la laurea in Psicologia e l'iscrizione all'Albo. Per la psicoterapia breve è necessaria la specializzazione in Psicoterapia e almeno 2 anni di esperienza clinica.",
    },
    {
      question: "La formazione è riconosciuta?",
      answer:
        "Sì, il percorso formativo rilascia un attestato riconosciuto dalla rete CMT-IG (Control-Mastery Theory Italian Group) e valido per ECM se accreditato.",
    },
    {
      question: "Quali sono i costi?",
      answer:
        "I costi variano in base al percorso scelto e alla durata. Contattaci per ricevere un preventivo dettagliato e informazioni su eventuali rateizzazioni disponibili.",
    },
    {
      question: "Come si svolge la supervisione?",
      answer:
        "La supervisione avviene in piccoli gruppi (max 6 persone) con cadenza quindicinale o mensile, su casi clinici reali seguiti dai partecipanti. Include anche supervisioni individuali.",
    },
    {
      question: "È possibile seguire la formazione a distanza?",
      answer:
        "Sì, la formazione è in modalità mista: le lezioni teoriche possono essere seguite online, mentre i workshop pratici e alcune supervisioni si tengono in presenza nelle sedi della rete.",
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Formazione Professionale CMT</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Formazione in <span className="text-primary">Counselling</span> e{" "}
              <span className="text-primary">Psicoterapia Breve</span> CMT
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Percorsi formativi avanzati per professionisti della salute mentale che desiderano specializzarsi nella
              Control Mastery Theory. Formazione teorica, supervisione clinica e certificazione riconosciuta.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <GraduationCap className="h-4 w-4 mr-2" />
                Certificazione CMT-IG
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Users className="h-4 w-4 mr-2" />
                Supervisione Clinica
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Video className="h-4 w-4 mr-2" />
                Modalità Mista
              </Badge>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Percorsi Formativi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">I Nostri Percorsi Formativi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Scegli il percorso più adatto al tuo livello di esperienza e ai tuoi obiettivi professionali
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {percorsiFormativi.map((percorso, index) => {
              const IconComponent = percorso.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div {...scaleOnHover}>
                    <Card className="p-8 hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary h-full">
                      <CardHeader className="pb-6">
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent className="h-6 w-6 text-primary" />
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-3">{percorso.title}</CardTitle>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {percorso.duration}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {percorso.modalita}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{percorso.description}</p>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Moduli */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            Moduli Formativi:
                          </h4>
                          <div className="space-y-2">
                            {percorso.moduli.map((modulo, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start gap-2 text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{modulo}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Requisiti */}
                        <div className="space-y-3 pt-4 border-t">
                          <h4 className="font-semibold text-sm flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-primary" />
                            Requisiti di Accesso:
                          </h4>
                          <div className="space-y-2">
                            {percorso.requisiti.map((requisito, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                                <span className="text-muted-foreground">{requisito}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Perché Scegliere la Nostra Formazione</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              I vantaggi di formarsi con la rete CMT-IG e diventare parte di una community professionale d'eccellenza
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {vantaggi.map((vantaggio, index) => {
              const IconComponent = vantaggio.icon
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
                        <h3 className="font-semibold text-lg">{vantaggio.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{vantaggio.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>


            {/* Form di Contatto */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Richiedi Informazioni</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Compila il form per ricevere maggiori dettagli sui nostri percorsi formativi e verificare i requisiti di
              accesso
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Selezione Servizio */}
                <div className="space-y-2">
                  <Label htmlFor="servizio">Percorso di Interesse *</Label>
                  <Select value={formData.servizio} onValueChange={handleSelectChange} required>
                    <SelectTrigger id="servizio">
                      <SelectValue placeholder="Seleziona il servizio formativo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="counselling">Formazione in Counselling Psicologico CMT</SelectItem>
                      <SelectItem value="psicoterapia">Formazione in Psicoterapia Breve CMT</SelectItem>
                      <SelectItem value="entrambi">Entrambi i percorsi formativi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Nome e Cognome */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cognome">Cognome *</Label>
                    <Input
                      id="cognome"
                      name="cognome"
                      type="text"
                      value={formData.cognome}
                      onChange={handleInputChange}
                      required
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                {/* Email e Telefono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="tua@email.it"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Telefono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                {/* Professione */}
                <div className="space-y-2">
                  <Label htmlFor="professione">Professione Attuale *</Label>
                  <Input
                    id="professione"
                    name="professione"
                    type="text"
                    value={formData.professione}
                    onChange={handleInputChange}
                    required
                    placeholder="Es. Psicologo, Psicoterapeuta, Laureando in Psicologia..."
                  />
                </div>

                {/* Esperienza */}
                <div className="space-y-2">
                  <Label htmlFor="esperienza">Esperienza Professionale</Label>
                  <Textarea
                    id="esperienza"
                    name="esperienza"
                    value={formData.esperienza}
                    onChange={handleInputChange}
                    placeholder="Descrivi brevemente la tua esperienza nel campo della salute mentale..."
                    rows={3}
                  />
                </div>

                {/* Messaggio */}
                <div className="space-y-2">
                  <Label htmlFor="messaggio">Messaggio</Label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    placeholder="Altre informazioni o domande specifiche sulla formazione..."
                    rows={4}
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                      ✓ Richiesta inviata con successo! Ti contatteremo presto.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                      ✗ Si è verificato un errore. Riprova più tardi.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        Invia Richiesta
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs text-muted-foreground text-center">
                  * Campi obbligatori. I tuoi dati saranno trattati secondo la nostra{" "}
                  <Link href="/privacy" className="underline hover:text-primary">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Domande Frequenti</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Risposte alle domande più comuni sulla formazione CMT
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faq.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed ml-7">{item.answer}</p>
                </Card>
              </motion.div>
            ))}
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
            Inizia il Tuo Percorso Formativo
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Diventa parte della rete di professionisti esperti in Control Mastery Theory e porta la tua pratica clinica
            a un nuovo livello.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/servizi">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Vedi Tutti i Servizi
                </Button>
              </motion.div>
            </Link>
            <Link href="/chi-sono">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 group">
                  Scopri Chi Siamo
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

      <Footer />
    </div>
  )
}
