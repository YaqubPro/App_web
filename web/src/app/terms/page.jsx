import React from "react";
import {
  FileText,
  Scale,
  AlertCircle,
  Terminal,
  ArrowLeft,
  Globe,
} from "lucide-react";

export default function TermsOfService() {
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
              <FileText size={14} />
              Service Terms v4.1
            </div>
            <h1 className="text-4xl font-semibold tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-[#6B7280]">Last updated: April 13, 2026</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                By accessing UniversaPlex, you agree to adhere to our technical
                standards and use policy. Our platform is a dedicated scientific
                resource; any use outside of research, education, or personal
                enlightenment is strictly monitored.
              </p>
            </section>

            <section className="bg-white rounded-xl border border-[#E5E7EB] p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-sm">
                  <Terminal className="text-[#2563EB]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Use Policy</h3>
                  <div className="space-y-2">
                    {[
                      "No automated scraping of high-res spectral data",
                      "Attribution required for all referenced mission logs",
                      "No injection of malicious telemetry into public forums",
                      "Maximum API call frequency: 100/min per researcher",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="text-sm text-[#6B7280] flex items-start"
                      >
                        <span className="text-[#9CA3AF] mr-2 font-mono">-</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Intellectual Property
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                While scientific data is universal, the synthesis and
                high-fidelity presentation on UniversaPlex are proprietary.
              </p>
              <div className="bg-[#F9FAFB] border-l-4 border-[#2563EB] p-4">
                <p className="text-sm italic text-[#4B5563]">
                  "Data derived from public missions remains public. The
                  architectural interpretation and visualization are property of
                  UniversaPlex Labs."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Limitation of Liability
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                Space is vast and unpredictable. UniversaPlex Labs provides data
                "as-is" from telemetry sensors. We are not liable for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: AlertCircle,
                    title: "Inaccuracies",
                    desc: "Variations in sensor data due to solar interference.",
                  },
                  {
                    icon: Scale,
                    title: "Compliance",
                    desc: "Misinterpretation of theoretical astrophysics models.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E5E7EB] rounded-lg p-4"
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

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. Governing Protocol
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                These terms are governed by the laws of the Digital Science
                Jurisdiction and the Anything platform's core compliance
                framework. Discrepancies will be resolved through automated
                arbitration.
              </p>
            </section>
          </div>

          <div className="mt-20 pt-8 border-t border-[#E5E7EB] text-center">
            <p className="text-xs text-[#6B7280]">
              By continuing to use this platform, you acknowledge your
              understanding of these terms.
            </p>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-[#E5E7EB] bg-[#F9FAFB] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#6B7280]">
            &copy; {new Date().getFullYear()} UniversaPlex Labs. Technical
            clarity through data.
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
