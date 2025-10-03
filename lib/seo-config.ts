import type { Metadata } from "next"

export const siteConfig = {
  name: "Psicoterapia Breve e Counselling CMT",
  description:
    "Rete di psicologi e psicoterapeuti specializzati in Control Mastery Theory. Servizi di psicoterapia breve e counselling psicologico a Roma, Milano e Torino.",
  url: "https://www.psicoterapiacmt.it",
  ogImage: "https://www.psicoterapiacmt.it/og-image.jpg",
  links: {
    email: "counselling@cmt-ig.org",
    phone: "+393405744646",
    cmtGroup: "http://www.cmt-ig.org/",
  },
  keywords: [
    "psicoterapia breve",
    "counselling psicologico",
    "Control Mastery Theory",
    "CMT",
    "psicologo Roma",
    "psicologo Milano",
    "psicologo Torino",
    "terapia breve",
    "psicoterapia online",
    "videoconsulenza psicologica",
    "intervento psicologico breve",
    "Giuseppe Stefano Biuso",
    "Federica Genova",
  ],
}

export function generateMetadata({
  title,
  description,
  keywords,
  path = "/",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  type?: "website" | "article" | "profile"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const allKeywords = [...siteConfig.keywords, ...(keywords || [])]

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: allKeywords.join(", "),
    authors: authors?.map((name) => ({ name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "it_IT",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  }
}
