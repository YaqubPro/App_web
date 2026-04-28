import React from "react";
import { Link } from "react-router";
import { Atom, Rocket, Satellite, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CATEGORIES, ARTICLES } from "../../data/articles";

const ICONS = {
  Atom,
  Rocket,
  Satellite,
  Sparkles,
};

const CATEGORY_COLORS = {
  astrophysics: { bg: "from-blue-500 to-blue-600", light: "bg-blue-50" },
  exploration: { bg: "from-purple-500 to-purple-600", light: "bg-purple-50" },
  technology: { bg: "from-pink-500 to-pink-600", light: "bg-pink-50" },
  phenomena: { bg: "from-amber-500 to-amber-600", light: "bg-amber-50" },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-inter text-slate-800">
      <Navbar />

      <main>
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Categories
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Browse articles by topic - from astrophysics to space exploration
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CATEGORIES.map((category) => {
                const Icon = ICONS[category.icon];
                const colors = CATEGORY_COLORS[category.id];
                const articleCount = ARTICLES.filter(
                  (a) => a.categoryId === category.id
                ).length;

                return (
                  <Link
                    key={category.id}
                    to={`/categories/${category.id}`}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-90`} />
                    <div className="relative p-8 md:p-12">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-4 rounded-2xl ${colors.light}`}>
                          <Icon className="text-white" size={40} />
                        </div>
                        <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                          <span className="font-medium">{articleCount} articles</span>
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {category.label}
                      </h2>
                      <p className="text-white/80">
                        Discover the latest in {category.label.toLowerCase()}{" "}
                        research and discoveries
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Browse by Topic
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => {
                const Icon = ICONS[category.icon];
                const colors = CATEGORY_COLORS[category.id];
                const articleCount = ARTICLES.filter(
                  (a) => a.categoryId === category.id
                ).length;

                return (
                  <Link
                    key={category.id}
                    to={`/categories/${category.id}`}
                    className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className={`p-2 rounded-lg ${colors.light}`}>
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {category.label}
                      </div>
                      <div className="text-sm text-slate-500">
                        {articleCount} articles
                      </div>
                    </div>
                  </Link>
                );
              })}
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