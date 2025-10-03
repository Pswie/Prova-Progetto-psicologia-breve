import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">CMT Psicoterapia</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Rete di professionisti specializzati in Psicoterapia Breve e Counselling CMT. Un approccio basato sulla
              Control Mastery Theory per il tuo benessere.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Navigazione</h4>
            <div className="space-y-2">
              <Link
                href="/servizi"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Servizi
              </Link>
              <Link
                href="/articoli"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Articoli
              </Link>
              <Link
                href="/chi-sono"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Chi Sono
              </Link>
              <Link
                href="/contatti"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contatti
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:3405744646" className="hover:text-primary transition-colors">
                  340 574 4646
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:counselling@cmt-ig.org" className="hover:text-primary transition-colors">
                  counselling@cmt-ig.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Roma, Milano e altre città italiane</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Rete Psicoterapia Breve e Counselling CMT. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
