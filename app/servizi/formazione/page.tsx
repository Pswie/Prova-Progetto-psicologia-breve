import { Metadata } from "next"
import FormazioneClientPage from "./formazione-client"

export const metadata: Metadata = {
  title: "Formazione in Counselling e Psicoterapia Breve CMT | Psicoterapia Breve",
  description:
    "Percorsi formativi avanzati per professionisti della salute mentale. Formazione teorica e pratica in Control Mastery Theory per counselling psicologico e psicoterapia breve con supervisione e certificazione.",
  keywords: [
    "formazione psicoterapia",
    "formazione counselling",
    "Control Mastery Theory",
    "CMT training",
    "supervisione clinica",
    "corso psicoterapia breve",
    "formazione psicologi",
    "certificazione CMT",
  ],
  openGraph: {
    title: "Formazione in Counselling e Psicoterapia Breve CMT",
    description:
      "Percorsi formativi avanzati per professionisti: formazione teorica, supervisione clinica e certificazione in Control Mastery Theory",
    type: "website",
  },
}

export default function FormazionePage() {
  return <FormazioneClientPage />
}
