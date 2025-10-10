import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-config"
import HomePageClient from "./page.client"
import { getLatestCombinedContent } from "@/lib/tina/combined-content"

export const metadata: Metadata = genMeta({
  title: "Home",
  description:
    "Servizi di psicoterapia breve e counselling psicologico a costi accessibili. Rete di professionisti esperti in Control Mastery Theory a Roma, Milano e Torino.",
  keywords: ["psicoterapia breve", "counselling psicologico", "CMT", "psicologo", "terapia online"],
  path: "/",
})

export default function HomePage() {
  const latestContent = getLatestCombinedContent(3)
  return <HomePageClient latestContent={latestContent} />
}
