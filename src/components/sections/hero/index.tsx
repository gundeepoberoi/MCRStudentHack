"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "../../ui/moving-border";
import { TypewriterEffectSmooth } from "../../ui/typewriter-effect";
import Socials from "./socials";
const TimerContainer = dynamic(() => import("../../ui/TimerContainer"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen w-full flex-col items-center justify-center p-4 relative mb-12"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-1 lg:gap-36">
        <div>
          <Image
            src={"/alt_2.png"}
            width={600}
            height={600}
            alt={"Logo"}
            className="w-full max-w-[500px] transition ease-in-out delay-150 hover:scale-110 content-center"
          />
        </div>
        <div>
          <form action="https://forms.gle/3eM3rCFDVYmvtZQk7">
            <Button
              className="text-cyan-100 text-sm"
              type="submit"
              containerClassName="bg-cyan-950"
            >
              Register Interest for <br />
              Future Hackathons
            </Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col" suppressHydrationWarning={true}>
        <div className="mt-16">
          <TypewriterEffectSmooth
            className="justify-center"
            words={[
              {
                text: "StudentHack2024",
                className: "text-cyan-100",
              },
              { text: "Has Ended!", className: "text-cyan-300" },
            ]}
          />
        </div>
        {/* <TimerContainer currentDate={new Date()} /> */}
      </div>

      <Socials />
    </section>
  );
};

export default Hero;
