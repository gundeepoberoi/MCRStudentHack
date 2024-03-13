"use client";
import React from "react";
import Member from "@/components/sections/team/member-card";
import { Members } from "@/lib/team";
import { getSplitMembers } from "@/lib/team";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Team() {
  const members_split = getSplitMembers();
  return (
    <section id="team" className="overflow-x-hidden w-full z-10">
      <h1 className="flex justify-center md:text-6xl text-5xl">Our Crew</h1>
        <div className="container hidden sm:block">
          <div className="mt-10 rounded-md flex flex-col antialiased items-center justify-self-center">
            <InfiniteMovingCards speed="slow" direction="right" className="w-[90%] overflow-x-hidden">
              {members_split[0].map((member, index) => {
                return (
                  <li key={index}>
                    <Member {...member} />
                  </li>
                );
              })}
            </InfiniteMovingCards>
          </div>

          <div className="mt-10 rounded-md flex flex-col antialiased items-center justify-self-center">
            <InfiniteMovingCards speed="slow" direction="left" className="w-[90%] overflow-x-hidden">
              {members_split[1].map((member, index) => {
                return (
                  <li key={index}>
                    <Member {...member} />
                  </li>
                );
              })}
            </InfiniteMovingCards>
          </div>
        </div>

        <div className="sm:hidden">
            <div className="rounded-md grid grid-cols-1 min-[375px]:grid-cols-2 gap-4">
                {Members.map((member, index) => {
                    return (
                    <div key={index} className="justify-self-center row-auto">
                        <Member {...member} />
                    </div>
                    );
                })}
            </div>

        </div>
    </section>
  );
}
