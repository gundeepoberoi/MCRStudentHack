"use client";
import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import Schedule from "@/components/sections/schedule";
import Team from "@/components/sections/team";

import { SparklesCore } from "@/components/ui/sparkles";
import Alt1 from "@/assets/logos/alt 1.svg";

import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("@/lib/features").then((res) => res.default);

export default function Home() {
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-8 relative">
          <div className="w-full h-full absolute inset-0">
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
          {/* <Alt1 className="transition ease-in-out delay-150 hover:scale-110 content-center" /> */}
          <About />
          <Schedule/>
          <Team />
          <FAQ />
        </main>
      </LazyMotion>
    </>
  );
}
