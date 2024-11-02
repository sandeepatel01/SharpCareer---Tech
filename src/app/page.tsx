// import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <Header /> */}
      <Navbar />
      <HeroSection />
      <ServiceSection />
    </main>
  );
}
