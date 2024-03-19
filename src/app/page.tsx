"use client";
import Navigation from "@/components/sections/navigation";
import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import Schedule from "@/components/sections/schedule";
import Team from "@/components/sections/team";
import Sponsors from "@/components/sections/sponsors/sponsors";
import Footer from "@/components/footer/footer";

import { LazyMotion } from "framer-motion";
import Hero from "@/components/sections/hero";
import LightBackground from "@/components/ui/light-background";

const loadFeatures = () => import("@/lib/features").then((res) => res.default);

export default function Home() {
  return (
    <>
      <LazyMotion features={loadFeatures}>
      <Navigation />

        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 relative">
          <div className="w-screen h-screen fixed inset-0 overflow-hidden">
            <LightBackground />
          </div>
          <Hero />
          <About />
          <Schedule />
          <Team />
          <Sponsors />
          <FAQ />
          <Footer />
        </main>
      </LazyMotion>
    </>
  );
}
