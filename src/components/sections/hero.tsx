"use client";
import dynamic from "next/dynamic";
import { Button } from "../ui/moving-border";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Alt1 from "@/assets/logos/alt 1.svg";
const TimerContainer = dynamic(() => import("../ui/TimerContainer"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen w-full flex-col items-center justify-center p-24 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-1">
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
        <TypewriterEffectSmooth
          className="xl:mt-[+20vh] mt-[+10vh] xl:mb-[-20vh] mb-[-5vh] justify-center"
          words={[
            {
              text: "Registration",
              className: "text-cyan-100",
            },
            { text: "Closes in:", className: "text-cyan-300" },
          ]}
        />
        <TimerContainer currentDate={new Date()} />
      </div>
    </section>
  );
};

export default Hero;
