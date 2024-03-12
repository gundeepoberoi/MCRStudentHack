import { StaticImageData } from 'next/image';
import astronaut from '@/app/astronaut.png';

interface Member {
    name: string;
    role: string;
    image: StaticImageData | string;
    link?: string;
}

const members: Member[] = [
    {
        name: "Jakub P.",
        role: "Co-Director",
        image: "./team/jakub_p.png",
        link: "https://www.linkedin.com/in/jacob-pabian/",
    },
    {
        name: "Naddy T.",
        role: "Co-Director",
        image: "./team/naddy_t.jpg",
        link: "https://www.linkedin.com/in/nadoms/",
    },
    {
        name: "Sam M.",
        role: "Sponsorship Team",
        image: "./team/sam_m.jpg",
        link: "https://www.linkedin.com/in/samuel-morgan-dev",
    },
    {
        name: "Jacob Y.",
        role: "Dev Team",
        image: "./team/jacob_y.jpeg"
    }, 
    {
        name: "Aadityaa M.",
        role: "Dev Team",
        image: "./team/aadityaa_m.jpg",
        link: "https://www.linkedin.com/in/aadityaa-mehrotra"
    }, 
    {
        name: "Abdullah S.",
        role: "PR Team",
        image: "./team/abdullah_s.jpg",
        link: "https://www.linkedin.com/in/abdullahsweesi"
    }, 
    {
        name: "Long P.",
        role: "Dev Team",
        image: "./team/long_p.jpg",
        link: "https://www.linkedin.com/in/yat-long-poon/"
    }, 
    {
        name: "Insiya M.",
        role: "Co-Director",
        image: "./team/insiya_m.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    },
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    },
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    }, 
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: "./naddy.jpg"
    },
]


export function getSplitMembers() {
    return [members.slice(0, members.length / 2), members.slice(members.length / 2, members.length)]
}

export { members as Members };