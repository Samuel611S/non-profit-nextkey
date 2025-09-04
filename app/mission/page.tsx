import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Shield, Home } from "lucide-react";
import { currentFocus } from "@/app/content/site";

export default function MissionPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">Our Mission</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We serve voucher holders, low-income families, immigrants, LGBTQIA+ individuals, youth, and all people facing housing discrimination. Our mission is to break down barriers to housing access and build stronger communities.
          </p>
        </div>

        {/* Who We Serve */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple text-center mb-8">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Home className="h-12 w-12 text-nextkey-purple" />
                </div>
                <CardTitle className="text-xl text-nextkey-purple">Voucher Holders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Supporting families navigating the housing voucher system and connecting them with landlord partners.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-nextkey-purple" />
                </div>
                <CardTitle className="text-xl text-nextkey-purple">Low-Income Families</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Providing resources and support for families facing housing instability and financial challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-nextkey-purple" />
                </div>
                <CardTitle className="text-xl text-nextkey-purple">Immigrant Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Offering culturally sensitive support and resources for immigrant families navigating housing systems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-nextkey-purple" />
                </div>
                <CardTitle className="text-xl text-nextkey-purple">LGBTQIA+ Individuals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Creating safe and inclusive housing opportunities for LGBTQIA+ community members.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-nextkey-purple" />
                </div>
                <CardTitle className="text-xl text-nextkey-purple">Youth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Empowering young people with housing literacy and leadership skills for their future.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-nextkey-purple" />
                </div>
                <CardTitle className="text-xl text-nextkey-purple">All Facing Discrimination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Standing with anyone experiencing housing discrimination and fighting for fair access.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Focus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple text-center mb-8">Our Current Focus</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-nextkey-purple text-center mb-4">Building Community & Sharing Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-lg text-gray-700">
                  {currentFocus.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-nextkey-gold rounded-full mr-3 mt-3 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Together, we can unlock hope and unlock home for families in need.
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
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
