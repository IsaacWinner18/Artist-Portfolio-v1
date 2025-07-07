"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Play,
  Download,
  Instagram,
  Twitter,
  Youtube,
  Music,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Quote,
  Star,
  Mic,
  Headphones,
  Users,
  Award,
} from "lucide-react"

export default function MusicianPortfolio() {
  const [selectedTrack, setSelectedTrack] = useState(null)

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Blur Effect */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751909610/Davido-7_e4rqd4.jpg')",
          filter: "blur(8px) brightness(0.3)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="backdrop-blur-md bg-black/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-white/10">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                  Adedeji Adeleke
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  Voice of the Streets • Sound of the Future
                </p>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Singer. Songwriter. Storyteller. Available for shows, collabs,
                  and record deals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full transition-all duration-200 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2" />
                  Listen Now
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 rounded-full transition-all duration-200">
                  <Download className="w-5 h-5 mr-2" />
                  Download EPK
                </button>
              </div>

              <div className="flex justify-center space-x-6 pt-4">
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Music className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      About Me
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Born and raised in the heart of Lagos, I've been crafting
                      melodies that speak to the soul since I was 12. My sound
                      blends Afrobeats with contemporary R&B, creating something
                      uniquely mine. Music isn't just what I do—it's who I am.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Origin Story
                        </h3>
                        <p className="text-gray-400">
                          Lagos, Nigeria - Where dreams meet reality
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Genres & Style
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-600/20 text-purple-300 border border-purple-500/30">
                            Afrobeats
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-300 border border-blue-500/30">
                            R&B
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600/20 text-green-300 border border-green-500/30">
                            Soul
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-600/20 text-orange-300 border border-orange-500/30">
                            Pop
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Why Music?
                        </h3>
                        <p className="text-gray-400">
                          To heal hearts, tell untold stories, and bridge
                          cultures through sound.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751910196/Davido-7-removebg-preview_tiilyd.png"
                      alt="Alex Rivers"
                      width={400}
                      height={500}
                      className="rounded-2xl object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Music Portfolio */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Music Portfolio
              </h2>
              <p className="text-gray-400 text-lg">My journey in sound</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Midnight Dreams",
                  date: "2024",
                  cover:
                    "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751910196/Davido-7-removebg-preview_tiilyd.png",
                },
                {
                  title: "City Lights",
                  date: "2024",
                  cover:
                    "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751910196/Davido-7-removebg-preview_tiilyd.png",
                },
                {
                  title: "Heartbreak Anthem",
                  date: "2023",
                  cover:
                    "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751910196/Davido-7-removebg-preview_tiilyd.png",
                },
                {
                  title: "Summer Vibes",
                  date: "2023",
                  cover: "/placeholder.svg?height=300&width=300",
                },
                {
                  title: "Lost in Lagos",
                  date: "2023",
                  cover: "/placeholder.svg?height=300&width=300",
                },
                {
                  title: "Rising Up",
                  date: "2022",
                  cover: "/placeholder.svg?height=300&width=300",
                },
              ].map((track, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-black/20 border border-white/10 hover:bg-black/30 transition-all duration-300 group rounded-2xl"
                >
                  <div className="p-6">
                    <div className="relative mb-4">
                      <Image
                        src={track.cover || "/placeholder.svg"}
                        alt={track.title}
                        width={300}
                        height={300}
                        className="rounded-lg w-full aspect-square object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <button className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors">
                          <Play className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {track.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{track.date}</p>
                    <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg transition-colors">
                      <Headphones className="w-4 h-4 mr-2" />
                      Listen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos & Performances */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                My Sound in Motion
              </h2>
              <p className="text-gray-400 text-lg">
                Real talent, real emotion — see it for yourself
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
                <div className="p-6">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Midnight Dreams - Official Video
                  </h3>
                  <p className="text-gray-400 text-sm">
                    2.1M views • 3 months ago
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
                <div className="p-6">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Live at The Shrine - Lagos
                  </h3>
                  <p className="text-gray-400 text-sm">
                    850K views • 1 month ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press & Recognition */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Press & Recognition
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
                <div className="p-6 text-center">
                  <Quote className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">
                    "A voice that commands attention and a presence that fills
                    any room."
                  </p>
                  <p className="text-purple-400 font-semibold">
                    - Pulse Nigeria
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
                <div className="p-6 text-center">
                  <Award className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">
                    "Top 10 Rising Stars to Watch"
                  </p>
                  <p className="text-blue-400 font-semibold">- NotJustOk</p>
                </div>
              </div>

              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
                <div className="p-6 text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">
                    "The future of Afrobeats is in safe hands."
                  </p>
                  <p className="text-yellow-400 font-semibold">- The Beat FM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gallery
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square relative group cursor-pointer"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Gallery image ${index + 1}`}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Shows */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Upcoming Shows
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  date: "Mar 15, 2025",
                  venue: "The Shrine",
                  location: "Lagos, Nigeria",
                },
                {
                  date: "Mar 22, 2025",
                  venue: "Terra Kulture",
                  location: "Lagos, Nigeria",
                },
                {
                  date: "Apr 5, 2025",
                  venue: "Freedom Park",
                  location: "Lagos, Nigeria",
                },
              ].map((show, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center space-x-2 text-purple-400">
                          <Calendar className="w-5 h-5" />
                          <span className="font-semibold">{show.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                          <Mic className="w-5 h-5" />
                          <span className="font-semibold">{show.venue}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin className="w-5 h-5" />
                          <span>{show.location}</span>
                        </div>
                      </div>
                      <button className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                        Get Tickets
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Record Label Pitch */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10 rounded-2xl">
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Looking for talent?
                </h2>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                  I'm unsigned and hungry. Explore my story, my numbers, and my
                  sound. Ready to take the next step with the right label
                  partnership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full transition-all duration-200">
                    <Download className="w-5 h-5 mr-2" />
                    Download Full EPK
                  </button>
                  <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 rounded-full transition-all duration-200">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Management
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Booking */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-400 text-lg">
                Ready to book or collaborate? Get in touch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-6">
                    Send a Message
                  </h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-6">
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">
                        booking@alexrivers.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">
                        +234 (0) 123 456 7890
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">
                        Management: Sarah Johnson
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button className="w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                      WhatsApp Direct
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Be the first to hear new drops
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  Join the inner circle and never miss a release, show, or
                  exclusive content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-white font-bold text-xl mb-2">
                  ALEX RIVERS
                </h3>
                <p className="text-gray-400">
                  © 2025 Alex Rivers. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Powered by Metavatech
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <nav className="flex space-x-6">
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="#music"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Music
                  </Link>
                  <Link
                    href="#videos"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Videos
                  </Link>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </nav>

                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Music className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
