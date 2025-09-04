import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, TrendingUp } from "lucide-react"
import { programsPage } from "@/app/content/site"

export default function ProgramsPage() {
  const priorityIcons = [BookOpen, Users, TrendingUp]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">{programsPage.heading}</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto whitespace-pre-line">
            {programsPage.intro}
          </p>
        </div>

        {/* Priorities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {programsPage.priorities.map((priority, index) => {
            const IconComponent = priorityIcons[index]
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-nextkey-light-purple rounded-lg">
                      <IconComponent className="h-8 w-8 text-nextkey-purple" />
                    </div>
                    <CardTitle className="text-xl text-nextkey-purple">{priority.title}</CardTitle>
                  </div>
                  {priority.text && (
                    <p className="text-gray-600 mb-4">{priority.text}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {priority.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-nextkey-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{bullet}</span>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-lg mb-6">
            Whether you need support or want to help others, we're here to connect you with the right resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl" asChild>
              <a href="/get-involved">Get Involved</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-purple-500 hover:text-nextkey-purple rounded-xl"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
