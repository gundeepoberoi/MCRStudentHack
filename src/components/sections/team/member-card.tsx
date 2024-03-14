import Helmet from '@/assets/helmet';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { CardFlip } from '@/components/ui/flip-card/flip-card';
import Image from 'next/image';

export default function Member( {name, role, image, link }: any ) {
    return (
        // <div className="flex flex-col items-center relative w-24">
        <div>
            <a className='hidden sm:block' href={link}>
                <BackgroundGradient animate={false} className='grid place-items-center size-60 rounded-3xl '>
                    <div className="flex flex-col items-center w-40">
                        <div className="relative rounded-full aspect-square object-center h-40">
                            <div className="absolute inset-7 inset-x-9 rounded-full size-[5.5rem] object-center" style={{ backgroundImage: `url("${image}")`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }} />
                            <Image 
                                src={"./helmet.svg"}
                                width={500}
                                height={500}
                                alt={name}
                                className='w-40 h-40 z-1 aspect-square object-center absolute inset-0'
                            />
                        </div>


                        <p className='mt-2 text-lg font-semibold text-accent text-center'>{name}</p>
                        <p className='text-sm font-regular text-center'>{role}</p>
                    </div>

                </BackgroundGradient>
            </a>

            <div className='sm:hidden m-2'>
                <CardFlip
                    className='size-[9rem]'
                    childrenFront={    
                        <BackgroundGradient animate={false} className='grid place-items-center size-[9rem] rounded-3xl '>                
                            <div className="flex flex-col items-center">
                                <div className="relative aspect-square object-center h-[9rem]">
                                <div className="absolute inset-6 inset-x-[1.95rem] rounded-full size-[5rem] object-center" style={{ backgroundImage: `url("${image}")`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }} />
                                    <Image 
                                        src={"./helmet.svg"}
                                        width={500}
                                        height={500}
                                        alt={name}
                                        className='w-36 h-36 z-1 aspect-square object-center absolute inset-0'
                                    />
                                    
                                </div>
                            </div>


                        </BackgroundGradient>
                    }
                    childrenBack={
                        <BackgroundGradient animate={false} className='grid place-items-center size-[9rem] rounded-3xl '>    
                            <div className='grid place-items-center mr-4 m-2'>
                                <p className='mt-2 text-lg font-semibold text-accent text-center'>{name}</p>
                                <p className='text-sm font-regular text-center m-1'>{role}</p>

                                {link != null &&
                                    <Link href={link}>
                                        <FaLinkedin size={30} />
                                    </Link>
                                }

                                {link == null &&
                                    <div  className='size-8'/> // Put space so the text is somewhat aligned like the rest 
                                }
                            </div>            

                           
                        </BackgroundGradient>


                        
                    }
                />
            </div>

        </div>
        
        
        


        // <div className="astronaut-container flex flex-col item-center relative ">

        // </div>

    )
}