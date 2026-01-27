import { Navigation } from "../../components/main/Navigation";
import { Footer } from "../../components/main/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog - Riftshot",
  description:
    "See what's new in Riftshot - Latest updates, improvements, and new features.",
};

const changelog = [
  {
    version: "1.0.1",
    date: "January 27, 2026",
    changes: [
      "Fixed loading screen",
      "Fixed default values",
      "Improved panel design",
    ],
  },
  {
    version: "1.0.0",
    date: "January 11, 2026",
    changes: [
      "Initial release of Riftshot",
      "Full-page screenshot capture",
      "8 split layout options (Single, Horizontal, Vertical, Grid, Left, Right, Quincunx, Bento)",
      "Professional frame styles and 40+ background presets",
      "Export up to 8K resolution in PNG and JPEG formats",
    ],
  },
];

export default function Changelog() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-[#FBF5DF]/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold font-playfair tracking-tight mb-2">
            Changelog
          </h1>
          <p className="text-sm md:text-lg text-black/50">
            See what&apos;s new in Riftshot
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-black/10" />

            {/* Timeline items */}
            <div className="space-y-12">
              {changelog.map((release, index) => (
                <div key={release.version} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-black" />

                  {/* Version header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <h2 className="text-2xl font-bold">v{release.version}</h2>
                    <span className="text-sm text-black/40">
                      {release.date}
                    </span>
                  </div>

                  {/* Changes list */}
                  <div className="bg-black/5 rounded-2xl p-6">
                    <ul className="space-y-3">
                      {release.changes.map((change, changeIndex) => (
                        <li
                          key={changeIndex}
                          className="text-sm md:text-base text-black/70 flex gap-3"
                        >
                          <span className="text-black/40">•</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
