"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, Users, GraduationCap } from "lucide-react"

const faqItems = [
  {
    question: "What does the NextKey Housing Access Foundation do?",
    answer:
      "We’re a nonprofit dedicated to bridging the housing access gap through education, outreach, emergency aid, and tech-integrated solutions that uplift underserved communities.",
  },
  {
    question: "Are you a 501(c)(3)?",
    answer:
      "Our 501(c)(3) status is pending, but we are legally incorporated and actively serving communities.",
  },
  {
    question: "Can I volunteer or partner with you?",
    answer:
      "Yes! Please fill out our interest form—there are many ways to support our mission.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-nextkey-purple"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden text-gray-700 mt-2"
          >
            <div className="py-2">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nextkey-light-purple to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-nextkey-purple mb-6">
                Tech That Unlocks Housing, <br />
                Not Just Listings
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Where community meets code. NextKey is a Black-founded nonprofit blending technology with real-world impact
                to disrupt housing inequality and unlock access for all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl">
                  Get Involved
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-nextkey-purple border-2 border-nextkey-purple hover:bg-nextkey-purple hover:text-white font-semibold rounded-xl"
                >
                  Learn More
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

      {/* Built for Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
            Built for Impact. Designed to Scale.
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            NextKey uses smart housing tools to streamline the rental process, reduce discrimination, and empower underserved communities with equitable access to housing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
            <Card><CardContent className="p-6 flex items-start gap-4"><Users className="h-8 w-8 text-nextkey-purple mt-1" /><div><h3 className="text-xl font-semibold text-nextkey-purple mb-2">Empowers Underserved Renters</h3><p className="text-gray-700">Helps renters navigate complex housing systems with clarity, dignity, and support.</p></div></CardContent></Card>
            <Card><CardContent className="p-6 flex items-start gap-4"><Home className="h-8 w-8 text-nextkey-purple mt-1" /><div><h3 className="text-xl font-semibold text-nextkey-purple mb-2">Bridges Landlord Communication</h3><p className="text-gray-700">Simplifies relationships between property owners and renters through transparent engagement.</p></div></CardContent></Card>
            <Card><CardContent className="p-6 flex items-start gap-4"><Heart className="h-8 w-8 text-nextkey-purple mt-1" /><div><h3 className="text-xl font-semibold text-nextkey-purple mb-2">Equity-First Design</h3><p className="text-gray-700">Built with direct community feedback and equity embedded in every layer of the experience.</p></div></CardContent></Card>
            <Card><CardContent className="p-6 flex items-start gap-4"><GraduationCap className="h-8 w-8 text-nextkey-purple mt-1" /><div><h3 className="text-xl font-semibold text-nextkey-purple mb-2">Ready to Scale with Impact</h3><p className="text-gray-700">Backed by early traction, growing interest, and a model designed to scale across communities.</p></div></CardContent></Card>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that stable housing is the foundation for thriving communities. Our mission is to provide emergency housing assistance, youth development programs, and comprehensive support services that empower individuals and families to achieve long-term housing stability and build generational wealth.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-12">Built for Impact. Designed to Scale.</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card><CardContent className="p-6"><h3 className="text-xl font-semibold text-nextkey-purple mb-3">The Problem</h3><p className="text-gray-700">Underserved renters face discrimination, systemic barriers, and confusing bureaucracies that limit housing access.</p></CardContent></Card>
            <Card><CardContent className="p-6"><h3 className="text-xl font-semibold text-nextkey-purple mb-3">Our Approach</h3><p className="text-gray-700">NextKey blends technology, policy advocacy, and grassroots partnerships to create scalable, equity-first solutions.</p></CardContent></Card>
            <Card><CardContent className="p-6"><h3 className="text-xl font-semibold text-nextkey-purple mb-3">Social Impact</h3><p className="text-gray-700">Our programs are helping renters secure stable homes, landlords access vetted tenants, and communities thrive.</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-nextkey-purple text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-nextkey-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-nextkey-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join us in our mission to unlock hope and unlock home for families in need.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl">
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-purple hover:bg-purple-500 hover:text-nextkey-purple rounded-xl"
            >
              Volunteer Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
