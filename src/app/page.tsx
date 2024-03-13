import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import Schedule from "@/components/sections/schedule";
import { SparklesCore } from "@/components/sections/sparkles";
import { TimerContainer } from '@/components/sections/TimerContainer';
import Alt1 from "@/assets/logos/alt 1.svg";
import { Button, MovingBorder } from "@/components/sections/moving-border";
import { TypewriterEffectSmooth } from "@/components/sections/typewriter-effect";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-center p-4 sm:p-24 relative" >
      <div className="w-full h-full absolute inset-0"></div>
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
        <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-1">
          <div className="flex items-center justify-center">
            <Alt1 className="w-full transition ease-in-out delay-150 hover:scale-110 content-center lg:mt-[-20vw] lg:ml-[-10vw]" />
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-[-20vh] ">
          <form action="https://apply.mcrstudenthack.com/?r=apply">
              <Button type="submit">Register Now</Button>
            </form>
          </div>
        </div>
        
        <div className="xl:mt-[-30vh]" suppressHydrationWarning={true}>
        <TypewriterEffectSmooth className="xl:mt-[+20vh] mt-[+10vh] xl:mb-[-20vh] mb-[-5vh] justify-center" words={[
                                                {text: "Registration", className: "text-cyan-100"
                                                },{text: "Closes in:", className: "text-cyan-300"},
                                              ]} />
              <TimerContainer currentDate={new Date()} />
            </div>
        <About />
        <Schedule />
        <FAQ />
        
      </div>
      <Footer /> 
         
  </main>
  );
}