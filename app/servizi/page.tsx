import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-config"
import ServiziClientPage from "./servizi-client"

export const metadata: Metadata = genMeta({
  title: "Servizi",
  description:
    "Psicoterapia breve CMT (6 mesi) e counselling psicologico (1 mese). Servizi professionali a costi accessibili basati sulla Control Mastery Theory.",
  keywords: ["servizi psicoterapia", "counselling", "psicoterapia breve", "costi accessibili"],
  path: "/servizi",
})

export default function ServiziPage() {
  return <ServiziClientPage />
}
