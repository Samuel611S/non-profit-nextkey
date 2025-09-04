import Link from "next/link"
import { Instagram, Mail, MapPin, Facebook, Twitter } from "lucide-react"
import { footer } from "@/app/content/site"

export function Footer() {
  return (
    <footer className="bg-nextkey-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {footer.contact.city}
              </p>
              <div className="space-y-1">
                <p className="flex items-center">
                  <Facebook className="h-4 w-4 mr-2" />
                  <span>{footer.contact.social.facebook}</span>
                </p>
                <p className="flex items-center">
                  <Instagram className="h-4 w-4 mr-2" />
                  <span>{footer.contact.social.instagram}</span>
                </p>
                <p className="flex items-center">
                  <Twitter className="h-4 w-4 mr-2" />
                  <span>{footer.contact.social.x}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/programs" className="block hover:text-nextkey-gold transition-colors">Our Programs</Link>
              <Link href="/get-involved" className="block hover:text-nextkey-gold transition-colors">Get Involved</Link>
              <Link href="/events" className="block hover:text-nextkey-gold transition-colors">Events</Link>
              <Link href="/donate" className="block hover:text-nextkey-gold transition-colors">Donate</Link>
              <Link href="/contact" className="block hover:text-nextkey-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <p>
                {footer.legal}
              </p>
              <Link href="/privacy" className="block hover:text-nextkey-gold transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400 mt-8 pt-8 text-center text-sm">
          <p>
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
