export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/mission" }, // or "Who We Serve"
    { label: "Resources", href: "/resources" },
    { label: "Get Involved", href: "/get-involved" }, // newsletter, volunteer, partner
    { label: "Surveys", href: "/surveys" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" },
  ],
  // optional simplified variants to keep for later toggling:
  variants: {
    optionA: ["Home","About","Get Involved","Donate","Contact"],
    optionB: ["Home","Our Mission","Programs","Get Involved","Donate"]
  }
};

export const hero = {
  title: "Unlock Hope. Unlock Home.",
  description:
    "NextKey Housing Access Foundation is a Black-founded, equity-driven nonprofit dedicated to breaking down barriers to housing access. We serve voucher holders, low-income families, immigrants, LGBTQIA+ individuals, youth, and all people facing housing discrimination.\n\nWe are incorporated in New York and currently in pending status for federal 501(c)(3) approval. While awaiting approval, our focus is on building community, sharing resources, and preparing for long-term impact.",
  ctas: [
    { label: "Join Our Newsletter", href: "/get-involved#newsletter" },
    { label: "Donate Now", href: "/donate" }
  ]
};

export const howItWorks = {
  intro:
    "We're in our startup phase and building step by step, with an emphasis on the communities most impacted by housing inequities.",
  steps: [
    {
      title: "Community First",
      text: "Supporting voucher holders, low-income renters, and families navigating complex housing systems."
    },
    {
      title: "Education & Advocacy",
      text: "Offering resources and information to immigrant communities, youth, and LGBTQIA+ individuals so no one is left behind."
    },
    {
      title: "Scaling with Equity",
      text: "Designing future programs with direct community feedback, ensuring equity and dignity are embedded in every step."
    }
  ]
};

export const currentFocus = {
  bullets: [
    "Voucher holders and families: sharing resources and advocacy tools.",
    "Immigrant and LGBTQIA+ communities: promoting inclusion and fighting discrimination.",
    "Youth and young adults: building housing literacy and leadership opportunities.",
    "Donors and early supporters: helping us lay the groundwork while 501(c)(3) approval is pending."
  ]
};

export const faq = [
  {
    q: "Who do you serve?",
    a: "We serve voucher holders, low-income families, immigrants, LGBTQIA+ individuals, youth, and others facing barriers to housing."
  },
  {
    q: "Do you have programs right now?",
    a: "We are in our startup phase. Our immediate focus is on education, advocacy, and community-building while preparing to launch future programs."
  },
  {
    q: "Are donations tax-deductible?",
    a: "We are in pending status for 501(c)(3) approval. Donations made now support our mission but may not be tax-deductible until IRS approval is confirmed."
  }
];

export const footer = {
  legal:
    "NextKey Housing Access Foundation Inc. is a nonprofit incorporated in New York in 2025. We are currently in pending status for federal 501(c)(3) tax-exempt approval. Donations are being accepted to support our mission but may not be tax-deductible until IRS approval is confirmed. EIN and incorporation documents available upon request.",
  contact: {
    email: "nextkeyfoundation@gmail.com",
    city: "New York, NY",
    social: {
      facebook: "Next Key Housing Access Foundation",
      instagram: "@nextkeyhousing",
      x: "@nextkeyhousing"
    }
  },
  copyright: "© 2025 NextKey Housing Access Foundation. All rights reserved."
};

export const programsPage = {
  heading: "Our Mission in Action",
  intro:
    "We are just getting started, and while we don't yet run full programs, our focus is clear: supporting voucher holders, low-income families, immigrants, LGBTQIA+ individuals, and youth in building access to affordable housing.\n\nWe believe in starting small, listening to the community, and growing responsibly so we never overpromise and always deliver with dignity.",
  priorities: [
    {
      title: "Housing Navigation & Education",
      bullets: [
        "Housing literacy education",
        "Resource guides and referrals",
        "Advocacy for voucher holders"
      ]
    },
    {
      title: "Community Partnerships",
      bullets: [
        "Landlord engagement & awareness",
        "School and youth outreach",
        "Coalition building with nonprofits"
      ]
    },
    {
      title: "Future Focus Areas (as we grow)",
      text:
        "We plan to expand into structured programs once funding and capacity allow, including:",
      bullets: [
        "Direct support for families navigating housing applications and transitions",
        "Youth leadership and financial literacy initiatives",
        "Community outreach in schools, shelters, and immigrant centers"
      ]
    }
  ]
};

