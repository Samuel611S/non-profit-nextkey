import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, ShoppingBag, DollarSign } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">Get Involved</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            There are many ways to support our mission and make a difference in your community. Join us in unlocking
            hope and unlocking home for families in need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Form */}
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
              <form
                name="volunteer"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you"
                className="space-y-4"
              >
                {/* Hidden for Netlify */}
                <input type="hidden" name="form-name" value="volunteer" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="volunteerFirstName">First Name</Label>
                    <Input id="volunteerFirstName" name="firstName" placeholder="Your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="volunteerLastName">Last Name</Label>
                    <Input id="volunteerLastName" name="lastName" placeholder="Your last name" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="volunteerEmail">Email</Label>
                  <Input id="volunteerEmail" name="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div>
                  <Label htmlFor="volunteerPhone">Phone</Label>
                  <Input id="volunteerPhone" name="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="volunteerInterests">Areas of Interest</Label>
                  <Textarea
                    id="volunteerInterests"
                    name="interests"
                    placeholder="Tell us about your skills and how you'd like to help..."
                    rows={4}
                    required
                  />
                </div>
                <Button className="w-full bg-nextkey-purple hover:bg-purple-800">
                  Submit Volunteer Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Partner Interest Form */}
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
              <form
                name="partner"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you"
                className="space-y-4"
              >
                {/* Hidden for Netlify */}
                <input type="hidden" name="form-name" value="partner" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="partnerName">Full Name</Label>
                    <Input id="partnerName" name="fullName" placeholder="Your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="partnerOrg">Organization</Label>
                    <Input id="partnerOrg" name="organization" placeholder="Organization name (if applicable)" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="partnerEmail">Email</Label>
                  <Input id="partnerEmail" name="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div>
                  <Label htmlFor="partnerMessage">Message</Label>
                  <Textarea
                    id="partnerMessage"
                    name="message"
                    placeholder="Let us know how you'd like to partner with us..."
                    rows={4}
                    required
                  />
                </div>
                <Button className="w-full bg-nextkey-purple hover:bg-purple-800">
                  Submit Partnership Interest
                </Button>
              </form>
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
                Learn About Sponsorship
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
                  href="https://www.bonfire.com/unlock-hope160unlock-housing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop Bonfire Merch
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
                  href="https://www.gofundme.com/f/led-by-us-built-for-all-a-new-vision-for-housing-access"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support our Emergency Housing Fund
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-nextkey-light-purple rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-4">Your Impact Matters</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Every volunteer hour, every donation, and every act of support helps us unlock hope and unlock home for
            families in our community. Together, we can build a future where everyone has access to safe, stable
            housing.
          </p>
        </div>
      </div>
    </div>
  );
}
