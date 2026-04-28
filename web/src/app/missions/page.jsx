import React from "react";
import { Link } from "react-router";
import { Rocket, Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const MISSIONS = [
  {
    id: "artemis-iii",
    name: "Artemis III",
    subtitle: "Lunar Surface Return",
    description: "The first crewed lunar landing since Apollo 17, landing astronauts on the Moon's south pole region.",
    status: "Upcoming",
    statusColor: "bg-blue-500",
    target: "Moon (South Pole)",
    launchDate: "September 2026",
    agency: "NASA",
    image: "https://images.unsplash.com/photo-1446776653964-f2c05014a7d4?w=800&h=500&fit=crop",
  },
  {
    id: "europa-clipper",
    name: "Europa Clipper",
    subtitle: "Ocean World Investigation",
    description: "Investigating whether Jupiter's moon Europa could harbor conditions suitable for life.",
    status: "In Progress",
    statusColor: "bg-amber-500",
    target: "Jupiter's Moon Europa",
    launchDate: "October 2024",
    agency: "NASA",
    image: "https://images.unsplash.com/photo-1614730341194-75c607400070?w=800&h=500&fit=crop",
  },
  {
    id: "mars-sample-return",
    name: "Mars Sample Return",
    subtitle: "Geological Collection",
    description: "Returning Martian samples collected by the Perseverance rover to Earth for detailed analysis.",
    status: "In Progress",
    statusColor: "bg-amber-500",
    target: "Mars",
    launchDate: "2027",
    agency: "NASA / ESA",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e44b0c?w=800&h=500&fit=crop",
  },
  {
    id: "dragonfly",
    name: "Dragonfly",
    subtitle: "Titan Aerial Exploration",
    description: "A rotorcraft that will fly to multiple locations on Saturn's moon Titan, exploring its organic-rich surface.",
    status: "Upcoming",
    statusColor: "bg-blue-500",
    target: "Titan (Saturn's Moon)",
    launchDate: "2028",
    agency: "NASA",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
  },
  {
    id: "james-webb",
    name: "James Webb Space Telescope",
    subtitle: "Infrared Observatory",
    description: "The most powerful space telescope ever built, studying the early universe and exoplanets.",
    status: "Active",
    statusColor: "bg-emerald-500",
    target: "L2 Point",
    launchDate: "December 2021",
    agency: "NASA / ESA / CSA",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=500&fit=crop",
  },
  {
    id: "voyager",
    name: "Voyager 1 & 2",
    subtitle: "Interstellar Probes",
    description: "The farthest human-made objects in space, now exploring interstellar space beyond our solar system.",
    status: "Active",
    statusColor: "bg-emerald-500",
    target: "Interstellar Space",
    launchDate: "1977",
    agency: "NASA",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop",
  },
];

export default function MissionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-inter text-slate-800">
      <Navbar />

      <main>
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Space Missions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Follow humanity's journey to explore the cosmos through past, present, and future missions
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MISSIONS.map((mission) => (
                <div
                  key={mission.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={mission.image}
                      alt={mission.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm text-white ${mission.statusColor}`}
                      >
                        {mission.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-blue-600 mb-1">
                      {mission.agency}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {mission.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4">{mission.subtitle}</p>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {mission.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {mission.target}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {mission.launchDate}
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Track Mission Updates
            </h2>
            <p className="text-slate-600 mb-8">
              Stay informed about the latest developments in space exploration
            </p>
            <Link
              to="/subscribe"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 py-4 font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Subscribe to Mission Updates <ExternalLink size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}