import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Home, Shield, Users, Calendar, Instagram } from "lucide-react";

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
                    href="https://newdestinyhousing.org/housing-help/nyc-rental-subsidies/fheps/"
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
                    href="https://newdestinyhousing.org/housing-help/nyc-rental-subsidies/fheps/"
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
                    href="https://newdestinyhousing.org/housing-help/nyc-rental-subsidies/fheps/"
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
              <p className="text-xl text-nextkey-purple mb-6 font-semibold">
                November 7
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
