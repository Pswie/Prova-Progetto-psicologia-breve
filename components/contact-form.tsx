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
    tipoRichiesta: "",
    messaggio: "",
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      // Reset form after success
      setTimeout(() => {
        setFormData({
          nome: "",
          cognome: "",
          email: "",
          telefono: "",
          tipoRichiesta: "",
          messaggio: "",
          privacy: false,
        })
        setSubmitStatus("idle")
      }, 3000)
    }, 1500)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitStatus === "success") {
    return (
      <Card className="p-8 text-center border-primary/20 bg-primary/5">
        <CardContent className="space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-primary">Messaggio Inviato!</h3>
          <p className="text-muted-foreground">
            Grazie per avermi contattato. Ti risponderò entro 24 ore per programmare la tua consulenza gratuita.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="p-6">
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

          {/* Tipo di Richiesta */}
          <div className="space-y-2">
            <Label htmlFor="tipoRichiesta">Tipo di Richiesta *</Label>
            <Select value={formData.tipoRichiesta} onValueChange={(value) => handleInputChange("tipoRichiesta", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona il tipo di richiesta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consulenza">Consulenza Gratuita</SelectItem>
                <SelectItem value="individuale">Terapia Individuale</SelectItem>
                <SelectItem value="coppia">Terapia di Coppia</SelectItem>
                <SelectItem value="gruppo">Terapia di Gruppo</SelectItem>
                <SelectItem value="informazioni">Informazioni Generali</SelectItem>
                <SelectItem value="altro">Altro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Messaggio */}
          <div className="space-y-2">
            <Label htmlFor="messaggio">Messaggio *</Label>
            <Textarea
              id="messaggio"
              value={formData.messaggio}
              onChange={(e) => handleInputChange("messaggio", e.target.value)}
              placeholder="Descrivi brevemente la tua richiesta o le tue esigenze..."
              rows={5}
              required
            />
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
                className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accetto il trattamento dei dati personali secondo la{" "}
                <span className="text-primary underline cursor-pointer">Privacy Policy</span> e autorizzo l'invio di
                comunicazioni relative ai servizi richiesti. *
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
            Ti ricontatterò entro 24 ore. La prima consulenza è sempre gratuita e senza impegno.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
