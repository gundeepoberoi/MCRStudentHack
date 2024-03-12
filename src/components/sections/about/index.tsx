import Image from "next/image";
import "./about.css";

function AboutTrophy(props: {
  year: string;
  events: { title: string; attendees: string }[];
}) {
  return (
    <div className="text-center w-24 md:w-36">
      <Image
        className="border-solid border-2 mx-auto mb-2"
        src=""
        width="100"
        height="100"
        alt="trophy"
      />
      <p className="text-xs">{props.year}</p>
      {props.events.map((event: { title: string; attendees: string }) => {
        return (
          <>
            <p className="text-xs font-bold break-words">{event.title}</p>
            <p className="text-xs">- {event.attendees} attendees</p>
          </>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="my-24">
      <div className="about-wrapper min-w-xl px-8 md:px-16 py-8">
        <div className="about-overlay"></div>
        <h1 className="text-5xl ml-8">About</h1>
        <div className="flex flex-wrap items-start mt-8">
          <div className="w-full lg:w-5/12 h-auto border-solid border-2">
            <Image
              className="w-full"
              width="480"
              height="320"
              src=""
              alt="placeholder"
            />
          </div>
          <div className="w-full lg:w-7/12 pt-4 lg:pl-8 lg:pt-0">
            <p className="text-lg">
              We are a part of UniCS, the Computer Science Society at the
              esteemed University of Manchester. Our mission is to foster unity
              among students through a diverse array of student-led events; our
              hackathons stand out as our flagship offerings, widely celebrated
              within our community. Especially with our latest success in
              October, GreatUniHack2023, we take pride in the memories we can
              create for students and the projects that our talented students
              can create for the world. We continue to plan and execute 1-2
              major hackathons a year, here in the heart of Manchester.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-16 py-16">
          <AboutTrophy
            year="2023"
            events={[{ title: "GreatUniHack", attendees: "200" }]}
          />
          <AboutTrophy
            year="2022"
            events={[{ title: "GreatUniHack", attendees: "168" }]}
          />
          <AboutTrophy
            year="2021"
            events={[
              { title: "First Online GreatUniHack", attendees: "117" },
              { title: "First Online StudentHack", attendees: "96" },
            ]}
          />
          <AboutTrophy
            year="2020"
            events={[
              { title: "GreatUniHack", attendees: "218" },
              { title: "StudentHack", attendees: "117" },
            ]}
          />
          <AboutTrophy
            year="2019"
            events={[{ title: "GreatUniHack", attendees: "225" }]}
          />
          <AboutTrophy
            year="2018"
            events={[{ title: "GreatUniHack", attendees: "260" }]}
          />
          <AboutTrophy
            year="2017"
            events={[
              { title: "StudentHack", attendees: "350" },
              {
                title: "CS50 (Organised with Harvard University)",
                attendees: "150",
              },
            ]}
          />
          <AboutTrophy
            year="2016"
            events={[
              { title: "GreatUniHack", attendees: "200" },
              { title: "StudentHack", attendees: "260" },
            ]}
          />
          <AboutTrophy
            year="2015"
            events={[
              { title: "GreatUniHack", attendees: "300" },
              { title: "Local Hack Day", attendees: "150" },
            ]}
          />
          <AboutTrophy
            year="2014"
            events={[
              { title: "GreatUniHack", attendees: "80" },
              { title: "StudentHack", attendees: "260" },
            ]}
          />
          <AboutTrophy
            year="2013"
            events={[
              {
                title: "StudentHack (First Hackathon in Manchester)",
                attendees: "50",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
