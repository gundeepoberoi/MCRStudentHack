"use client";
import React from "react";
import Member from "@/components/sections/team/member-card";
import { Members } from "@/lib/team";
import { getSplitMembers } from "@/lib/team";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Team() {
    const members_split = getSplitMembers();
    return (
        <section id="team" className="">

            <h1 className="flex justify-center md:text-6xl text-5xl">Our Crew</h1>
                <div className="w-[99vw]">
                    {/* <LampContainer> */}
                    <div className="container hidden md:block">
                        <div className="mt-10 rounded-md flex flex-col antialiased items-center justify-center overflow-hidden">
                            <InfiniteMovingCards speed="slow" direction="right">
                                {members_split[0].map((member, index) => {
                                    return (
                                        <li key={index}>
                                            <Member {...member} />
                                        </li>
                                    );
                                })}
                            </InfiniteMovingCards>

                        </div>

                        <div className="mt-10 rounded-md flex flex-col antialiased items-center justify-center overflow-hidden">
                            <InfiniteMovingCards speed="slow" direction="left">
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

                    <div className="container md:hidden">
                        <div className="mt-10 rounded-md grid grid-cols-2 gap-2 antialiased items-center justify-center">
                            {/* <ul> */}
                            {Members.map((member, index) => {
                                    return (
                                        <div key={index}>
                                            <Member {...member} />
                                        </div>
                                    );
                            })}
                            {/* </ul> */}

                        </div>
                    </div>
                    {/* </LampContainer> */}




                </div>



        </section>



    )

}
