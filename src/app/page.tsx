import { Download } from "@/components/Download";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Subjects } from "@/components/Subjects";

export default function Home() {
  return (
    <div id="top" className="relative">
      <div className="ambient" aria-hidden>
        <div className="ambient__orb ambient__orb--1" />
        <div className="ambient__orb ambient__orb--2" />
        <div className="ambient__orb ambient__orb--3" />
        <div className="ambient__noise" />
      </div>

      <Hero />
      <Subjects />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}
