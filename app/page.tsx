"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home, Users, GraduationCap, Shield } from "lucide-react";
import { siteContent } from "@/lib/content";
import { hero } from "@/app/content/site";
import { HowItWorks } from "@/components/HowItWorks";
import { CurrentFocus } from "@/components/CurrentFocus";
import { FAQ } from "@/components/FAQ";


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nextkey-light-purple to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-nextkey-purple mb-6">
                {hero.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8 whitespace-pre-line">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl"
                  asChild
                >
                  <a href={hero.ctas[0].href}>
                    {hero.ctas[0].label}
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-nextkey-purple border-2 border-nextkey-purple hover:bg-nextkey-purple hover:text-white font-semibold rounded-xl"
                  asChild
                >
                  <a href={hero.ctas[1].href}>
                    {hero.ctas[1].label}
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/nextkey-logo-tagline.png"
                alt="NextKey Housing Access Foundation - Unlock Hope, Unlock Home"
                width={500}
                height={400}
                className="max-w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Current Focus Section */}
      <CurrentFocus />

      {/* Built for Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
            {siteContent.pages.home.impact.title}
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            {siteContent.pages.home.impact.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Users className="h-8 w-8 text-nextkey-purple mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-nextkey-purple mb-2">
                    Empowers Underserved Renters
                  </h3>
                  <p className="text-gray-700">
                    Helps renters navigate complex housing systems with clarity, dignity, and support.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Home className="h-8 w-8 text-nextkey-purple mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-nextkey-purple mb-2">
                    Bridges Landlord Communication
                  </h3>
                  <p className="text-gray-700">
                    Simplifies relationships between property owners and renters through transparent engagement.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Heart className="h-8 w-8 text-nextkey-purple mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-nextkey-purple mb-2">Equity-First Design</h3>
                  <p className="text-gray-700">
                    Built with direct community feedback and equity embedded in every layer of the experience.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-nextkey-purple mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-nextkey-purple mb-2">Ready to Scale with Impact</h3>
                  <p className="text-gray-700">
                    Backed by early traction, growing interest, and a model designed to scale across communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
              Housing Resources & Support
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Access comprehensive resources, learn about voucher programs, and understand your tenant rights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 text-nextkey-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-nextkey-purple mb-3">
                  Voucher Programs
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn about FHEPS, CityFHEPS, and Section 8 housing assistance programs.
                </p>
                <Button asChild className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg">
                  <a href="/resources">View Resources</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-nextkey-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-nextkey-purple mb-3">
                  Tenant Rights
                </h3>
                <p className="text-gray-700 mb-4">
                  Understand your rights as a tenant and learn about broker fee protections.
                </p>
                <Button asChild className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg">
                  <a href="/resources">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-nextkey-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-nextkey-purple mb-3">
                  Community Partners
                </h3>
                <p className="text-gray-700 mb-4">
                  Connect with our community partners for additional support and resources.
                </p>
                <Button asChild className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg">
                  <a href="/resources">Explore Partners</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <section className="py-16 bg-nextkey-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-nextkey-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">{siteContent.pages.home.cta.title}</h2>
          <p className="text-xl mb-8">
            {siteContent.pages.home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteContent.links.gofundme}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl font-semibold">
                {siteContent.cta.donate}
              </Button>
            </a>
            <a href="/resources">
              <Button
                size="lg"
                className="bg-white text-nextkey-purple hover:bg-gray-100 rounded-xl font-semibold"
              >
                View Resources
              </Button>
            </a>
            <a href="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-nextkey-purple rounded-xl font-semibold"
              >
                {siteContent.cta.volunteer}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
