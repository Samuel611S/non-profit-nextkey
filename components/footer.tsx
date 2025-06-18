import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"

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
                <a href="mailto:contact@nextkeyhousing.org">contact@nextkeyhousing.org</a>
              </p>
              <p className="flex items-center">
                <Instagram className="h-4 w-4 mr-2" />
                <a href="https://instagram.com/nextkeyhousing" target="_blank" rel="noopener noreferrer">@nextkeyhousing</a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Founded in NYC
              </p>
              <p className="text-xs text-purple-200">EIN: 00-0000000</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/programs" className="block hover:text-nextkey-gold transition-colors">Our Programs</Link>
              <Link href="/get-involved" className="block hover:text-nextkey-gold transition-colors">Get Involved</Link>
              <Link href="/events" className="block hover:text-nextkey-gold transition-colors">Events</Link>
              <Link href="#" className="block hover:text-nextkey-gold transition-colors">Bonfire Merch</Link>
              <Link href="#" className="block hover:text-nextkey-gold transition-colors">GoFundMe</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <p>
                NextKey Housing Access Foundation Inc. is a nonprofit organization based in New York, incorporated in 2025.
                We are currently in the process of applying for federal 501(c)(3) tax-exempt status.
              </p>
              <p>
                Donations are being accepted to support our mission but may not be tax-deductible until IRS approval is confirmed.
                EIN and legal documents available upon request.
              </p>
              <Link href="/privacy" className="block hover:text-nextkey-gold transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} NextKey Housing Access Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
