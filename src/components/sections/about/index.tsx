import Image, { StaticImageData } from "next/image";
import "./about.css";

import Image0 from "@/assets/images/about-image-0.jpg";
import Image1 from "@/assets/images/about-image-1.jpg";
import Image2 from "@/assets/images/about-image-2.jpg";
import TrophyImg from "@/assets/images/about-trophy.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

/**
 * List of keys of images
 */
type Keys = "-1" | "0" | "1" | "2";

/**
 * The dictionary/map for mapping the source of image with index
 * Used in AboutCarousel
 * How to ensure that the key entered must be valid? 
 */
const images: Record<number, StaticImageData> = {
  0: Image0, 
  1: Image1, 
  2: Image2, 
  "-1": Image0    // TODO Can create a black image
} satisfies Record<Keys, StaticImageData>;


/**
 * A function used to access the above map/dictionary
 * We write "keyof typeof images" instead of "number" because we are using TypeScript, which requires very tight type to access object's properties
 */
const accessImage = (i: keyof typeof images) => {
  if(images.hasOwnProperty(i)) {
    return images[i];
  } else {
    return images[-1];
  }
};

function AboutTrophy(props: {
  year: string;
  events: { title: string; attendees: string }[];
}) {
  return (
    <div className="text-center w-24 md:w-36">
      <Image
        className="mx-auto mb-2"
        src={TrophyImg}
        width="80"
        height="80"
        alt="trophy"
      />
      <p className="text-xs">{props.year}</p>
      {props.events.map((event: { title: string; attendees: string }, i) => {
        return (
          <div key={`trophy-event-${i}`}>
            <p className="text-xs break-words">{event.title}</p>
            <p className="text-xs">- {event.attendees} attendees</p>
          </div>
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
        <h1 className="text-5xl ml-8 text-white font-bold text-center">About Us</h1>
        <div className="flex flex-wrap items-stretch mt-8">
          <div className="w-full xl:w-5/12 mx-auto">
            <div className="max-w-[30rem] min-h-[20rem] mx-auto relative pr-6">
              {
              <AboutCarousel />
              /* <Image
                className="w-1/2 absolute top-0"
                src={Image0}
                alt="placeholder"
              />
              <Image
                className="w-1/2 absolute bottom-0"
                src={Image1}
                alt="placeholder"
              />
              <Image
                className="w-1/2 absolute right-4 bottom-1/2 translate-y-1/2"
                src={Image2}
                alt="placeholder"
              /> */}
            </div>
          </div>
          <div className="w-full xl:w-7/12 pt-8 xl:pl-8 xl:pt-0">
            <p className="text-white">
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
        <div className="flex flex-wrap justify-center gap-4 py-12 text-white">
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



function AboutCarousel() {
  return (
    <Carousel className="">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="h-1/1 relative items-center">
              <Image
                className="w-1/1 h-1/1 flex items-center justtify-center"
                // className="w-5/6 h-full flex-auto absolute right-6 bottom-1/2 translate-y-1/5"
                src={accessImage(index)}
                alt="placeholder"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}