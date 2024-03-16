"use client";
import React, { useState } from "react";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  mainItem,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  mainItem: {
    name: string;
    link: string;
  }
  className?: string;
}) => {

  return (
    <AnimatePresence mode="wait">
      <m.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            passHref
            className={cn(
              "relative items-center flex space-x-1 text-white hover:text-[#c0f0ea]"
            )}
          >
            <span className="text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link href={mainItem.link} passHref
              className="border text-sm font-medium relative border-[#10F6D3] dark:border-white/[0.2] text-white hover:text-[#c0f0ea] px-4 py-2 rounded-full">
          
            <span>{mainItem.name}</span>
        </Link>
      </m.div>
    </AnimatePresence>
  );
};
