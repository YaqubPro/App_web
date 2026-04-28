import React from "react";
import { Link } from "react-router";
import { Telescope, Rocket, Users, Award, Mail, ArrowRight } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const TEAM = [
  {
    name: "Dr. Sarah Chen",
    role: "Editor-in-Chief",
    bio: "Astrophysicist, former NASA researcher",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    name: "Marcus Webb",
    role: "Head of Content",
    bio: "Science journalist, 15 years experience",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Senior Editor",
    bio: "Planetary scientist, Mars specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];

const STATS = [
  { value: "500+", label: "Articles Published" },
  { value: "50K+", label: "Active Readers" },
  { value: "15+", label: "Expert Contributors" },
  { value: "50+", label: "Countries Reached" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-inter text-slate-800">
      <Navbar />

      <main>
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About UniversaPlex
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Your gateway to exploring the wonders of the universe
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                UniversaPlex was founded with a singular vision: to make space
                science accessible, engaging, and inspiring for everyone. We
                believe that understanding our universe is fundamental to
                understanding our place in it.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                From the latest discoveries in exoplanet research to the
                historic missions returning samples from Mars, we cover the full
                breadth of space exploration—breaking down complex scientific
                concepts into compelling stories that captivate and educate.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you're a lifelong space enthusiast or just beginning your
                cosmic journey, UniversaPlex is your trusted guide to the stars.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white rounded-2xl p-6 shadow-md"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-blue-100 p-4 rounded-xl w-fit mb-4">
                  <Telescope className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Scientific Accuracy
                </h3>
                <p className="text-slate-600">
                  Every article is rigorously researched and reviewed by subject
                  matter experts to ensure accuracy.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-purple-100 p-4 rounded-xl w-fit mb-4">
                  <Rocket className="text-purple-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Passion for Discovery
                </h3>
                <p className="text-slate-600">
                  We believe space exploration drives human progress and
                  inspires the next generation of scientists.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-pink-100 p-4 rounded-xl w-fit mb-4">
                  <Users className="text-pink-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Community First
                </h3>
                <p className="text-slate-600">
                  Our readers are at the heart of everything we do. We tailor our
                  content to inform and inspire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm font-semibold text-blue-600 mb-1">
                      {member.role}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-8">
              Have questions or want to contribute? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 py-4 font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link
                to="/articles"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 rounded-full px-8 py-4 font-semibold hover:shadow-lg transition-all"
              >
                Read Our Articles
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}