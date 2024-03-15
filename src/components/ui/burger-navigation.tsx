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

const NavItem = ({
    name,
    href,
    className,
    toggle,
}: {
    name: string;
    href: string;
    className?: string;
    toggle: () => void;
}) => {
    return (
        <m.div
            className={cn("text-2xl font-medium text-white hover:text-white/60 cursor-pointer",
                className)}
        >
            <Link href={href} onClick={toggle}>
                {name}
            </Link>
        </m.div>
    );
};

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
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-white py-6 px-8 overscroll-contain overflow-y-hidden"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex justify-end">
                                <div className="cursor-pointer" onClick={toggleMenu}>
                                    <BsXLg fontSize={30} color="white" />
                                </div>
                            </div>
                            <m.div
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full justify-center font-lora items-center gap-4"
                            >
                                {navItems.map((item, index) => {
                                    return (
                                        <div className="overflow-hidden" key={index}>
                                            <NavItem
                                                name={item.name}
                                                href={item.link}
                                                toggle={toggleMenu}
                                            />
                                        </div>
                                    );
                                })}

                                <div className="overflow-hidden">
                                    <m.div>
                                        <NavItem
                                            name={mainItem.name}
                                            href={mainItem.link}
                                            toggle={toggleMenu}
                                            className="text-2xl font-medium cursor-pointer rounded-full px-8 bg-white text-black hover:bg-white/60"
                                        />
                                    </m.div>
                                </div>
                            </m.div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </header>

    );
};
