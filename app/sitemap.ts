import { siteConfig } from "@/lib/seo-config"

export default function sitemap() {
  const routes = [
    "",
    "/servizi",
    "/servizi/counselling",
    "/servizi/psicoterapia-breve",
    "/professionisti",
    "/articoli",
    "/chi-sono",
    "/contatti",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Professionisti dinamici
  const professionisti = [
    "giuseppe-stefano-biuso",
    "maria-rossi",
    "luca-bianchi",
    "anna-ferrari",
    "marco-colombo",
    "elena-greco",
  ].map((slug) => ({
    url: `${siteConfig.url}/professionisti/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Articoli dinamici
  const articoli = [
    "introduzione-control-mastery-theory",
    "psicoterapia-breve-efficacia",
    "adattamento-realta-interpersonale",
    "counselling-psicologico-quando-serve",
    "credenze-patogene-superarle",
    "terapia-online-vantaggi",
  ].map((slug) => ({
    url: `${siteConfig.url}/articoli/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...professionisti, ...articoli]
}
