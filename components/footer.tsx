import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-nextkey-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@nextkeyhousingaccess.org
              </p>
              <p className="flex items-center">
                <Instagram className="h-4 w-4 mr-2" />
                @nextkeyhousing
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/programs" className="block hover:text-nextkey-gold transition-colors">
                Our Programs
              </Link>
              <Link href="/get-involved" className="block hover:text-nextkey-gold transition-colors">
                Get Involved
              </Link>
              <Link href="/events" className="block hover:text-nextkey-gold transition-colors">
                Events
              </Link>
              <Link href="#" className="block hover:text-nextkey-gold transition-colors">
                Bonfire Merch
              </Link>
              <Link href="#" className="block hover:text-nextkey-gold transition-colors">
                GoFundMe
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <p className="text-sm">501(c)(3) status pending</p>
              <Link href="/privacy" className="block hover:text-nextkey-gold transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} NextKey Housing Access Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
