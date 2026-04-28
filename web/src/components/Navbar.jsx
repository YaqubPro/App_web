import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Search } from "lucide-react";

const NAV_LINKS = [
  { href: "/articles", label: "Discover" },
  { href: "/categories", label: "Categories" },
  { href: "/missions", label: "Missions" },
];

export function Navbar({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`backdrop-blur-xl sticky top-0 z-50 shadow-sm transition-all ${
        transparent && isHome
          ? "bg-white/70"
          : "bg-white/90 border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://ucarecdn.com/a71d37d1-8d4b-49bd-91f8-b7a4dbb59221/-/format/auto/"
              alt="UniversaPlex Logo"
              className="w-10 h-10 object-cover rounded-xl shadow-md"
            />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UniversaPlex
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors ${
                  location.pathname.startsWith(link.href)
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <button className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                <Search size={20} />
              </button>
              <Link
                to="/subscribe"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:shadow-xl hover:scale-105 transition-all"
              >
                Subscribe
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200 p-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block text-base font-medium text-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/subscribe"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full py-3 text-sm font-medium text-center block"
            onClick={() => setIsMenuOpen(false)}
          >
            Subscribe
          </Link>
        </div>
      )}
    </nav>
  );
}