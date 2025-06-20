"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home, Users, GraduationCap } from "lucide-react";

const faqItems = [
  {
    question: "What is NextKey Housing Access Foundation?",
    answer:
      "We are a community-rooted nonprofit focused on expanding housing access for underserved residents—especially voucher holders. We offer outreach, support services, events, and emergency aid.",
  },
  {
    question: "Do you provide housing placements?",
    answer:
      "Not directly. Our nonprofit supports housing access through education, outreach, partnerships, and tech advocacy. Placements are supported by our separate placement company, NextKey Global Solutions.",
  },
  {
    question: "Can I volunteer or donate?",
    answer:
      "Yes! You can support our mission through volunteering, donating, or spreading awareness. Visit our website to get involved.",
  },
  {
    question: "Are donations tax-deductible?",
    answer:
      "Our 501(c)(3) status is pending. Once approved, all donations will be tax-deductible retroactively.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-nextkey-purple"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
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
  );
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
                Where community meets code. NextKey is a Black-founded nonprofit blending technology with real-world
                impact to disrupt housing inequality and unlock access for all.
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
            NextKey uses smart housing tools to streamline the rental process, reduce discrimination, and empower
            underserved communities with equitable access to housing.
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
          <p className="text-xl mb-8">
            Join us in our mission to unlock hope and unlock home for families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.gofundme.com/f/led-by-us-built-for-all-a-new-vision-for-housing-access"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl">
                Donate Now
              </Button>
            </a>
            <a href="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-purple hover:bg-purple-500 hover:text-nextkey-purple rounded-xl"
              >
                Volunteer Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hidden Netlify Form Shim */}
      <div hidden>
        <form name="volunteer" data-netlify="true">
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="interests" />
        </form>

        <form name="partner" data-netlify="true">
          <input type="text" name="fullName" />
          <input type="text" name="organization" />
          <input type="email" name="email" />
          <textarea name="message" />
        </form>

        <form name="contact" data-netlify="true">
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="subject" />
          <textarea name="message" />
        </form>
      </div>
    </div>
  );
}
