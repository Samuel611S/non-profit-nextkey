import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Users, GraduationCap, School } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Emergency Housing Aid",
      icon: Home,
      description:
        "Immediate financial assistance for families facing eviction, utility shutoffs, or other housing emergencies.",
      features: [
        "Rental assistance and security deposits",
        "Utility payment support",
        "Emergency hotel vouchers",
        "Case management services",
      ],
    },
    {
      title: "NextKey Rising (Youth Program)",
      icon: GraduationCap,
      description: "Empowering young people with life skills, education support, and pathways to homeownership.",
      features: [
        "Financial literacy workshops",
        "College and career readiness",
        "Mentorship programs",
        "Leadership development",
      ],
    },
    {
      title: "Landlord Retention",
      icon: Users,
      description: "Working with property owners to maintain stable housing for tenants through mediation and support.",
      features: [
        "Tenant-landlord mediation",
        "Rental payment plans",
        "Property maintenance assistance",
        "Legal advocacy support",
      ],
    },
    {
      title: "School-based Outreach",
      icon: School,
      description:
        "Connecting with students and families through educational institutions to provide early intervention.",
      features: [
        "On-site resource fairs",
        "Parent education workshops",
        "Student support services",
        "Community partnerships",
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">Our Programs</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We offer comprehensive programs designed to address the root causes of housing instability and empower
            individuals and families to achieve long-term success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-nextkey-light-purple rounded-lg">
                      <IconComponent className="h-8 w-8 text-nextkey-purple" />
                    </div>
                    <CardTitle className="text-2xl text-nextkey-purple">{program.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-nextkey-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-nextkey-purple text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help or Want to Support Our Programs?</h2>
          <p className="text-lg mb-6">
            Whether you need assistance or want to help others, we're here to connect you with the right resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl">
              Apply for Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-purple-500 hover:text-nextkey-purple rounded-xl"
            >
              Support Our Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
