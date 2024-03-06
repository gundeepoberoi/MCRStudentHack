'use client';

import React from "react";
import Member from "@/components/sections/team/member-card";
import { Members } from "@/lib/team";

export default function Team() {

    return (
        <section id="team" className="mt-8">
            <h1 className="flex justify-center md:text-6xl text-3xl">Our Crew</h1>

            <ul className="flex justify-center flex-wrap gap-4 p-4">
                {Members.map((member, index) => {
                    return (
                        <li key={index}>
                            <Member {...member}/>
                        </li>
                    );
                })}

            </ul>
        </section>

    );
}