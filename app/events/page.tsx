import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { eventsPage } from "@/app/content/site"

export default function EventsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">{eventsPage.heading}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {eventsPage.intro}
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventsPage.upcoming.map((event, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-nextkey-purple mb-4">{event.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-gray-700 mb-6">{event.blurb}</p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl"
                      asChild
                    >
                      <a href={event.cta.href}>
                        {event.cta.label}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventsPage.past.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-nextkey-purple">{event.title}</CardTitle>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{event.blurb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stay Connected CTAs */}
        <div className="bg-nextkey-purple text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6">
            Don't miss out on our upcoming events! Follow us on social media and join our mailing list to stay updated on all NextKey activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl"
              asChild
            >
              <a href={eventsPage.stayConnectedCtas[0].href}>
                {eventsPage.stayConnectedCtas[0].label}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-purple-500 hover:text-nextkey-purple rounded-xl"
              asChild
            >
              <a href={eventsPage.stayConnectedCtas[1].href}>
                {eventsPage.stayConnectedCtas[1].label}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
