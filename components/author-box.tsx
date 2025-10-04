'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Award, Calendar, ExternalLink } from "lucide-react"

interface AuthorCredentials {
  name: string
  role: string
  image?: string
  bio: string
  credentials: string[]
  specializations: string[]
  experience: string
  education: string[]
  publications?: string[]
  affiliations?: string[]
  socialLinks?: {
    linkedin?: string
    website?: string
  }
}

interface AuthorBoxProps {
  author: AuthorCredentials
  showFull?: boolean
}

export default function AuthorBox({ author, showFull = false }: AuthorBoxProps) {
  // Generate Author Schema
  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.image,
    hasCredential: author.credentials.map(credential => ({
      '@type': 'EducationalOccupationalCredential',
      name: credential
    })),
    knowsAbout: author.specializations,
    alumniOf: author.education.map(edu => ({
      '@type': 'EducationalOrganization',
      name: edu
    })),
    memberOf: author.affiliations?.map(affiliation => ({
      '@type': 'Organization',
      name: affiliation
    })),
    sameAs: Object.values(author.socialLinks || {}),
    worksFor: {
      '@type': 'MedicalBusiness',
      name: 'CMT Italian Group'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      
      <Card className="border-l-4 border-l-primary">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {author.image ? (
              <img
                src={author.image}
                alt={author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 bg-primary/10 [background-color:rgba(var(--primary-rgb)/0.1)] rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground">{author.name}</h3>
                <Badge variant="secondary" className="bg-primary/10 [background-color:rgba(var(--primary-rgb)/0.1)] text-primary">
                  <Award className="h-3 w-3 mr-1" />
                  Verificato
                </Badge>
              </div>
              
              <p className="text-primary font-medium mb-2">{author.role}</p>
              
              <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{author.experience} di esperienza</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{author.bio}</p>
              
              {/* Credentials */}
              <div className="mb-3">
                <h4 className="text-sm font-medium mb-2">Qualifiche professionali:</h4>
                <div className="flex flex-wrap gap-2">
                  {author.credentials.map((credential, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {credential}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Specializations */}
              <div className="mb-3">
                <h4 className="text-sm font-medium mb-2">Specializzazioni:</h4>
                <div className="flex flex-wrap gap-2">
                  {author.specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {showFull && (
                <>
                  {/* Education */}
                  {author.education.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-2">Formazione:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {author.education.map((edu, index) => (
                          <li key={index}>• {edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Publications */}
                  {author.publications && author.publications.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-2">Pubblicazioni:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {author.publications.map((pub, index) => (
                          <li key={index}>• {pub}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Affiliations */}
                  {author.affiliations && author.affiliations.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-2">Affiliazioni:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {author.affiliations.map((aff, index) => (
                          <li key={index}>• {aff}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
              
              {/* Social Links */}
              {author.socialLinks && (
                <div className="flex gap-2 mt-3">
                  {author.socialLinks.linkedin && (
                    <a
                      href={author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm"
                    >
                      <ExternalLink className="h-3 w-3" />
                      LinkedIn
                    </a>
                  )}
                  {author.socialLinks.website && (
                    <a
                      href={author.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Sito web
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

// Sample author data - da personalizzare con dati reali
export const sampleAuthors: AuthorCredentials[] = [
  {
    name: "Dott. Mario Rossi",
    role: "Psicologo e Psicoterapeuta",
    image: "/male-psychologist-portrait.png",
    bio: "Specialista in Psicoterapia Breve con approccio CMT. Esperto nel trattamento dei disturbi d'ansia e dell'umore.",
    credentials: [
      "Iscrizione Ordine Psicologi Lombardia #12345",
      "Specializzazione in Psicoterapia",
      "Certificazione CMT"
    ],
    specializations: [
      "Disturbi d'Ansia",
      "Disturbi dell'Umore", 
      "Terapia Cognitivo-Motoria",
      "Psicoterapia Breve"
    ],
    experience: "15+ anni",
    education: [
      "Laurea in Psicologia - Università Statale Milano",
      "Specializzazione in Psicoterapia - Scuola di Specializzazione",
      "Master in CMT - Institute"
    ],
    publications: [
      "Efficacia della Terapia CMT nei Disturbi d'Ansia (2023)",
      "Psicoterapia Breve: Nuovi Approcci (2022)"
    ],
    affiliations: [
      "Ordine degli Psicologi della Lombardia",
      "Società Italiana di Psicoterapia",
      "CMT International"
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/mario-rossi-psicologo"
    }
  }
]