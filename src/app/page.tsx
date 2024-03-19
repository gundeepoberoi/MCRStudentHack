"use client";
import Footer from "@/components/footer/footer";
import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import Navigation from "@/components/sections/navigation";
import Schedule from "@/components/sections/schedule";
import Team from "@/components/sections/team";
import Hero from "@/components/sections/hero";

import LightBackground from "@/components/ui/light-background";
import { LazyMotion } from "framer-motion";

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
          <FAQ />
          <Footer />
        </main>
      </LazyMotion>
    </>
  );
}
