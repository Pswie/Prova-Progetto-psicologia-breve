import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-config"
import ChiSiamoClient from "./chi-sono-client"

export const metadata: Metadata = genMeta({
  title: "Chi Siamo",
  description:
    "Rete CounsellingCMT: psicologi e psicoterapeuti esperti del Control Mastery Theory Italian Group. Servizi a costi accessibili a Roma, Milano e Torino.",
  keywords: ["chi siamo", "rete CMT", "professionisti", "Control Mastery Theory Italian Group"],
  path: "/chi-sono",
})

export default function ChiSiamoPage() {
  return <ChiSiamoClient />
}
