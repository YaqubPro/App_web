import React from "react";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  ArrowLeft,
  Globe,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-inter text-[#111827]">
      {/* Simple Header */}
      <nav className="border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://ucarecdn.com/a71d37d1-8d4b-49bd-91f8-b7a4dbb59221/-/format/auto/"
                  alt="UniversaPlex Logo"
                  className="w-6 h-6 object-cover rounded-sm"
                />
                <span className="text-lg font-semibold tracking-tight">
                  UniversaPlex
                </span>
              </a>
            </div>
            <a
              href="/"
              className="text-sm font-medium text-[#6B7280] hover:text-[#111827] flex items-center gap-1"
            >
              <ArrowLeft size={16} /> Back to Hub
            </a>
          </div>
        </div>
      </nav>

      <main className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-[#EFF6FF] text-[#2563EB] rounded-full px-3 py-1 text-xs font-medium inline-flex items-center gap-1.5 mb-4">
              <ShieldCheck size={14} />
              Privacy Protocol v2.4
            </div>
            <h1 className="text-4xl font-semibold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#6B7280]">Last updated: April 13, 2026</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. Data Collection Architecture
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                Our systems are designed to minimize data footprint. We collect
                specific telemetry to improve the high-fidelity delivery of
                scientific data.
              </p>
              <div className="space-y-3">
                {[
                  "Device telemetry (OS version, browser engine)",
                  "Interaction logs for orbital mapping tools",
                  "Optional email credentials for journal subscription",
                  "IP-based geolocation for regional data latency optimization",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-sm text-[#6B7280] py-1 flex items-start"
                  >
                    <span className="text-[#9CA3AF] mr-2 font-mono">-</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-[#E5E7EB] rounded-sm">
                  <Lock className="text-[#2563EB]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Security Standard</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    All data is encrypted in transit and at rest using AES-256
                    protocols. We utilize the Anything platform's secure
                    serverless architecture to ensure zero-trust access to
                    internal telemetry.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Cookies and Tracking
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                We use "Ghost Cookies"—minimal local storage tokens that do not
                track you across the web. They are strictly functional for:
              </p>
              <div className="space-y-3">
                {[
                  "Maintaining session persistence",
                  "Remembering taxonomy preferences",
                  "Load balancing scientific data requests",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-sm text-[#6B7280] py-1 flex items-start"
                  >
                    <span className="text-[#9CA3AF] mr-2 font-mono">-</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Data Subject Rights
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                Under the Global Scientific Data Accord (GSDA), users have full
                control over their telemetry. You may request:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: Eye,
                    title: "Access",
                    desc: "Request a full export of your interaction data.",
                  },
                  {
                    icon: Database,
                    title: "Deletion",
                    desc: "Purge all data from our active telemetry logs.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E5E7EB] rounded-lg p-4 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="text-[#2563EB]" size={16} />
                      <span className="font-semibold text-sm">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-20 pt-8 border-t border-[#E5E7EB] text-center">
            <p className="text-xs text-[#6B7280]">
              Questions regarding these protocols? Contact{" "}
              <span className="text-[#2563EB] font-medium">
                privacy@universaplex.io
              </span>
            </p>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-[#E5E7EB] bg-[#F9FAFB] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#6B7280]">
            &copy; {new Date().getFullYear()} UniversaPlex Labs. All rights
            reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        body {
          font-family: 'Inter', -apple-system, sans-serif;
          background-color: white;
        }
      `}</style>
    </div>
  );
}
