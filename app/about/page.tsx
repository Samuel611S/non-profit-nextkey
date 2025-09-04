import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Home, Shield } from "lucide-react";
import { siteContent } from "@/lib/content";
import { hero } from "@/app/content/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">About NextKey</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {hero.description}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-8 w-8 text-nextkey-purple" />
                <CardTitle className="text-2xl text-nextkey-purple">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                {siteContent.organization.mission}
              </p>
              <p className="text-gray-600">
                We are dedicated to breaking down barriers to housing access and ensuring every family has the resources and dignity they need to find and maintain stable housing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Home className="h-8 w-8 text-nextkey-purple" />
                <CardTitle className="text-2xl text-nextkey-purple">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                A world where housing access is equitable, where every family has a safe and stable place to call home, and where communities are strengthened through mutual support and understanding.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Organization Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Legal Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                {siteContent.legal.status}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Service Area</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {siteContent.organization.serviceArea}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Founded</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Black-founded nonprofit incorporated in New York, 2025
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-6">Get Involved</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join us in our mission to unlock hope and unlock home for families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl"
              asChild
            >
              <a href="/get-involved">Get Involved</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-nextkey-purple text-nextkey-purple hover:bg-nextkey-purple hover:text-white rounded-xl"
              asChild
            >
              <a href="/donate">Donate Now</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
