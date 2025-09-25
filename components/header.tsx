"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/lib/content"
import { MobileDropdownMenu } from "@/components/MobileDropdownMenu"
import { DropdownMenu } from "@/components/DropdownMenu"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b-2 border-nextkey-purple">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/nextkey-logo.png"
              alt="NextKey Housing Access Foundation"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-nextkey-purple">NextKey</h1>
              <p className="text-sm text-gray-600">Equity. Access. Impact.</p>
            </div>
          </Link>

          {/* Desktop Navigation - Dropdown Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu />
            <a
              href={siteContent.links.gofundme}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl">
                {siteContent.cta.donate}
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <MobileDropdownMenu />
            <a
              href={siteContent.links.gofundme}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl">
                Donate
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
