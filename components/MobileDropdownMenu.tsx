"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { nav } from "@/app/content/site";
import { siteContent } from "@/lib/content";

export function MobileDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-nextkey-purple"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <div className="py-2">
            {nav.primary.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-nextkey-light-purple hover:text-nextkey-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 my-2"></div>
            
            <a
              href={siteContent.links.workshop}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-nextkey-light-purple hover:text-nextkey-purple transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Workshop
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
