import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Shield, Users } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function DonatePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">Support Our Mission</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your donation helps us break down barriers to housing access and build stronger communities. 
            Every contribution makes a difference in the lives of families facing housing challenges.
          </p>
        </div>

        {/* Main Donation Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-nextkey-purple text-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-nextkey-gold" />
              </div>
              <CardTitle className="text-3xl mb-4 text-white">Emergency Housing Fund</CardTitle>
              <p className="text-lg text-white">
                Your donation directly supports families facing housing emergencies, provides housing literacy education, 
                and helps us build the infrastructure needed to serve our community.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                size="lg" 
                className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 text-xl px-12 py-6 rounded-xl font-bold"
                asChild
              >
                <a
                  href={siteContent.links.gofundme}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
              </Button>
              <p className="text-sm text-white mt-4">
                Secure donation through GoFundMe
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Direct Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your donation helps us provide direct assistance to families facing housing emergencies, 
                including emergency rent assistance and housing navigation support.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Education & Advocacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Support our housing literacy programs, tenant rights education, and advocacy efforts 
                to create systemic change in housing access.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <DollarSign className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Community Building</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Help us build the infrastructure and partnerships needed to create lasting change 
                in housing access and community support systems.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Legal Information */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-nextkey-purple mb-4">Tax Information</h2>
          <p className="text-gray-700 mb-4">
            {siteContent.legal.donations}
          </p>
          <p className="text-sm text-gray-600">
            {siteContent.legal.status}
          </p>
        </div>

        {/* Alternative Ways to Support */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-8">Other Ways to Support</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-nextkey-purple text-nextkey-purple hover:bg-nextkey-purple hover:text-white rounded-xl"
              asChild
            >
              <a href="/get-involved">Volunteer With Us</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-nextkey-purple text-nextkey-purple hover:bg-nextkey-purple hover:text-white rounded-xl"
              asChild
            >
              <a href="/get-involved">Partner With Us</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-nextkey-purple text-nextkey-purple hover:bg-nextkey-purple hover:text-white rounded-xl"
              asChild
            >
              <a href="/get-involved">Shop Our Merch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
