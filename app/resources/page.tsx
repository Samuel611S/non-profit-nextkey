import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExternalLink, Home, Shield, Users, Calendar, Instagram, ChevronDown, FileText, Heart, Building, HelpCircle } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">
            Housing Help & Resources
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Learn about vouchers, tenant rights, and community resources in NYC.
          </p>
        </div>

        {/* Voucher Programs Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
              Voucher Programs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Understanding your housing assistance options in New York City
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Section 8
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Housing Choice Voucher Program helps low-income families afford decent, safe, and sanitary housing.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.nyc.gov/site/nycha/section-8/about-section-8.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  HPD Section 8 Voucher Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Learn about different types of Section 8 vouchers available through NYC Housing Preservation and Development.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.nyc.gov/site/hpd/services-and-information/section-8.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  NYS HCR HCV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  New York State Housing and Community Renewal Housing Choice Voucher program information and resources.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://hcr.ny.gov/hcv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  CityFHEPS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  City Family Homelessness and Eviction Prevention Supplement offers rental assistance for families in NYC.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.nyc.gov/site/hra/help/cityfheps.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  FHEPS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Family Homelessness & Eviction Prevention Supplement provides rental assistance to families at risk of homelessness.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://otda.ny.gov/programs/temporary-assistance/#fheps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Housing Voucher Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
              Emergency Housing Voucher (EHV)
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Emergency housing assistance for individuals and families experiencing homelessness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  NYC EHV Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Learn about the Emergency Housing Voucher program in New York City and how to apply.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.nyc.gov/site/nycha/section-8/emergency-housing-voucher.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Program Info
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  NYS HCR EHV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  New York State Emergency Housing Voucher program information and application process.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://hcr.ny.gov/ehv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Section 8 Voucher Types Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
              Other Section 8 Voucher Types
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Additional Section 8 voucher programs and specialized housing assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  HUD Project-Based Voucher Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Information about project-based vouchers that are tied to specific housing units.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.hud.gov/program_offices/public_indian_housing/programs/hcv/project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  HUD Enhanced Voucher Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Enhanced vouchers provide additional assistance for tenants in certain situations.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.hud.gov/program_offices/public_indian_housing/programs/hcv/enhanced"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specialized Programs Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
              Specialized Programs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Specialized housing assistance programs for specific populations and situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  SCRIE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Senior Citizen Rent Increase Exemption program for eligible seniors.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.nyc.gov/site/finance/benefits/rent-freeze-programs.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  DRIE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Disability Rent Increase Exemption program for eligible individuals with disabilities.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.nyc.gov/site/finance/benefits/rent-freeze-programs.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  HASA Housing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  HIV/AIDS Services Administration housing assistance and support services.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://www.nyc.gov/site/hra/help/hasa.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Essential tools and resources for housing assistance and tenant rights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  NYC Housing Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Apply for affordable housing opportunities throughout New York City.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://housingconnect.nyc.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Apply Now
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Tenant Rights Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Comprehensive guide to tenant rights and protections in New York State.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://ag.ny.gov/housing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Guide
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  NYC 311 Housing Assistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Get help with housing-related questions and connect with city services.
                </p>
                <Button
                  asChild
                  className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                >
                  <a
                    href="https://portal.311.nyc.gov/article/?kanumber=KA-02002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Get Help
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tenant Rights & Fees Section */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Shield className="h-16 w-16 text-nextkey-purple mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-nextkey-purple mb-4">
                  Tenant Rights & Fees
                </h2>
              </div>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Understanding your rights as a tenant is crucial for protecting yourself from unfair practices. 
                  In New York City, there are specific laws regarding broker fees and tenant protections that you should know about.
                </p>
                <p className="leading-relaxed">
                  Broker fees can be a significant financial burden when looking for housing. It's important to understand 
                  when these fees are legal and when they might be considered discriminatory or excessive.
                </p>
                <div className="bg-nextkey-light-purple p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-nextkey-purple mb-3">
                    Know Your Rights
                  </h3>
                  <p className="mb-4">
                    The NYC Department of Consumer Affairs provides comprehensive information about broker fees and tenant protections.
                  </p>
                  <Button
                    asChild
                    className="bg-nextkey-purple hover:bg-purple-800 text-white rounded-lg"
                  >
                    <a
                      href="https://www.nyc.gov/site/dca/about/FAQ-Broker-Fees.page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Learn About Broker Fees
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Partner Spotlight */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-nextkey-light-purple to-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Users className="h-16 w-16 text-nextkey-purple mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-nextkey-purple mb-4">
                  Community Partner Spotlight
                </h2>
              </div>
              <div className="text-center space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold text-nextkey-purple mb-4">
                    A Bridge to Breakthrough Project
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    For tips on Housing Connect applications, visit our community partner.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg"
                  >
                    <a
                      href="https://www.instagram.com/abbridgetobreakthroughproject"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="h-5 w-5" />
                      Follow on Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workshop Placeholder */}
        <div className="mb-16">
          <Card className="bg-white border-2 border-nextkey-purple">
            <CardContent className="p-8 text-center">
              <Calendar className="h-16 w-16 text-nextkey-purple mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-black mb-4">
                Housing Connect 101 Workshop
              </h2>
              <p className="text-xl text-nextkey-purple mb-2 font-semibold">
                November 7
              </p>
              <p className="text-sm text-gray-600 mb-6 italic">
                In collaboration with A Bridge to Breakthrough Project
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Join us for an informative workshop on navigating Housing Connect applications and understanding your housing options.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-nextkey-purple text-white hover:bg-purple-800 rounded-lg font-semibold"
              >
                <a
                  href="https://www.instagram.com/abbridgetobreakthroughproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  RSVP on Instagram
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Tips / FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
              Quick Tips & FAQ
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions and helpful tips about housing assistance programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-900">
                  What's the difference between FHEPS and CityFHEPS?
                </span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 py-4 bg-gray-50 rounded-b-lg border-x border-b border-gray-200">
                <p className="text-gray-700">
                  FHEPS (Family Homelessness & Eviction Prevention Supplement) is a state program administered by OTDA, 
                  while CityFHEPS is a city program administered by HRA. Both provide rental assistance, but they have 
                  different eligibility requirements and application processes. CityFHEPS is specifically for NYC residents, 
                  while FHEPS can be used throughout New York State.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-900">
                  Can I move out of NYC with my voucher?
                </span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 py-4 bg-gray-50 rounded-b-lg border-x border-b border-gray-200">
                <p className="text-gray-700">
                  Yes, you can move out of NYC with most Section 8 vouchers through a process called "porting." 
                  You'll need to contact your current housing authority to request a transfer to another area. 
                  The receiving housing authority must accept your voucher, and there may be waiting lists. 
                  CityFHEPS vouchers are typically only valid within NYC.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-900">
                  Do vouchers cover utilities?
                </span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 py-4 bg-gray-50 rounded-b-lg border-x border-b border-gray-200">
                <p className="text-gray-700">
                  It depends on the voucher program and the specific unit. Some vouchers include utilities in the rent, 
                  while others require tenants to pay utilities separately. The housing authority will determine the 
                  utility allowance based on the unit's utility setup. Always check with your case worker about 
                  utility responsibilities before signing a lease.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-900">
                  How long is the waitlist?
                </span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 py-4 bg-gray-50 rounded-b-lg border-x border-b border-gray-200">
                <p className="text-gray-700">
                  Waitlist times vary significantly by program and location. Section 8 waitlists can be 5-10 years or more 
                  in high-demand areas like NYC. CityFHEPS and FHEPS may have shorter wait times but still require meeting 
                  specific eligibility criteria. Emergency Housing Vouchers (EHV) are prioritized for those experiencing 
                  homelessness and may have faster processing times.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
            Need More Help?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our team is here to support you on your housing journey. Reach out for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-nextkey-purple text-nextkey-purple hover:bg-nextkey-purple hover:text-white rounded-xl"
              asChild
            >
              <a href="/get-involved">Get Involved</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
