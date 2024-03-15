import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

import { CardFlip } from '@/components/ui/flip-card/flip-card';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Member({ name, role, image, link, flip }: any) {

    if (flip == true) return FlipMember({ name, role, image, link });
    return StillMember({ name, role, image, link });

}
function StillMember({ name, role, image, link }: any) {
    return (
        <Link className='w-full aspect-[3/4]' href={link? link : "#"} target="_LINK" rel="noreferrer">
            <Card className='w-full h-full relative group bg-zinc-900/5 rounded-3xl z-[1] border-none ring-2 ring-slate-500 grid grid-col-1 '>
                <div
                    className={cn(
                        "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-md transition duration-500",
                        " ring-2 ring-slate-500 ring-offset-2",
                        "group-hover:backdrop-blur-3xl"
                    )}
                />
                <CardContent className='absolute w-full h-full flex inset-0 text-white p-0'>
                    <div className="w-full h-full grid relative z-10 m-2 mb-4 group">
                        <div className="relative justify-self-center aspect-square w-[90%] grid">
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                alt={name}
                                priority
                                className='rounded-full w-[54%] mt-[18%] aspect-square object-cover object-center justify-self-center'
                            />
                            <Image
                                src={"/helmet.svg"}
                                width={500}
                                height={500}
                                alt={name}
                                priority
                                className='absolute inset-0 w-full z-10 aspect-square object-cover object-center justify-self-center'
                            />

                        </div>
                        <div className='flex flex-col items-center mb-2'>
                            <p className='text-sm lg:text-lg max font-semibold text-accent text-center'>{name}</p>
                            <p className='text-xs lg:text-sm font-regular text-center'>{role}</p>
                        </div>


                    </div>

                </CardContent>

            </Card>
        </Link>
    );
}

export function FlipMember({ name, role, image, link }: any) {
    return (
        <div className='mt-8'>
            <CardFlip
                className='aspect-square'
                childrenFront={


                    <Card className='aspect-square relative group bg-zinc-900/5 rounded-3xl z-[1] border-none ring-2 ring-slate-500 grid grid-col-1 '>
                        <div
                            className={cn(
                                "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-md transition duration-500",
                                " ring-2 ring-slate-500 ring-offset-2",
                                "group-hover:backdrop-blur-3xl"
                            )}
                        />
                        <CardContent className='w-full p-0 justify-self-center'>
                            <div className="relative aspect-square object-center w-full grid">
                                <Image
                                    src={image}
                                    width={500}
                                    height={500}
                                    alt={name}
                                    priority
                                    className='rounded-full w-[54%] mt-[18%] aspect-square object-center justify-self-center'
                                />
                                <Image
                                    src={"/helmet.svg"}
                                    width={500}
                                    height={500}
                                    alt={name}
                                    priority
                                    className='absolute inset-0 w-full z-10 aspect-square object-center justify-self-center'
                                />

                            </div>
                        </CardContent>
                    </Card>
                }
                childrenBack={

                    <Card className='aspect-square relative group bg-zinc-900/5 rounded-3xl z-[1] border-none ring-2 ring-slate-500 grid grid-col-1 '>
                        <div
                            className={cn(
                                "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-md transition duration-500",
                                " ring-2 ring-slate-500 ring-offset-2",
                                "group-hover:backdrop-blur-3xl"
                            )}
                        />

                        <CardContent className='justify-self-center text-white grid place-items-center justify-self-center m-1 p-0'>

                            <p className='mt-2 text-[7.0vw] min-[375px]:text-[3.5vw] font-semibold text-accent text-center'>{name}</p>
                            <p className='text-[7.0vw] min-[375px]:text-[3vw] font-regular text-center m-1'>{role}</p>

                            {link != null &&
                                <Link href={link} target="_LINK" rel="noreferrer">
                                    <IconContext.Provider value={{ color: "white", className: "size-[10.0vw] min-[375px]:size-[5vw]" }}>
                                        <div>
                                            <FaLinkedin />
                                        </div>

                                    </IconContext.Provider>
                                </Link>
                            }

                            {link == null &&
                                <div className='size-8' /> // Put space so the text is somewhat aligned like the rest 
                            }


                        </CardContent>
                    </Card>



                }
            />
        </div>
    );
}