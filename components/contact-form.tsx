"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    servizio: "counselling",
    motivazione: "",
    preferenzeGiornoOrario: "",
    preferenzeZona: "",
    sessoTerapeuta: "",
    etaTerapeuta: "",
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Errore nell\'invio')
      }

      setSubmitStatus("success")
      // Reset form after success
      setTimeout(() => {
        setFormData({
          nome: "",
          cognome: "",
          email: "",
          telefono: "",
          servizio: "counselling",
          motivazione: "",
          preferenzeGiornoOrario: "",
          preferenzeZona: "",
          sessoTerapeuta: "",
          etaTerapeuta: "",
          privacy: false,
        })
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitStatus === "success") {
    return (
      <Card className="p-8 text-center border-primary/20 bg-primary/5 overflow-hidden">
        <CardContent className="space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-primary">Richiesta Inviata!</h3>
          <p className="text-muted-foreground">
            Grazie per averci contattato. Ti ricontatteremo entro 24 ore per assegnarti un terapeuta della rete CMT in base alle tue preferenze.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="p-6 overflow-hidden">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome e Cognome */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome *</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                placeholder="Il tuo nome"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cognome">Cognome *</Label>
              <Input
                id="cognome"
                value={formData.cognome}
                onChange={(e) => handleInputChange("cognome", e.target.value)}
                placeholder="Il tuo cognome"
                required
              />
            </div>
          </div>

          {/* Tipo di Servizio */}
          <div className="space-y-2">
            <Label htmlFor="servizio">Servizio Richiesto *</Label>
            <Select value={formData.servizio} onValueChange={(value) => handleInputChange("servizio", value)}>
              <SelectTrigger id="servizio">
                <SelectValue placeholder="Seleziona il servizio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="counselling">Counselling Psicologico (1 mese)</SelectItem>
                <SelectItem value="psicoterapia">Psicoterapia Breve (6 mesi)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Email e Telefono */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="la.tua@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Telefono</Label>
              <Input
                id="telefono"
                type="tel"
                value={formData.telefono}
                onChange={(e) => handleInputChange("telefono", e.target.value)}
                placeholder="+39 123 456 7890"
              />
            </div>
          </div>

          {/* Motivazione della richiesta */}
          <div className="space-y-2">
            <Label htmlFor="motivazione">Motivazione della richiesta *</Label>
            <Textarea
              id="motivazione"
              value={formData.motivazione}
              onChange={(e) => handleInputChange("motivazione", e.target.value)}
              placeholder="Descrivi brevemente il motivo per cui stai cercando un supporto psicologico..."
              rows={4}
              required
            />
          </div>

          {/* Preferenze di giorno e orario */}
          <div className="space-y-2">
            <Label htmlFor="preferenzeGiornoOrario">Preferenze di giorno e orario</Label>
            <Textarea
              id="preferenzeGiornoOrario"
              value={formData.preferenzeGiornoOrario}
              onChange={(e) => handleInputChange("preferenzeGiornoOrario", e.target.value)}
              placeholder="Es. Lunedì e Mercoledì pomeriggio, Sabato mattina, ecc."
              rows={2}
            />
          </div>

          {/* Preferenze di zona */}
          <div className="space-y-2">
            <Label htmlFor="preferenzeZona">Preferenze di zona</Label>
            <Input
              id="preferenzeZona"
              value={formData.preferenzeZona}
              onChange={(e) => handleInputChange("preferenzeZona", e.target.value)}
              placeholder="Es. Roma centro, Milano zona Loreto, Online, ecc."
            />
          </div>

          {/* Sesso ed età del terapeuta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sessoTerapeuta">Sesso del terapeuta</Label>
              <Select value={formData.sessoTerapeuta} onValueChange={(value) => handleInputChange("sessoTerapeuta", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Nessuna preferenza" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nessuna">Nessuna preferenza</SelectItem>
                  <SelectItem value="maschile">Maschile</SelectItem>
                  <SelectItem value="femminile">Femminile</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="etaTerapeuta">Età del terapeuta</Label>
              <Select value={formData.etaTerapeuta} onValueChange={(value) => handleInputChange("etaTerapeuta", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Nessuna preferenza" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nessuna">Nessuna preferenza</SelectItem>
                  <SelectItem value="giovane">Giovane (25-35 anni)</SelectItem>
                  <SelectItem value="media">Media età (36-50 anni)</SelectItem>
                  <SelectItem value="esperto">Esperto (oltre 50 anni)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Privacy */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy"
              checked={formData.privacy}
              onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
              required
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="privacy"
                className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-normal"
              >
                Accetto il trattamento dei dati personali secondo la <span className="text-primary underline cursor-pointer">Privacy Policy</span> e autorizzo l'invio di comunicazioni relative ai servizi richiesti. *
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || !formData.privacy}>
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Invio in corso...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Invia Messaggio
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Ti ricontatteremo entro 24 ore per assegnarti un terapeuta della rete CMT in base alle tue preferenze.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

