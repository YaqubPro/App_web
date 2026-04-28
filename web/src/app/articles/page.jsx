import React, { useState } from "react";
import { Link } from "react-router";
import { Clock, ArrowRight, Atom, Rocket, Satellite, Sparkles } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ARTICLES, CATEGORIES } from "../../data/articles";

const ICONS = {
  Atom,
  Rocket,
  Satellite,
  Sparkles,
};

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const filteredArticles =
    activeCategory === "all"
      ? ARTICLES
      : ARTICLES.filter((a) => a.categoryId === activeCategory);

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === "latest") return 0;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-inter text-slate-800">
      <Navbar />

      <main>
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Articles
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our collection of space science articles, from astrophysics to exploration
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-6 py-3 font-medium text-sm transition-all ${
                  activeCategory === "all"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 shadow-md"
                }`}
              >
                All Articles
              </button>
              {CATEGORIES.map((cat) => {
                const Icon = ICONS[cat.icon];
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-full px-6 py-3 font-medium text-sm flex items-center gap-2 transition-all ${
                      activeCategory === cat.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-white text-slate-700 hover:bg-slate-100 shadow-md"
                    }`}
                  >
                    <Icon size={16} />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm ${
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
                  <div className="p-6">
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      {article.category}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                        Read more <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {sortedArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-500">No articles found in this category.</p>
                <button
                  onClick={() => setActiveCategory("all")}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  View all articles
                </button>
              </div>
            )}
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