import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, Users, GraduationCap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nextkey-light-purple to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-nextkey-purple mb-6">
                Unlock Hope,
                <br />
                Unlock Home
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                NextKey Housing Access Foundation is dedicated to breaking down barriers to stable housing and
                empowering communities through comprehensive support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-nextkey-purple hover:bg-purple-800 text-white rounded-xl">
                  Get Involved
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-nextkey-purple border-2 border-nextkey-purple hover:bg-nextkey-purple hover:text-white font-semibold rounded-xl"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/nextkey-logo-tagline.png"
                alt="NextKey Housing Access Foundation - Unlock Hope, Unlock Home"
                width={500}
                height={400}
                className="max-w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that stable housing is the foundation for thriving communities. Our mission is to provide
            emergency housing assistance, youth development programs, and comprehensive support services that empower
            individuals and families to achieve long-term housing stability and build generational wealth.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-nextkey-purple text-center mb-12">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-nextkey-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Families in Crisis</h3>
                <p className="text-gray-600">
                  Providing emergency housing assistance to families facing eviction or homelessness.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 text-nextkey-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Youth & Students</h3>
                <p className="text-gray-600">
                  Supporting young people through our NextKey Rising program and school-based outreach.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-nextkey-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Members</h3>
                <p className="text-gray-600">
                  Building stronger communities through education, advocacy, and resource connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-nextkey-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-nextkey-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join us in our mission to unlock hope and unlock home for families in need.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 rounded-xl">
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-purple hover:bg-purple-500 hover:text-nextkey-purple rounded-xl"
            >
              Volunteer Today
            </Button>
          </div>

          {/* QR Code Placeholder */}
          <div className="mt-12">
            <p className="text-sm mb-4">Scan to donate or volunteer:</p>
            <div className="w-32 h-32 bg-white mx-auto rounded-xl shadow-md flex items-center justify-center">
              <p className="text-nextkey-purple text-xs text-center">
                QR Code
                <br />
                Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
