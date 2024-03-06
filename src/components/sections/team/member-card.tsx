import Image from 'next/image';
import astronaut from '@/app/astronaut.png';

export default function Member( {name, role, image, link }: any ) {
    return (
        <div className="flex flex-col items-center relative hover:">
            {/* <div className='relative'>
                <a href={link}>
                    <Image
                        src={image}
                        alt={name}
                        style={{
                            objectFit: "cover",
                            width: "15vh",
                            height: "auto",
                            zIndex: 1,
                        }}
                        className='rounded-full aspect-square object-center w-16 h-16 border-8 border-transparent group-hover:width-20'
                        priority
                        quality={100}
                    />

                    <Image
                        src={astronaut}
                        alt={name}
                        style={{
                            objectFit: "cover",
                            width: "20vh",
                            height: "auto",
                            zIndex: 2,
                        }}
                        className='aspect-square object-center absolute top-0 left-0 right-0 bottom-0 z-10'
                        priority
                        quality={100}
                    />
                </a>
                
            </div> */}
            <Image
                src={image}
                alt={name}
                style={{
                    objectFit: "cover",
                    height: "auto",
                    zIndex: 1,
                }}
                className='rounded-full aspect-square object-center w-40 h-auto border-2 border-ring'
                priority
                quality={100}
            />

            <p className='mt-2 text-md font-semibold text-accent'>{name}</p>
            <p className='text-xs font-light'>{role}</p>
        </div>



        // <div className="astronaut-container flex flex-col item-center relative ">

        // </div>

    )
}