import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { siteConfig } from "@/lib/seo-config"
import CookieConsent from "@/components/cookie-consent"

export const metadata: Metadata = {
  title: {
    default: "Psicoterapia Breve e Counselling CMT",
    template: "%s | Psicoterapia Breve e Counselling CMT",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  authors: [{ name: "Control Mastery Theory Italian Group" }],
  creator: "Pasquale Langellotti",
  publisher: "Control Mastery Theory Italian Group",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/favicon/android-chrome-512x512.png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteConfig.url,
    title: "Psicoterapia Breve e Counselling CMT",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Psicoterapia Breve e Counselling CMT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicoterapia Breve e Counselling CMT",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    email: siteConfig.links.email,
    telephone: siteConfig.links.phone,
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Roma",
        addressCountry: "IT",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Milano",
        addressCountry: "IT",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Torino",
        addressCountry: "IT",
      },
    ],
    areaServed: ["Roma", "Milano", "Torino", "Italia"],
    medicalSpecialty: ["Psicoterapia", "Counselling Psicologico", "Psicologia Clinica"],
    sameAs: [siteConfig.links.cmtGroup],
  }

  return (
    <html lang="it">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
