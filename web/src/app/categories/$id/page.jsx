import React from "react";
import { Link, useParams } from "react-router";
import { Atom, Rocket, Satellite, Sparkles, ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { CATEGORIES, getArticlesByCategory, getCategoryById } from "../../../data/articles";

const ICONS = {
  Atom,
  Rocket,
  Satellite,
  Sparkles,
};

const CATEGORY_COLORS = {
  astrophysics: { bg: "from-blue-500 to-blue-600", light: "bg-blue-50", text: "text-blue-600" },
  exploration: { bg: "from-purple-500 to-purple-600", light: "bg-purple-50", text: "text-purple-600" },
  technology: { bg: "from-pink-500 to-pink-600", light: "bg-pink-50", text: "text-pink-600" },
  phenomena: { bg: "from-amber-500 to-amber-600", light: "bg-amber-50", text: "text-amber-600" },
};

export default function CategoryDetailPage() {
  const { id } = useParams();
  const category = getCategoryById(id);
  const articles = getArticlesByCategory(id);

  if (!category) {
    return (
      <div className="min-h-screen bg-white font-inter text-slate-800">
        <Navbar />
        <main className="py-24 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="text-slate-600 mb-8">
              The category you're looking for doesn't exist.
            </p>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ArrowLeft size={20} /> Back to Categories
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = ICONS[category.icon];
  const colors = CATEGORY_COLORS[id] || CATEGORY_COLORS.astrophysics;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 font-inter text-slate-800">
      <Navbar />

      <main>
        <section className={`py-16 lg:py-24 bg-gradient-to-br ${colors.bg}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={20} /> Back to Categories
            </Link>
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-2xl bg-white/20`}>
                <Icon className="text-white" size={48} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {category.label}
                </h1>
                <p className="text-xl text-white/80">
                  {articles.length} articles in this category
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
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
                          Read <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-slate-500">No articles in this category yet.</p>
                <Link to="/categories" className="mt-4 text-blue-600 hover:underline inline-block">
                  View all categories
                </Link>
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