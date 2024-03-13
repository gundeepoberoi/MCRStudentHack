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
      className="flex min-h-screen w-full flex-col items-center justify-center p-4 relative mb-12"
    >
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-1">
          <div className="flex items-center justify-center">
            <Alt1 className="w-full transition ease-in-out delay-150 hover:scale-110 content-center" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <form action="https://apply.mcrstudenthack.com/?r=apply">
              <Button type="submit">Register Now</Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col" suppressHydrationWarning={true}>
          <TypewriterEffectSmooth
            className="mt-[+10vh] mb-[-5vh] justify-center"
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
      </>
    </section>
  );
};

export default Hero;
