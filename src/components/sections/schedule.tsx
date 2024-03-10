"use client";
import { useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";

const Schedule = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //     observerRef.current = new IntersectionObserver(
  //       ([entry]) => {
  //         setIsIntersecting(entry.isIntersecting);
  //         if (entry.isIntersecting && scrollContainerRef.current) {
  //           scrollContainerRef.current.focus();
  //         }
  //       },
  //       { threshold: 1 }
  //     );
  //     if (scrollContainerRef.current) {
  //       console.log("observing");
  //       observerRef.current.observe(scrollContainerRef.current);
  //     }

  //     return () => {
  //       if (scrollContainerRef.current && observerRef.current) {
  //         console.log("unobserving");
  //         observerRef.current.unobserve(scrollContainerRef.current);
  //       }
  //     };
  //   }, []);

  //   useEffect(() => {
  //     const handleScroll = (event: {
  //       preventDefault: () => void;
  //       deltaY: number;
  //     }) => {
  //       if (isIntersecting && scrollContainerRef.current) {
  //         const { scrollTop, scrollHeight, clientHeight } =
  //           scrollContainerRef.current;
  //         const atBottom = scrollHeight - scrollTop === clientHeight;
  //         const atTop = scrollTop === 0;

  //         if ((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0)) {
  //           setIsIntersecting(false);
  //           if (observerRef.current) {
  //             observerRef.current.unobserve(scrollContainerRef.current);
  //           }
  //         } else {
  //           // event.preventDefault();
  //           const newScrollTop = scrollTop + event.deltaY;
  //           scrollContainerRef.current.scrollTop = newScrollTop;
  //         }
  //       }
  //     };

  //     window.addEventListener("wheel", handleScroll);

  //     return () => {
  //       window.removeEventListener("wheel", handleScroll);
  //     };
  //   }, [isIntersecting]);

  return (
    <section id="schedule" className="snap-start flex min-h-screen w-full">
      <div className="flex flex-col basis-full h-screen bg-neutral-950 justify-center items-center -ml-24 antialiased relative">
        <BackgroundBeams />
        <div className="flex flex-col z-5">
          <h1 className="text-8xl uppercase font-bold">Schedule</h1>
          <p className="pl-3">
            A 2 day event where you can play among us with Jakub{" "}
            <span className="text-red-500">ඞ</span>
          </p>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex flex-col basis-full h-screen snap-y snap-mandatory overflow-y-scroll -mr-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="flex h-screen justify-center items-center snap-start shrink-0">
          <div className="flex flex-col items-start">
            <h1 className="text-8xl">Day 1</h1>
          </div>
        </div>
        <div className="flex h-screen justify-center items-center snap-start shrink-0">
          <div className="flex flex-col items-start">
            <h1>Day 2</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
