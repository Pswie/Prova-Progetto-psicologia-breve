import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-config"
import ProfessionistaClientPage from "./professionista-client-page"
import { getAllMembers, getMemberBySlug } from "@/lib/tina/members"
import { notFound } from "next/navigation"

// Database mockup - DEPRECATO: ora usiamo i dati da TinaCMS
// Mantenuto per riferimento storico ma non più utilizzato
const professionistiDataOLD: Record<string, any> = {
  "giuseppe-stefano-biuso": {
    nome: "Giuseppe Stefano Biuso",
    titolo: "Psicologo, Counsellor, Psicoterapeuta",
    specializzazione: "Specialista in Psicologia Clinica",
    ruolo: "Responsabile Rete Counselling CMT",
    citta: "Roma",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/busio.jpg",
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
  "roberta-alesiani": {
    nome: "Roberta Alesiani",
    titolo: "Psicologa Clinica, Psicoterapeuta",
    specializzazione: "Specialista in Psicologia Clinica e Psicoterapia",
    ruolo: "Socio SPR e SFPRG",
    citta: "Milano",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/roberta alesiani.jpg",
    bio: `Roberta Alesiani, psicologa clinica e psicoterapeuta; lavora da anni come Psicoterapeuta Consulente presso il Servizio di Psicologia Clinica e Psicoterapia dell’Ospedale San Raffaele-Turro e presso il servizio di Medicina Occupazionale, H San Raffaele Resnati.\n\nSocio della International Society for Psychotherapy Research (SPR) e del San Francisco Psychotherapy Research Group (SFPRG); è autore di diversi articoli scientifici pubblicati su riviste nazionali e internazionali. Riceve a Milano e on-line.`,
    formazione: [
      "Laurea in Psicologia Clinica",
      "Specializzazione in Psicoterapia"
    ],
    esperienza: [
      "Psicoterapeuta Consulente presso Ospedale San Raffaele-Turro",
      "Consulente presso Medicina Occupazionale, H San Raffaele Resnati",
      "Socio della International Society for Psychotherapy Research (SPR)",
      "Socio del San Francisco Psychotherapy Research Group (SFPRG)",
      "Autore di articoli scientifici nazionali e internazionali"
    ],
    areeSpecializzazione: [
      "Psicologia Clinica",
      "Psicoterapia",
      "Ricerca in Psicoterapia"
    ],
  },
  "federica-genova": {
    nome: "Federica Genova",
    titolo: "Psicoterapeuta Psicodinamica",
    specializzazione: "Dottore di Ricerca in Psicologia Dinamica e Clinica",
    ruolo: "Socio AIP, SPR, SFPRG",
    citta: "Roma",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/federica genova.jpg",
    bio: `Federica Genova, psicoterapeuta psicodinamica, dottore di ricerca in Psicologia Dinamica e Clinica presso il Dipartimento di Psicologia Dinamica e Clinica, Facoltà di Medicina e Psicologia, “Sapienza” Università di Roma, è socia dell’Associazione Italiana di Psicologia (AIP), della Society for Psychotherapy Research (SPR) Italy Area Group e del San Francisco Psychotherapy Research Group (SFPRG).\n\nHa scritto vari articoli scientifici pubblicati su riviste nazionali e internazionali e alcuni contributi pubblicati sui volumi Psicoanalisi in trincea e La Personalità e i suoi disturbi. Riceve a Roma e on-line.`,
    formazione: [
      "Dottorato di Ricerca in Psicologia Dinamica e Clinica - Sapienza Università di Roma",
      "Specializzazione in Psicoterapia Psicodinamica"
    ],
    esperienza: [
      "Socia dell’Associazione Italiana di Psicologia (AIP)",
      "Socia della Society for Psychotherapy Research (SPR) Italy Area Group",
      "Socia del San Francisco Psychotherapy Research Group (SFPRG)",
      "Autrice di articoli scientifici e contributi a volumi"
    ],
    areeSpecializzazione: [
      "Psicoterapia Psicodinamica",
      "Psicologia Dinamica e Clinica",
      "Ricerca in Psicologia"
    ],
  },
  "martina-calabro": {
    nome: "Martina Calabrò",
    titolo: "Psicologa, Esperta in Psicodiagnosi",
    specializzazione: "Specializzanda in Psicologia Clinica",
    ruolo: "Psicologo clinico/consulente",
    citta: "Roma",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/martina.jpg",
    bio: `Martina Calabrò, psicologa, esperta in psicodiagnosi, specializzanda presso la scuola di specializzazione in Psicologia Clinica, Sapienza Università di Roma. Svolge il suo tirocinio presso il Centro di Counselling Psicologico della "Sapienza" Università di Roma, dove svolge attività di psicologo clinico/consulente dal 2017. Lavora privatamente e si occupa di valutazione diagnostica e consulenza clinica per adulti e giovani adulti. Riceve a Roma e on-line.`,
    formazione: [
      "Laurea in Psicologia",
      "Specializzanda in Psicologia Clinica - Sapienza Università di Roma",
      "Formazione in Psicodiagnosi"
    ],
    esperienza: [
      "Dal 2017: Psicologo clinico/consulente presso Centro di Counselling Psicologico della Sapienza",
      "Valutazione diagnostica e consulenza clinica per adulti e giovani adulti"
    ],
    areeSpecializzazione: [
      "Psicodiagnosi",
      "Consulenza Clinica",
      "Psicologia Clinica",
      "Adulti e Giovani Adulti"
    ],
  },
  "emanuele-dammando": {
    nome: "Emanuele D'Ammando",
    titolo: "Psicologo",
    specializzazione: "Specializzando in Psicoterapia Psicoanalitica",
    ruolo: "Psicologo clinico/consulente",
    citta: "Roma",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/emanuele.jpg",
    bio: `Emanuele D’Ammando, psicologo e specializzando in psicoterapia psicoanalitica presso la SIPRe – Società Italiana di Psicoanalisi della Relazione, Istituto di Roma. Frequentatore scientifico presso il Centro di Counselling Psicologico della "Sapienza" Università di Roma, dove svolge attività di psicologo clinico/consulente dal 2017, sta svolgendo il tirocinio di specializzazione presso l’Ambulatorio Sociale di Psicoterapia Opera Don Calabria. Lavora privatamente a Roma e on-line.`,
    formazione: [
      "Laurea in Psicologia",
      "Specializzando in Psicoterapia Psicoanalitica - SIPRe Roma"
    ],
    esperienza: [
      "Dal 2017: Psicologo clinico/consulente presso il Centro di Counselling Psicologico della Sapienza",
      "Tirocinio presso l’Ambulatorio Sociale di Psicoterapia Opera Don Calabria"
    ],
    areeSpecializzazione: [
      "Psicoterapia Psicoanalitica",
      "Consulenza Clinica",
      "Psicoanalisi della Relazione"
    ],
  },
  "giorgia-abate": {
    nome: "Giorgia Abate",
    titolo: "Psicologa",
    specializzazione: "Specializzanda in Psicoterapia Sistemico-Familiare",
    ruolo: "Compagno Adulto",
    citta: "Roma",
    email: "counselling@cmt-ig.org",
    telefono: "340 574 4646",
    immagine: "/giorgia.jpg",
    bio: `Giorgia Abate, Psicologa, specializzanda in Psicoterapia Sistemico-Familiare. Svolge attività di Compagno Adulto presso la Cooperativa “Rifornimento in volo”. Riceve a Roma e on-line.`,
    formazione: [
      "Laurea in Psicologia",
      "Specializzanda in Psicoterapia Sistemico-Familiare"
    ],
    esperienza: [
      "Compagno Adulto presso la Cooperativa “Rifornimento in volo”"
    ],
    areeSpecializzazione: [
      "Psicoterapia Sistemico-Familiare",
      "Supporto a minori e famiglie"
    ],
  },
}; // <-- ERRORE CORRETTO: Aggiunta la parentesi graffa e il punto e virgola

// NUOVA FUNZIONE AGGIUNTA QUI - Usa i dati da TinaCMS
export async function generateStaticParams() {
  const membri = getAllMembers()
  return membri.map((membro) => ({
    slug: membro.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const membro = getMemberBySlug(params.slug)

  if (!membro) {
    return {}
  }

  const nomeCompleto = `${membro.nome} ${membro.cognome}`
  
  return genMeta({
    title: nomeCompleto,
    description: `${nomeCompleto} - ${membro.ruolo}. ${membro.bio} ${membro.citta ? `Opera a ${membro.citta}.` : ''}`,
    keywords: [
      nomeCompleto,
      membro.ruolo,
      membro.citta || "",
      "psicologo",
      "psicoterapeuta",
      "CMT",
      ...(membro.specializzazioni ? membro.specializzazioni.split(',').map(s => s.trim()) : [])
    ].filter(Boolean),
    path: `/professionisti/${params.slug}`,
    type: "profile",
  })
}

export default function ProfessionistiPage({ params }: { params: { slug: string } }) {
  const membro = getMemberBySlug(params.slug)

  // Se per qualche motivo lo slug non viene trovato, mostra una pagina non trovata
  if (!membro) {
    notFound()
  }

  const nomeCompleto = `${membro.nome} ${membro.cognome}`
  const specializzazioniArray = membro.specializzazioni 
    ? membro.specializzazioni.split(',').map(s => s.trim())
    : []

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: nomeCompleto,
    jobTitle: membro.ruolo,
    description: membro.bio,
    email: membro.email || "",
    telephone: membro.telefono || "",
    address: membro.citta ? {
      "@type": "PostalAddress",
      addressLocality: membro.citta,
      addressCountry: "IT",
    } : undefined,
    memberOf: {
      "@type": "Organization",
      name: "Control Mastery Theory Italian Group",
    },
    knowsAbout: specializzazioniArray,
  }

  return <ProfessionistaClientPage professionista={membro} personSchema={personSchema} />
}