import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-config"
import ProfessionistiClientPage from "./professionistiClientPage"

export const metadata: Metadata = genMeta({
  title: "I Nostri Professionisti",
  description:
    "Psicologi e psicoterapeuti esperti in Control Mastery Theory. Professionisti qualificati a Roma, Milano e Torino. Sedute in studio e online.",
  keywords: ["psicologi CMT", "psicoterapeuti", "professionisti", "Roma", "Milano", "Torino"],
  path: "/professionisti",
})

export default function ProfessionistiPage() {
  return <ProfessionistiClientPage />
}
