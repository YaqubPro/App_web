import React, { useState } from "react";
import { Sparkles, CheckCircle, Mail, ArrowRight } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  if (subscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-inter text-slate-800">
        <Navbar />
        <main className="py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">
                You&apos;re In!
              </h1>
              <p className="text-slate-600 mb-8">
                Welcome to the cosmic community. Check your inbox for a confirmation
                email.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/articles"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-3 font-medium hover:shadow-lg transition-all"
                >
                  Explore Articles
                </a>
                <a
                  href="/"
                  className="bg-slate-100 text-slate-700 rounded-full px-6 py-3 font-medium hover:bg-slate-200 transition-all"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-inter text-slate-800">
      <Navbar />

      <main>
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join the Cosmic Journey
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get weekly updates on space discoveries, missions, and research
              delivered to your inbox.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-fit mx-auto p-4 rounded-2xl mb-4">
                  <Sparkles className="text-blue-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-slate-600 mt-2">
                  Join 50,000+ space enthusiasts worldwide
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                  >
                    Subscribe <ArrowRight size={20} />
                  </button>
                </div>
              </form>

              <p className="text-center text-sm text-slate-500 mt-4">
                Unsubscribe anytime. No spam, just space.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              What You&apos;ll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                  <Sparkles className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">
                  Latest Discoveries
                </h3>
                <p className="text-slate-600 text-sm">
                  Weekly roundup of the most exciting space news and discoveries
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">
                  Mission Updates
                </h3>
                <p className="text-slate-600 text-sm">
                  Breaking news on ongoing space missions around the solar system
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="bg-pink-100 p-3 rounded-xl w-fit mb-4">
                  <Sparkles className="text-pink-600" size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">
                  Exclusive Content
                </h3>
                <p className="text-slate-600 text-sm">
                  Early access to articles and behind-the-scenes content
                </p>
              </div>
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