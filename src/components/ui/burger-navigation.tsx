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
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXLg } from "react-icons/bs";


export const BurgerNav = ({
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

    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
        if (!open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    const list = {
        hidden: {
            opacity: 0,
            transition: { when: "afterChildren" }
        }
    }

    const listItem = {
        hidden: {
            opacity: 0,
            transition: { duration: 2 }
        }
    }


    return (
        <header className={cn("z-50 fixed left-0 justify-end w-full flex top-0 py-6 px-6", className)}>
            <nav className="px-2 flex justify-end">
                <div className="cursor-pointer" onClick={toggleMenu}>
                    <GiHamburgerMenu fontSize={30} />
                </div>
            </nav>
            <AnimatePresence>
                {open && (
                    <m.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '110%'}}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 top-0 w-screen h-screen origin-top bg-black/30 backdrop-blur-md text-white py-6 px-8 overscroll-contain overflow-y-hidden"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex justify-end">
                                <div className="cursor-pointer" onClick={toggleMenu}>
                                    <BsXLg fontSize={30} color="white" />
                                </div>
                            </div>

                            <m.ul variants={list} className="flex flex-col h-full justify-center font-lora items-center gap-4">
                                {navItems.map((item, index) => {
                                    return (
                                        <m.li variants={listItem} key={index} className="text-2xl font-medium text-white hover:text-white/60 cursor-pointer">
                                            <Link href={item.link} onClick={toggleMenu}>
                                                {item.name}
                                            </Link>
                                        </m.li>
                                    );
                                })}
                                <m.li variants={listItem} key={mainItem.name} className="text-2xl font-medium text-white hover:text-white/60 cursor-pointer">
                                    <Link href={mainItem.link} onClick={toggleMenu}>
                                        {mainItem.name}
                                    </Link>
                                </m.li>
                            </m.ul>

                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </header>

    );
};
