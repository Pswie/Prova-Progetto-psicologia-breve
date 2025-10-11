import type { Metadata } from "next"
import { generateMetadata as genMeta, siteConfig } from "@/lib/seo-config"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Calendar, MessageCircle, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Contatti",
  description:
    "Contatta la rete Psicoterapia Breve e Counselling CMT. Counselling: 340 574 4646, counselling@cmt-ig.org | Psicoterapia: 329 212 5385, psicoterapiabreve.cmt@outlook.it",
  keywords: ["contatti", "prenotazione", "appuntamento", "email", "telefono", "counselling", "psicoterapia"],
  path: "/contatti",
})

export default function ContattiPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contatti - Psicoterapia Breve e Counselling CMT",
    description: "Contatta la rete per prenotare un appuntamento o richiedere informazioni",
    url: `${siteConfig.url}/contatti`,
    mainEntity: {
      "@type": "MedicalOrganization",
      name: siteConfig.name,
      email: siteConfig.links.email,
      telephone: siteConfig.links.phone,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.links.phone,
        contactType: "customer service",
        areaServed: "IT",
        availableLanguage: "Italian",
      },
    },
  }

  const infoContatti = [
    {
      icon: Phone,
      title: "Counselling",
      value: "340 574 4646",
      description: "Per informazioni su Counselling Psicologico CMT",
      color: "primary",
      type: "phone",
      link: "tel:3405744646",
    },
    {
      icon: Mail,
      title: "Email Counselling",
      value: "counselling@cmt-ig.org",
      description: "Richieste e informazioni su Counselling",
      color: "secondary",
      type: "email",
      link: "mailto:counselling@cmt-ig.org",
    },
    {
      icon: Phone,
      title: "Psicoterapia Breve",
      value: "329 212 5385",
      description: "Per informazioni su Psicoterapia Breve CMT",
      color: "primary",
      type: "phone",
      link: "tel:3292125385",
    },
    {
      icon: Mail,
      title: "Email Psicoterapia",
      value: "psicoterapiabreve.cmt@outlook.it",
      description: "Richieste e informazioni su Psicoterapia Breve",
      color: "secondary",
      type: "email",
      link: "mailto:psicoterapiabreve.cmt@outlook.it",
    },
    {
      icon: MapPin,
      title: "Sedi",
      value: "Roma, Milano e altre città",
      description: "Rete di professionisti in tutta Italia",
      color: "primary",
      type: "location",
      link: null,
    },
  ]

  const faq = [
    {
      domanda: "Come posso prenotare un appuntamento?",
      risposta:
        "Contatta direttamente il servizio di tuo interesse: per il Counselling usa il numero 340 574 4646 o l'email counselling@cmt-ig.org; per la Psicoterapia Breve usa il 329 212 5385 o psicoterapiabreve.cmt@outlook.it. Ti ricontatteremo entro 24 ore.",
    },
    {
      domanda: "Quanto dura una seduta?",
      risposta:
        "Le sedute di counselling durano 50 minuti per 4 incontri settimanali. La psicoterapia breve prevede 25 sedute settimanali di 50 minuti ciascuna, più valutazione iniziale e follow-up.",
    },
    {
      domanda: "Qual è la differenza tra i due servizi?",
      risposta:
        "Il Counselling Psicologico CMT è un intervento breve di 4 sedute per difficoltà specifiche. La Psicoterapia Breve CMT è un percorso strutturato di 6 mesi (25 sedute) per problematiche più complesse che richiedono un lavoro terapeutico approfondito.",
    },
    {
      domanda: "È possibile fare sedute online?",
      risposta:
        "Sì, entrambi i servizi sono disponibili anche in modalità online tramite piattaforme sicure, oltre agli incontri in presenza nelle sedi della rete CMT presenti in diverse città italiane.",
    },
    {
      domanda: "Quali sono i costi?",
      risposta:
        "Il Counselling ha un costo fisso di 250€ totali per le 4 sedute. La Psicoterapia Breve ha un costo variabile o di 50€ a seduta. Contattaci per informazioni dettagliate sui prezzi e le modalità di pagamento.",
    },
  ]

  return (
    <div className="min-h-screen">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      </head>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              <span className="text-primary">Contatti</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
              La rete di professionisti CMT è qui per rispondere alle tue domande e aiutarti a iniziare il tuo percorso di benessere. 
              Contattaci per ricevere informazioni sui nostri servizi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Come Contattarci</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Scegli il servizio di cui hai bisogno e utilizza i contatti dedicati. La rete CMT risponde sempre entro 24 ore.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoContatti.map((info, index) => {
                  const IconComponent = info.icon
                  const content = (
                    <Card key={index} className="p-4 hover:shadow-lg transition-shadow h-full">
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-${info.color}/10 rounded-lg flex items-center justify-center`}>
                            <IconComponent className={`h-5 w-5 text-${info.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold">{info.title}</h3>
                          </div>
                        </div>
                        <div>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="font-medium text-foreground hover:text-primary transition-colors block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{info.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                  return content
                })}
              </div>

              {/* Emergency Notice */}
              <Card className="p-4 border-l-4 border-l-destructive bg-destructive/5">
                <CardContent className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-destructive mb-1">Situazioni di Emergenza</h4>
                    <p className="text-sm text-muted-foreground">
                      In caso di emergenza psicologica, contatta il numero verde 800 833 833 o recati al pronto soccorso
                      più vicino.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Invia un Messaggio</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Network Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">La Rete CMT in Italia</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Professionisti esperti in Control Mastery Theory distribuiti sul territorio nazionale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="space-y-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Sedi in Tutta Italia</h3>
                <p className="text-sm text-muted-foreground">
                  Roma, Milano e altre città. Contattaci per trovare il professionista più vicino a te.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Orari Flessibili</h3>
                <p className="text-sm text-muted-foreground">
                  Disponibilità anche serali e nel weekend per venire incontro alle tue esigenze.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Sedute Online</h3>
                <p className="text-sm text-muted-foreground">
                  Possibilità di seguire il percorso comodamente da casa con videoconsulenze sicure.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-start gap-4">
              <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-primary mb-2">Come Funziona</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dopo il primo contatto, ti assegneremo un professionista della rete che opera nella tua zona o che può seguirti online. 
                  Organizzerete insieme orari e modalità degli incontri in base alle tue esigenze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Domande Frequenti</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Risposte alle domande più comuni sui miei servizi e modalità di lavoro.
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-3">
                  <h3 className="font-semibold text-lg text-primary">{item.domanda}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.risposta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
