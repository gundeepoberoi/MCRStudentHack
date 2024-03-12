import About from "@/components/sections/about/about";
import FAQ from "@/components/sections/faq";
import Schedule from "@/components/sections/schedule/schedule";
import Team from "@/components/sections/team";
import { SparklesCore } from "@/components/sections/sparkles";

import Alt1 from "@/assets/logos/alt 1.svg";
import Alt2 from "@/assets/logos/alt 2.svg";
import Alt3 from "@/assets/logos/alt 3.svg";
import Helmet from "@/assets/helmet";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-center p-24 relative overflow-hidden">
      {/* <h1 className="text-6xl font-bold">MCRStudentHack</h1> */}
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
      <div className="flex min-h-screen flex-col items-center justify-center p-24 relative">
        <Alt1 className="transition ease-in-out delay-150 hover:scale-110 content-center" />
        <About />
        <Schedule />
        <Team />
        <FAQ />
      </div>
    </main>
  );
}