export const eventsPage = {
  heading: "Events",
  intro:
    "Join us as we build stronger communities together. Our events are designed to connect people with housing knowledge, resources, and opportunities. While we're still in our startup phase, we're offering light, accessible ways to get involved remotely.",
  upcoming: [
    {
      title: "NextKey Virtual Info Session",
      date: "Saturday, October 19, 2025",
      time: "1:00 PM – 2:00 PM (Online via Zoom)",
      blurb:
        "Learn about NextKey Housing Access Foundation, our mission, and how you can get involved as a community member, supporter, or early partner.",
      cta: { label: "Register Free", href: "/register/info-session-2025-10-19" }
    },
    {
      title: "Housing Literacy Webinar: Understanding Vouchers",
      date: "Saturday, November 16, 2025",
      time: "12:00 PM – 1:30 PM (Online via Zoom)",
      blurb:
        "A beginner-friendly workshop covering voucher basics, housing rights, and where to find resources.",
      cta: { label: "Register Free", href: "/register/webinar-vouchers-2025-11-16" }
    },
    {
      title: "Year-End Community Update (Virtual Town Hall)",
      date: "Saturday, December 14, 2025",
      time: "6:00 PM – 7:00 PM (Online via Zoom)",
      blurb:
        "Join us for a virtual community gathering to celebrate milestones, share updates on our pending 501(c)(3) status, and preview our 2026 goals.",
      cta: { label: "Register Free", href: "/register/townhall-2025-12-14" }
    }
  ],
  past: [
    {
      title: "Buy • Build • Bond: Black Business & Community Wealth Expo",
      date: "June 21, 2025 | Resorts World, Jamaica, NY",
      blurb:
        "A full day of networking, education, and community building focused on Black business development and wealth creation."
    },
    {
      title: "Community Resource Fair (Highlight)",
      date: "March 18, 2024",
      blurb:
        "Connected over 200 families with housing resources and support services."
    },
    {
      title: "Landlord Partnership Summit (Highlight)",
      date: "February 10, 2024",
      blurb:
        "Brought together property owners and advocates to discuss housing solutions."
    },
    {
      title: "Youth Leadership Workshop (Highlight)",
      date: "January 20, 2024",
      blurb:
        "Empowered young people with leadership skills and housing literacy basics."
    }
  ],
  stayConnectedCtas: [
    { label: "Join Our Mailing List", href: "/get-involved#newsletter" },
    { label: "Follow @nextkeyhousing", href: "https://instagram.com/nextkeyhousing" }
  ]
};

export const workshop = {
  route: "/workshop/housing-literacy",
  title: "Complete Housing Literacy in One Day",
  intro:
    "Our full-day virtual Housing Literacy Workshop is designed for renters, voucher holders, landlords, youth, and community members. The goal is simple: give everyone a shared foundation of knowledge to reduce discrimination, strengthen relationships, and build long-term housing stability.",
  howItWorks: [
    "Sign Up Once – Register with your email to get instant access.",
    "Full Workshop Access – Receive all 10 sections at once, organized into clear lessons and exercises.",
    "Self-Paced Completion – Designed to be finished in one day, but you can move through at your own pace.",
    "Certificates & Rewards – Complete all sections to earn a digital certificate of completion. Gift certificates available for eligible participants."
  ],
  sections: [
    "Introduction to Housing Access",
    "Understanding Voucher Programs",
    "Tenant Rights & Responsibilities",
    "Budgeting & Financial Literacy",
    "Housing Navigation Basics",
    "Landlord Responsibilities & Fair Housing Laws",
    "Building Positive Tenant-Landlord Relationships",
    "Conflict Resolution & Mediation",
    "Youth & Community Housing Literacy",
    "Pathways to Long-Term Stability"
  ],
  cta: { label: "Register for the Workshop", href: "/register/housing-literacy" },
  implementationNotes:
    "Implementation options: 1) PDF workbook package auto-emailed on signup; 2) Email delivery of all 10 modules; 3) Private webpage after signup with all modules."
};

// Type definitions for better TypeScript support
export type NavigationItem = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type EventItem = {
  title: string;
  date: string;
  time?: string;
  blurb: string;
  cta?: CTA;
};

export type PriorityItem = {
  title: string;
  bullets: string[];
  text?: string;
};

