import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SurveysPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">
            Help Us Expand Housing Access Together
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your insights are crucial to our mission. We're conducting targeted surveys to better understand the housing challenges faced by different community members. By sharing your experiences, you're helping us design more effective programs and advocate for meaningful change in housing access.
          </p>
        </div>

        {/* Survey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tenants & Renters Card */}
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="text-6xl mb-4">✍</div>
              <CardTitle className="text-2xl text-nextkey-purple">Tenants & Renters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Share your experiences navigating the rental market, dealing with landlords, and accessing housing resources. Your voice helps us understand the real challenges renters face.
              </p>
              <Button 
                className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl"
                asChild
              >
                <a href="/surveys/tenant">
                  Take Tenant Survey
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Landlords & Property Owners Card */}
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="text-6xl mb-4">🏠</div>
              <CardTitle className="text-2xl text-nextkey-purple">Landlords & Property Owners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Help us understand the landlord perspective on housing vouchers, tenant relationships, and what support you need to provide quality, affordable housing.
              </p>
              <Button 
                className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl"
                asChild
              >
                <a href="/surveys/landlord">
                  Take Landlord Survey
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Case Managers & Housing Specialists Card */}
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="text-6xl mb-4">🗂</div>
              <CardTitle className="text-2xl text-nextkey-purple">Case Managers & Housing Specialists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Share your professional insights on housing barriers, effective interventions, and how we can better support the families you serve in finding stable housing.
              </p>
              <Button 
                className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl"
                asChild
              >
                <a href="/surveys/case-manager">
                  Take Case Manager Survey
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-nextkey-purple mb-4">Why Your Input Matters</h2>
            <p className="text-gray-700 mb-4">
              These surveys are part of our commitment to community-driven solutions. Your responses will directly inform our program development, advocacy efforts, and resource allocation.
            </p>
            <p className="text-sm text-gray-600">
              All responses are confidential and will be used solely for program improvement and advocacy purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
