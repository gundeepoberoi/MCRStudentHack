"use client";
import React from "react";
import Member from "@/components/sections/team/member-card";
import { Members } from "@/lib/team";
import { getSplitMembers } from "@/lib/team";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Team() {
  const members_split = getSplitMembers();
  return (
    <section id="team" className="w-full z-10 mt-8">
      <h2 className="font-display text-5xl font-roboto font-medium tracking-tighter text-white sm:text-5xl text-center">
        Our Crew
      </h2>
      <div className="container hidden md:block">
        <div className="mt-10 rounded-md flex flex-col antialiased items-center justify-self-center">
          <InfiniteMovingCards speed="slow" direction="right" className="w-[95%] overflow-x-hidden">
            {members_split[0].map((member, index) => {
              return (
                <li key={index} className="w-[15vw] max-w-[200px] aspect-[3/4]">
                  <Member flip={false} {...member} />
                </li>
              );
            })}
          </InfiniteMovingCards>
        </div>

        <div className="mt-10 rounded-md flex flex-col antialiased items-center justify-self-center">
          <InfiniteMovingCards speed="slow" direction="left" className="w-[95%] overflow-x-hidden">
            {members_split[1].map((member, index) => {
              return (
                <li key={index} className="w-[15vw] max-w-[200px] aspect-[3/4]">
                  <Member flip={false} {...member} />
                </li>
              );
            })}
          </InfiniteMovingCards>
        </div>
      </div>

      <div className="md:hidden">
        <div className="rounded-md grid grid-cols-1 min-[375px]:grid-cols-2 gap-4">
          {Members.map((member, index) => {
            return (
              <div key={index} className="justify-self-center row-auto w-[70vw] min-[375px]:w-[35vw]">
                <Member flip={true} {...member} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
