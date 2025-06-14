import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Buy • Build • Bond Black Business & Community Wealth Expo",
      date: "Saturday, June 21, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Resorts World, Jamaica, NY",
      description:
        "Join us for a day of networking, education, and community building focused on Black business development and wealth creation.",
      ticketLink: "queensnyevents.com",
      image: "/images/event-flyer.png",
    },
    {
      title: "Housing Rights Workshop",
      date: "Saturday, July 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center, Queens, NY",
      description: "Learn about your rights as a tenant and available resources for housing assistance.",
      ticketLink: "#",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "NextKey Rising Youth Summit",
      date: "Saturday, August 12, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Local High School, Queens, NY",
      description: "A day of workshops, mentorship, and activities designed to empower young people in our community.",
      ticketLink: "#",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const pastEvents = [
    {
      title: "Community Resource Fair",
      date: "March 18, 2024",
      description: "Connected over 200 families with housing resources and support services.",
      attendees: 200,
    },
    {
      title: "Landlord Partnership Summit",
      date: "February 10, 2024",
      description: "Brought together property owners and community advocates to discuss housing solutions.",
      attendees: 75,
    },
    {
      title: "Youth Leadership Workshop",
      date: "January 20, 2024",
      description: "Empowered 50 young people with leadership skills and college readiness training.",
      attendees: 50,
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">Events</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us at our upcoming events and see how we're building stronger communities together. From fundraisers to
            educational workshops, there's always something happening at NextKey.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-nextkey-purple line-clamp-2">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow space-y-4">
  <div>
    <div className="space-y-2">
      <div className="flex items-center text-gray-600">
        <Calendar className="h-4 w-4 mr-2" />
        <span className="text-sm">{event.date}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Clock className="h-4 w-4 mr-2" />
        <span className="text-sm">{event.time}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="h-4 w-4 mr-2" />
        <span className="text-sm">{event.location}</span>
      </div>
    </div>
    <p className="text-gray-700 text-sm mt-4">{event.description}</p>
  </div>

  <div className="flex flex-col items-center gap-2 min-h-[72px]">
    <Button className="w-full max-w-[240px] bg-nextkey-purple hover:bg-purple-800 rounded-xl">
      RSVP / Get Tickets
    </Button>
    <p className="text-xs text-center text-gray-500 h-4">
      {event.ticketLink !== "#" ? (
        <>
          Get tickets at:{" "}
          <a href={`https://${event.ticketLink}`} className="underline">
            {event.ticketLink}
          </a>
        </>
      ) : (
        <span>&nbsp;</span>
      )}
    </p>
  </div>
</CardContent>

              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold text-nextkey-purple mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-nextkey-purple">{event.title}</CardTitle>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex items-center text-nextkey-gold">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">{event.attendees} attendees</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 bg-nextkey-purple text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6">
            Don't miss out on our upcoming events! Follow us on social media and join our mailing list to stay updated
            on all NextKey activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl">
              Join Our Mailing List
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-purple-500 hover:text-nextkey-purple rounded-xl"
            >
              Follow @nextkeyhousing
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
