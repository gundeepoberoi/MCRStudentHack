"use client";
import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import Schedule from "@/components/sections/schedule";
import Team from "@/components/sections/team";
import Footer from "@/components/footer/footer";

import { SparklesCore } from "@/components/ui/sparkles";
import { LazyMotion } from "framer-motion";
import Hero from "@/components/sections/hero";

const loadFeatures = () => import("@/lib/features").then((res) => res.default);

export default function Home() {
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 relative">
          <div className="w-screen h-screen fixed inset-0 overflow-hidden">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
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
