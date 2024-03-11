import Image from "next/image";
import "./about.css";

function AboutTrophy(props: {year: string, title: string}) {
  return (
    <div className="text-center">
      <Image className="border-solid border-2 mx-auto mb-2" src=""
        width="100" height="100" alt="trophy" />
      <h6>{props.year}</h6>
      <p>{props.title}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="my-24">
      <div className="about-wrapper min-w-xl px-16 py-8">
        <div className="about-overlay"></div>
        <h1 className="text-5xl">About</h1>
        <div className="flex flex-wrap items-start mt-8">
          <div className="w-full lg:w-5/12 h-auto border-solid border-2">
            <Image className="w-full" width="480" height="320" src="" alt="placeholder" />
          </div>
          <div className="w-full lg:w-7/12 pt-4 lg:pl-8 lg:pt-0">
            <p className="text-lg">
            We are a part of UniCS, the Computer Science Society at the esteemed University of Manchester. Our mission is to foster unity among students through a diverse array of student-led events; our hackathons stand out as our flagship offerings, widely celebrated within our community.
            Especially with our latest success in October, GreatUniHack2023, we take pride in the memories we can create for students and the projects that our talented students can create for the world. We continue to plan and execute 1-2 major hackathons a year, here in the heart of Manchester.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-16 py-16">
          <AboutTrophy year="2016" title="GreatUniHack" />
          <AboutTrophy year="2017" title="GreatUniHack" />
          <AboutTrophy year="2018" title="GreatUniHack" />
          <AboutTrophy year="2019" title="GreatUniHack" />
          <AboutTrophy year="2020" title="GreatUniHack" />
          <AboutTrophy year="2021" title="GreatUniHack" />
          <AboutTrophy year="2022" title="GreatUniHack" />
          <AboutTrophy year="2023" title="GreatUniHack" />
        </div>
      </div>
    </section>
  );
}
