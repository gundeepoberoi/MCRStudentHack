import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <section className="mt-48">
      <div className="about-wrapper min-w-xl px-16 py-8">
        <h1 className="text-5xl">About</h1>
        <div className="flex flex-wrap items-start mt-8">
          <div className="about-pictures w-full lg:w-5/12 h-auto">
            <Image className="w-full" width="480" height="320" src="" alt="placeholder" />
          </div>
          <div className="w-full lg:w-7/12 pt-4 lg:pl-8 lg:pt-0">
            <p>
              We are UniCS, the Computer Science Society at the esteemed University of Manchester.
              Our mission is to foster unity among students through a diverse array of student-led events,
              with our hackathons standing out as our flagship offerings, widely celebrated within our community.
              <br/><br/>
              In our pursuit of excellence, we proudly collaborate with Major League Hacking (MLH), adhering to their esteemed code of conduct.
              MLH, an organization that has successfully brought together a staggering 55,000 hackers, mirrors our own ambition to unite and empower the tech community.
              <br/><br/>
              Furthermore, we take pride in our past achievements, having secured victory in the 2015 autumn season,
              as well as triumphs in the 2018 and 2019 seasons.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-16 py-16">
          <div className="about-trophy w-16 h-16"></div>
          <div className="about-trophy w-16 h-16"></div>
          <div className="about-trophy w-16 h-16"></div>
          <div className="about-trophy w-16 h-16"></div>
          <div className="about-trophy w-16 h-16"></div>
          <div className="about-trophy w-16 h-16"></div>
          <div className="about-trophy w-16 h-16"></div>
          <div className="about-trophy w-16 h-16"></div>
        </div>
      </div>
    </section>
  );
}
