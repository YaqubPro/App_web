import React from "react";
import { Link, useParams } from "react-router";
import { Clock, ArrowLeft, Calendar, User, Tag, Share2, Bookmark } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { getArticleBySlug, CATEGORIES } from "../../../data/articles";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white font-inter text-slate-800">
        <Navbar />
        <main className="py-24 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-slate-600 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ArrowLeft size={20} /> Back to Articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = CATEGORIES.filter((c) => c.id === article.categoryId).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-inter text-slate-800">
      <Navbar />

      <main>
        <article>
          <header className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full pb-16">
                <Link
                  to="/articles"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft size={20} /> Back to Articles
                </Link>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white rounded-full px-4 py-1.5 text-sm font-medium">
                    {article.category}
                  </span>
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                    {article.excerpt}
                  </p>
                  <div
                    className="space-y-6"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-4">Share this article</h3>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors">
                      <Share2 size={18} /> Share
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors">
                      <Bookmark size={18} /> Save
                    </button>
                  </div>
                </div>
              </div>

              <aside className="lg:w-64 space-y-8">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-slate-800 mb-4">Quick Facts</h4>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-2">
                      <Tag size={16} className="text-blue-600 mt-0.5" />
                      <div>
                        <span className="text-slate-500">Category</span>
                        <div className="font-medium text-slate-800">
                          {article.category}
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Calendar size={16} className="text-blue-600 mt-0.5" />
                      <div>
                        <span className="text-slate-500">Published</span>
                        <div className="font-medium text-slate-800">
                          {article.date}
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock size={16} className="text-blue-600 mt-0.5" />
                      <div>
                        <span className="text-slate-500">Read Time</span>
                        <div className="font-medium text-slate-800">
                          {article.readTime}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 mb-4">Related Categories</h4>
                  <div className="space-y-2">
                    <Link
                      to={`/categories/${article.categoryId}`}
                      className="block px-4 py-2 bg-slate-50 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {article.category}
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .prose h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .prose p {
          color: #475569;
          line-height: 1.75;
        }
      `}</style>
    </div>
  );
}