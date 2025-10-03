"use client"

import { Button } from "@/components/ui/button"
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  title: string
  description: string
  url: string
  image?: string
}

export default function ShareButtons({ title, description, url, image }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm font-medium text-muted-foreground mr-2">
        <Share2 className="h-4 w-4 inline mr-1" />
        Condividi:
      </span>
      
      <Button
        variant="outline"
        size="sm"
        asChild
        className="hover:bg-blue-50 hover:border-blue-200"
      >
        <a
          href={shareUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Condividi su Facebook"
        >
          <Facebook className="h-4 w-4 text-blue-600" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        asChild
        className="hover:bg-sky-50 hover:border-sky-200"
      >
        <a
          href={shareUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Condividi su Twitter"
        >
          <Twitter className="h-4 w-4 text-sky-500" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        asChild
        className="hover:bg-blue-50 hover:border-blue-200"
      >
        <a
          href={shareUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Condividi su LinkedIn"
        >
          <Linkedin className="h-4 w-4 text-blue-700" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="hover:bg-gray-50 hover:border-gray-200"
        aria-label="Copia link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4 text-gray-600" />
        )}
      </Button>
    </div>
  )
}