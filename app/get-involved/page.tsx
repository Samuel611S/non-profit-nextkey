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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeWITqTPOOPxSnCwWc9bwzWbTPLffX9stoWuu2ZiEkvznHD3g/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill Volunteer Form
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdGfG2EhOFw9TFEz2mWq5J_GkW0u9YqkAnhIvqdB3ZdwEHbAA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill Partner Interest Form
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
      </div>
    </div>
  );
} 