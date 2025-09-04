import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, ShoppingBag, DollarSign } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">{siteContent.pages.getInvolved.title}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {siteContent.pages.getInvolved.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-nextkey-purple" />
                <CardTitle className="text-2xl text-nextkey-purple">Volunteer With Us</CardTitle>
              </div>
              <p className="text-gray-600">
                Join our team of dedicated volunteers and help us serve families in our community.
              </p>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-nextkey-purple hover:bg-purple-800"
                asChild
              >
                <a
                  href={siteContent.links.volunteerForm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteContent.cta.fillVolunteerForm}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Partner Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-nextkey-purple" />
                <CardTitle className="text-2xl text-nextkey-purple">Partner With Us</CardTitle>
              </div>
              <p className="text-gray-600">
                Interested in partnering with NextKey? We'd love to hear from you and explore collaboration opportunities.
              </p>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-nextkey-purple hover:bg-purple-800"
                asChild
              >
                <a
                  href={siteContent.links.partnerForm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteContent.cta.fillPartnerForm}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Ways to Support */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Sponsor a Client */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-8 w-8 text-nextkey-purple" />
                <CardTitle className="text-xl text-nextkey-purple">Sponsor-a-Client</CardTitle>
              </div>
              <p className="text-gray-600">
                Make a direct impact by sponsoring a family's housing assistance or program participation.
              </p>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl">
                {siteContent.cta.learnAboutSponsorship}
              </Button>
            </CardContent>
          </Card>

          {/* Merch Box */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <ShoppingBag className="h-8 w-8 text-nextkey-purple" />
                <CardTitle className="text-xl text-nextkey-purple">Merch Box (Nonprofit)</CardTitle>
              </div>
              <p className="text-gray-600">
                Support our mission while representing NextKey with our branded merchandise.
              </p>
              <p className="text-sm text-gray-500 mt-2">All proceeds go toward direct housing support.</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-nextkey-purple hover:bg-purple-800 rounded-xl" asChild>
                <a
                  href={siteContent.links.bonfire}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteContent.cta.shopMerch}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* GoFundMe */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="h-8 w-8 text-nextkey-purple" />
                <CardTitle className="text-xl text-nextkey-purple">Emergency Housing Fund</CardTitle>
              </div>
              <p className="text-gray-600">Your donation directly supports families facing housing emergencies.</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl" asChild>
                <a
                  href={siteContent.links.gofundme}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteContent.cta.supportEmergencyFund}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup Section */}
        <div id="newsletter" className="mt-16 bg-nextkey-purple text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg mb-6">
            Stay updated on our latest programs, events, and community impact. Get housing resources and opportunities delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white text-gray-900 placeholder-gray-500"
                required
              />
              <Button 
                type="submit" 
                className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl px-8"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-purple-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 