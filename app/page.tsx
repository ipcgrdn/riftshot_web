import {
  Navigation,
  Hero,
  ValueProposition,
  Features,
  UseCases,
  Showcase,
  Pricing,
  CTA,
  Footer,
} from "@/components/main";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Features />
      <UseCases />
      <Showcase />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
