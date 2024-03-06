import { StaticImageData } from 'next/image';
import astronaut from '@/app/astronaut.png';
import naddy from '@/app/naddy.jpg';

interface Member {
    name: string;
    role: string;
    image: StaticImageData | string;
    link?: string;
}

const members: Member[] = [
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy,
        link: "https://greatunihack.com/#about-us",
    },
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },
    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },    {
        name: "Nader Takruri",
        role: "Co-Director",
        image: naddy
    },
]

export { members as Members };