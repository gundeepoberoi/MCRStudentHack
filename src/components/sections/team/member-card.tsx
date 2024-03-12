import Helmet from '@/assets/helmet';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { CardFlip } from '@/components/ui/flip-card';

export default function Member( {name, role, image, link }: any ) {
    return (
        // <div className="flex flex-col items-center relative w-24">
        <div>
            <a className='hidden md:block' href={link}>
                <BackgroundGradient animate={false} className='grid place-items-center w-40 h-40 md:w-60 md:h-60 rounded-3xl '>
                    <div className="flex flex-col items-center w-20 md:w-40">
                        <div className="relative rounded-full aspect-square object-center h-40 overflow-hidden">
                            <div className="absolute inset-7 inset-x-9 rounded-full overflow-hidden size-[5.5rem] object-center" style={{ backgroundImage: `url("${image}")`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }} />
                            <Helmet
                                    style={{
                                        objectFit: "cover",
                                        height: "auto",
                                        zIndex: 1,
                                    }}
                                    className="w-40 aspect-square object-center absolute inset-0"
                                />
                        </div>


                        <p className='mt-2 text-md font-semibold text-accent'>{name}</p>
                        <p className='text-xs font-light'>{role}</p>
                    </div>

                </BackgroundGradient>
            </a>

            <div className='md:hidden m-4'>
                <CardFlip
                    className='w-40 h-40'
                    childrenFront={    
                        <BackgroundGradient animate={false} className='grid place-items-center w-40 h-40 md:w-60 md:h-60 rounded-3xl '>                
                            <div className="flex flex-col items-center">
                                <div className="relative aspect-square object-center h-[9rem] overflow-hidden">
                                <div className="absolute inset-7 inset-x-9 rounded-full overflow-hidden size-[5rem] object-center" style={{ backgroundImage: `url("${image}")`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }} />

                                    <img
                                        src={"./helmet.svg"}
                                        alt={name}
                                        style={{
                                            objectFit: "cover",
                                            height: "9rem",
                                            width: "9rem",
                                            zIndex: 1,
                                        }}
                                        className="w-auto aspect-square object-center absolute inset-0"                                    />
                                </div>
                            </div>


                        </BackgroundGradient>
                    }
                    childrenBack={
                        <BackgroundGradient animate={false} className='grid place-items-center w-40 h-40 md:w-60 md:h-60 rounded-3xl '>                
                            <p className='mt-2 text-md font-semibold text-accent z-20'>{name}</p>
                            {link != null &&
                                <Link href={link}>
                                    <FaLinkedin size={30} />
                                </Link>
                            }
                           
                            <p className='text-xs font-light'>{role}</p>
                        </BackgroundGradient>


                        
                    }
                />
            </div>

        </div>
        
        
        


        // <div className="astronaut-container flex flex-col item-center relative ">

        // </div>

    )
}