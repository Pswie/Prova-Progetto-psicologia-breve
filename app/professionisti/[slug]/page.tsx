import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-config"
import ProfessionistaClientPage from "./professionista-client-page"

// Database mockup - in futuro sarà collegato a un database reale
const professionistiData: Record<string, any> = {
  "giuseppe-stefano-biuso": {
    nome: "Giuseppe Stefano Biuso",
    titolo: "Psicologo, Counsellor, Psicoterapeuta",
    specializzazione: "Specialista in Psicologia Clinica",
    ruolo: "Responsabile Rete Counselling CMT",
    citta: "Roma",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/psychologist-portrait.png",
    bio: `Giuseppe Stefano Biuso, psicologo, counsellor, psicoterapeuta, specialista in Psicologia Clinica. Responsabile Rete Counselling CMT.

Dal 2012 è psicologo clinico/consulente presso il Centro di Counselling Psicologico della "Sapienza" Università di Roma. Dottorando di Ricerca in Psicologia Dinamica e Clinica e Cultore della materia in "Psicosomatica" presso l'università "Sapienza" di Roma.

È socio del San Francisco Psychotherapy Research Group (SFPRG). Riceve a Roma e on-line.`,
    formazione: [
      "Laurea in Psicologia - Università Sapienza di Roma",
      "Specializzazione in Psicologia Clinica",
      "Dottorando di Ricerca in Psicologia Dinamica e Clinica",
      "Formazione in Control Mastery Theory",
    ],
    esperienza: [
      "Dal 2012: Psicologo clinico/consulente presso il Centro di Counselling Psicologico della Sapienza",
      "Responsabile Rete Counselling CMT dal 2018",
      "Socio del San Francisco Psychotherapy Research Group (SFPRG)",
      "Cultore della materia in Psicosomatica - Università Sapienza",
    ],
    areeSpecializzazione: [
      "Psicoterapia Breve",
      "Counselling Psicologico",
      "Control Mastery Theory",
      "Psicosomatica",
      "Psicologia Clinica",
    ],
  },
  "maria-rossi": {
    nome: "Maria Rossi",
    titolo: "Psicologa, Psicoterapeuta",
    specializzazione: "Specialista in Psicoterapia Cognitiva",
    ruolo: "Membro CMT Italian Group",
    citta: "Milano",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/female-psychologist-portrait.png",
    bio: `Maria Rossi è psicologa e psicoterapeuta specializzata in psicoterapia cognitiva con particolare focus sulla Control Mastery Theory. Lavora a Milano dal 2015 e offre sia consulenze in studio che online.

Ha conseguito la specializzazione in Psicoterapia Cognitiva e ha approfondito la sua formazione con corsi avanzati sulla CMT presso il San Francisco Psychotherapy Research Group.`,
    formazione: [
      "Laurea in Psicologia - Università degli Studi di Milano",
      "Specializzazione in Psicoterapia Cognitiva",
      "Formazione avanzata in Control Mastery Theory",
      "Master in Psicologia Clinica",
    ],
    esperienza: [
      "Dal 2015: Psicoterapeuta privato a Milano",
      "Membro del Control Mastery Theory Italian Group",
      "Esperienza in psicoterapia breve e counselling",
      "Consulenze online e in presenza",
    ],
    areeSpecializzazione: [
      "Psicoterapia Cognitiva",
      "Control Mastery Theory",
      "Disturbi d'Ansia",
      "Depressione",
      "Relazioni Interpersonali",
    ],
  },
  "luca-bianchi": {
    nome: "Luca Bianchi",
    titolo: "Psicologo, Psicoterapeuta",
    specializzazione: "Specialista in Psicologia Clinica",
    ruolo: "Membro CMT Italian Group",
    citta: "Roma",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/male-psychologist-portrait.png",
    bio: `Luca Bianchi è psicologo e psicoterapeuta specializzato in psicologia clinica. Lavora a Roma e si occupa principalmente di psicoterapia breve secondo il modello della Control Mastery Theory.

Ha una lunga esperienza nel trattamento di disturbi d'ansia, depressione e problematiche relazionali. Offre consulenze sia in studio che online.`,
    formazione: [
      "Laurea in Psicologia - Università Sapienza di Roma",
      "Specializzazione in Psicologia Clinica",
      "Formazione in Control Mastery Theory",
      "Corso avanzato in Psicoterapia Breve",
    ],
    esperienza: [
      "Dal 2013: Psicoterapeuta privato a Roma",
      "Membro del Control Mastery Theory Italian Group",
      "Esperienza in psicoterapia individuale e di coppia",
      "Consulenze online e in presenza",
    ],
    areeSpecializzazione: [
      "Psicologia Clinica",
      "Control Mastery Theory",
      "Psicoterapia Breve",
      "Terapia di Coppia",
      "Disturbi d'Ansia",
    ],
  },
  "anna-ferrari": {
    nome: "Anna Ferrari",
    titolo: "Psicologa, Counsellor",
    specializzazione: "Specialista in Psicologia del Lavoro",
    ruolo: "Membro CMT Italian Group",
    citta: "Milano",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/professional-female-therapist.png",
    bio: `Anna Ferrari è psicologa e counsellor specializzata in psicologia del lavoro. Lavora a Milano e si occupa di counselling psicologico secondo il modello della Control Mastery Theory.

Ha una particolare esperienza nel supporto a professionisti e manager che affrontano stress lavorativo, burnout e difficoltà relazionali in ambito professionale.`,
    formazione: [
      "Laurea in Psicologia - Università Cattolica di Milano",
      "Specializzazione in Psicologia del Lavoro",
      "Formazione in Control Mastery Theory",
      "Master in Counselling Psicologico",
    ],
    esperienza: [
      "Dal 2016: Counsellor privato a Milano",
      "Membro del Control Mastery Theory Italian Group",
      "Esperienza in counselling aziendale",
      "Consulenze online e in presenza",
    ],
    areeSpecializzazione: [
      "Psicologia del Lavoro",
      "Counselling Psicologico",
      "Control Mastery Theory",
      "Stress Lavorativo",
      "Burnout",
    ],
  },
  "marco-colombo": {
    nome: "Marco Colombo",
    titolo: "Psicologo, Psicoterapeuta",
    specializzazione: "Specialista in Psicoterapia Breve",
    ruolo: "Membro CMT Italian Group",
    citta: "Torino",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/male-therapist-portrait-professional.jpg",
    bio: `Marco Colombo è psicologo e psicoterapeuta specializzato in psicoterapia breve. Lavora a Torino e applica il modello della Control Mastery Theory nei suoi interventi terapeutici.

Ha una particolare esperienza nel trattamento di disturbi d'ansia, attacchi di panico e fobie. Offre consulenze sia in studio che online.`,
    formazione: [
      "Laurea in Psicologia - Università di Torino",
      "Specializzazione in Psicoterapia Breve",
      "Formazione in Control Mastery Theory",
      "Corso avanzato in Terapia dei Disturbi d'Ansia",
    ],
    esperienza: [
      "Dal 2014: Psicoterapeuta privato a Torino",
      "Membro del Control Mastery Theory Italian Group",
      "Esperienza in psicoterapia breve",
      "Consulenze online e in presenza",
    ],
    areeSpecializzazione: [
      "Psicoterapia Breve",
      "Control Mastery Theory",
      "Disturbi d'Ansia",
      "Attacchi di Panico",
      "Fobie",
    ],
  },
  "elena-greco": {
    nome: "Elena Greco",
    titolo: "Psicologa, Psicoterapeuta",
    specializzazione: "Specialista in Psicologia Dinamica",
    ruolo: "Membro CMT Italian Group",
    citta: "Bologna",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/female-psychotherapist-portrait.jpg",
    bio: `Elena Greco è psicologa e psicoterapeuta specializzata in psicologia dinamica. Lavora a Bologna e applica il modello della Control Mastery Theory nei suoi interventi terapeutici.

Ha una particolare esperienza nel trattamento di disturbi dell'umore, depressione e problematiche relazionali. Offre consulenze sia in studio che online.`,
    formazione: [
      "Laurea in Psicologia - Università di Bologna",
      "Specializzazione in Psicologia Dinamica",
      "Formazione in Control Mastery Theory",
      "Master in Psicoterapia Psicodinamica",
    ],
    esperienza: [
      "Dal 2015: Psicoterapeuta privato a Bologna",
      "Membro del Control Mastery Theory Italian Group",
      "Esperienza in psicoterapia individuale",
      "Consulenze online e in presenza",
    ],
    areeSpecializzazione: [
      "Psicologia Dinamica",
      "Control Mastery Theory",
      "Disturbi dell'Umore",
      "Depressione",
      "Relazioni Interpersonali",
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const professionista = professionistiData[params.slug]

  if (!professionista) {
    return {}
  }

  return genMeta({
    title: professionista.nome,
    description: `${professionista.nome} - ${professionista.titolo}. ${professionista.specializzazione}. ${professionista.ruolo} a ${professionista.citta}.`,
    keywords: [
      professionista.nome,
      professionista.specializzazione,
      professionista.citta,
      "psicologo",
      "psicoterapeuta",
      "CMT",
    ],
    path: `/professionisti/${params.slug}`,
    type: "profile",
  })
}

export default function ProfessionistiPage({ params }: { params: { slug: string } }) {
  const professionista = professionistiData[params.slug]

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: professionista?.nome || "",
    jobTitle: professionista?.titolo || "",
    description: professionista?.bio || "",
    email: professionista?.email || "",
    telephone: professionista?.telefono || "",
    address: {
      "@type": "PostalAddress",
      addressLocality: professionista?.citta || "",
      addressCountry: "IT",
    },
    memberOf: {
      "@type": "Organization",
      name: "Control Mastery Theory Italian Group",
    },
    knowsAbout: professionista?.areeSpecializzazione || [],
  }

  return <ProfessionistaClientPage professionista={professionista} personSchema={personSchema} />
}
