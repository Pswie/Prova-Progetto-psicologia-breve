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
    "Contatta la rete Psicoterapia Breve e Counselling CMT. Email: counselling@cmt-ig.org, Tel: 340 574 4646. Prima consulenza gratuita.",
  keywords: ["contatti", "prenotazione", "appuntamento", "email", "telefono"],
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
      title: "Telefono",
      value: "+39 123 456 7890",
      description: "Chiamami per informazioni o per prenotare",
      color: "primary",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@cmtpsicoterapia.it",
      description: "Scrivimi per qualsiasi domanda",
      color: "secondary",
    },
    {
      icon: MapPin,
      title: "Studio",
      value: "Via Roma 123, 20121 Milano",
      description: "Facilmente raggiungibile con i mezzi pubblici",
      color: "primary",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+39 123 456 7890",
      description: "Messaggi rapidi e prenotazioni",
      color: "secondary",
    },
  ]

  const orari = [
    { giorno: "Lunedì", orario: "9:00 - 18:00", disponibile: true },
    { giorno: "Martedì", orario: "9:00 - 18:00", disponibile: true },
    { giorno: "Mercoledì", orario: "9:00 - 18:00", disponibile: true },
    { giorno: "Giovedì", orario: "9:00 - 18:00", disponibile: true },
    { giorno: "Venerdì", orario: "9:00 - 17:00", disponibile: true },
    { giorno: "Sabato", orario: "9:00 - 13:00", disponibile: true },
    { giorno: "Domenica", orario: "Chiuso", disponibile: false },
  ]

  const faq = [
    {
      domanda: "Come posso prenotare un appuntamento?",
      risposta:
        "Puoi prenotare chiamando il numero di telefono, inviando un'email o compilando il form di contatto. Ti ricontatterò entro 24 ore per confermare l'appuntamento.",
    },
    {
      domanda: "Quanto dura una seduta?",
      risposta:
        "Ogni seduta dura circa 50 minuti. La prima seduta può durare fino a 60 minuti per permettere una valutazione completa.",
    },
    {
      domanda: "Accettate assicurazioni sanitarie?",
      risposta:
        "Sì, accettiamo le principali assicurazioni sanitarie. Contattaci per verificare la copertura della tua polizza.",
    },
    {
      domanda: "È possibile fare sedute online?",
      risposta:
        "Sì, offro anche sedute online tramite piattaforme sicure per chi non può raggiungere lo studio o preferisce questa modalità.",
    },
    {
      domanda: "Quanto costa una seduta?",
      risposta:
        "I costi variano in base al tipo di terapia. La prima consulenza è sempre gratuita. Contattami per informazioni dettagliate sui prezzi.",
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
              Sono qui per rispondere alle tue domande e aiutarti a iniziare il tuo percorso di benessere. Contattami
              per una consulenza gratuita.
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Come Raggiungermi</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Scegli il metodo di contatto che preferisci. Rispondo sempre entro 24 ore e la prima consulenza è
                  sempre gratuita.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoContatti.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
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
                          <p className="font-medium text-foreground">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
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

      {/* Schedule */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Opening Hours */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Orari di Apertura</h2>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  {orari.map((orario, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{orario.giorno}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={orario.disponibile ? "text-foreground" : "text-muted-foreground"}>
                          {orario.orario}
                        </span>
                        {orario.disponibile && (
                          <Badge variant="secondary" className="text-xs">
                            Disponibile
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Prenotazione Flessibile</h4>
                    <p className="text-sm text-muted-foreground">
                      Offro anche appuntamenti serali e nel weekend per venire incontro alle tue esigenze lavorative.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Dove Trovarmi</h2>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Mappa Interattiva</p>
                      <p className="text-sm text-muted-foreground">Via Roma 123, 20121 Milano</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Come Raggiungerci</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Metro: Linea M1 - Fermata Duomo (5 min a piedi)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Autobus: Linee 54, 61 - Fermata Via Roma</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Parcheggio: Garage convenzionato a 50m</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
