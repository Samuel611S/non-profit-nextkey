"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "@/app/content/site";

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

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-nextkey-purple text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faq.map((faqItem, index) => (
            <FAQItem key={index} question={faqItem.q} answer={faqItem.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

