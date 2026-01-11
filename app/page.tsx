import {
  Navigation,
  Hero,
  ValueProposition,
  Features,
  UseCases,
  Showcase,
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
      <CTA />
      <Footer />
    </main>
  );
}
