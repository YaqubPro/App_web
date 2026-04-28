import React from "react";
import { Link } from "react-router";
import {
  Rocket,
  Telescope,
  Satellite,
  Atom,
  Sparkles,
  Milestone,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ARTICLES, CATEGORIES } from "../data/articles";

const ICONS = {
  Atom,
  Rocket,
  Satellite,
  Sparkles,
};

export default function HomePage() {
  const featuredArticles = ARTICLES.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-inter text-slate-800">
      <Navbar transparent />

      <main>
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 opacity-60" />
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop"
              alt="Deep space nebula"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="star-field-soft absolute inset-0 pointer-events-none opacity-30" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium inline-flex items-center gap-2 mb-8 shadow-sm">
                <Sparkles size={16} />
                New: High-Res Pulsar Mapping
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight mb-6 leading-tight">
                Explore the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Cosmos
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
                Journey through the wonders of space, stars, and science. Discover the
                universe&apos;s mysteries through stunning visuals and expert insights.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/articles"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 py-4 font-semibold text-base flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all"
                >
                  Start Exploring <ArrowRight size={20} />
                </Link>
                <Link
                  to="/missions"
                  className="bg-white/80 backdrop-blur-sm text-slate-700 rounded-full px-8 py-4 font-semibold text-base hover:bg-white hover:shadow-lg transition-all"
                >
                  Mission Logs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl">
                    <Telescope className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-800">
                      500+
                    </div>
                    <div className="text-slate-500 text-sm">
                      Articles Published
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl">
                    <Rocket className="text-purple-600" size={28} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-800">
                      50K+
                    </div>
                    <div className="text-slate-500 text-sm">Active Readers</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-xl">
                    <Satellite className="text-pink-600" size={28} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-800">15</div>
                    <div className="text-slate-500 text-sm">
                      Expert Contributors
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Latest Discoveries
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Dive into our collection of articles exploring the frontiers of
                space science
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => {
                const Icon = ICONS[cat.icon];
                return (
                  <Link
                    key={cat.id}
                    to={`/categories/${cat.id}`}
                    className="bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-slate-700 hover:text-white rounded-full px-6 py-3 font-medium text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Icon size={16} />
                    {cat.label}
                  </Link>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm ${
                          article.statusType === "success"
                            ? "bg-emerald-500/90 text-white"
                            : article.statusType === "warning"
                              ? "bg-amber-500/90 text-white"
                              : "bg-blue-500/90 text-white"
                        }`}
                      >
                        {article.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-sm font-semibold text-blue-600 mb-3">
                      {article.category}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {article.readTime}
                      </div>
                      <div>{article.date}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/articles"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 py-4 font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="star-field-soft absolute inset-0" />
          </div>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <Sparkles className="mx-auto mb-6 text-white" size={48} />
              <h2 className="text-4xl font-bold text-white mb-4">
                Join the Cosmic Journey
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get weekly updates on the latest space discoveries, research, and
                missions delivered to your inbox.
              </p>
              <Link
                to="/subscribe"
                className="inline-flex bg-white text-blue-600 rounded-full px-8 py-4 font-bold hover:bg-blue-50 hover:shadow-xl transition-all"
              >
                Subscribe Now
              </Link>
              <p className="text-sm text-blue-200 mt-4">
                Join 50,000+ space enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes twinkle-soft {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .star-field-soft {
          background-image:
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 75% 25%, white, transparent);
          background-size: 200% 200%;
          animation: twinkle-soft 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}