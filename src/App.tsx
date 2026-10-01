import { CustomCursor } from "@/components/animation/CustomCursor";
import { ScrollProgress } from "@/components/animation/ScrollProgress";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Academics } from "@/components/sections/Academics";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { Campus } from "@/components/sections/Campus";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { StudentLife } from "@/components/sections/StudentLife";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyTIS } from "@/components/sections/WhyTIS";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[80] -translate-y-24 bg-accent px-4 py-3 text-sm font-semibold text-accent-ink transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Academics />
        <WhyTIS />
        <Campus />
        <StudentLife />
        <Testimonials />
        <AdmissionsCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
