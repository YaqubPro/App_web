import React from "react";
import { Link } from "react-router";
import { Milestone, ShieldCheck, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/70 backdrop-blur-sm py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://ucarecdn.com/a71d37d1-8d4b-49bd-91f8-b7a4dbb59221/-/format/auto/"
                alt="UniversaPlex Logo"
                className="w-10 h-10 object-cover rounded-xl shadow-md"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UniversaPlex
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Exploring the universe through science, discovery, and wonder.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider flex items-center gap-2">
              <Milestone size={16} className="text-blue-600" />
              Explore
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <Link to="/articles" className="hover:text-blue-600 transition-colors">
                  Latest Articles
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-blue-600 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/missions" className="hover:text-blue-600 transition-colors">
                  Mission Archive
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-600" />
              Company
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider flex items-center gap-2">
              <ExternalLink size={16} className="text-blue-600" />
              Connect
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <Link to="/subscribe" className="hover:text-blue-600 transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500">
            &copy; {currentYear} UniversaPlex. Exploring the cosmos, one discovery at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}