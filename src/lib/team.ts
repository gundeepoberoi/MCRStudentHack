import { StaticImageData } from "next/image";

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
    image: "./team/jacob_y.jpeg",
  },
  {
    name: "Aadityaa M.",
    role: "Dev Team",
    image: "./team/aadityaa_m.jpg",
    link: "https://www.linkedin.com/in/aadityaa-mehrotra",
  },
  {
    name: "Abdullah S.",
    role: "PR Team",
    image: "./team/abdullah_s.jpg",
    link: "https://www.linkedin.com/in/abdullahsweesi",
  },
  {
    name: "Long P.",
    role: "Dev Team",
    image: "./team/long_p.jpg",
    link: "https://www.linkedin.com/in/yat-long-poon/",
  },
  {
    name: "Insiya M.",
    role: "Logistics Team",
    image: "./team/insiya_m.jpg",
    link: "https://www.linkedin.com/in/insiya-mullamitha/",
  },
  {
    name: "Hanin S.",
    role: "PR-Graphics Team",
    image: "./team/hanin_s.png",
    link: "https://www.linkedin.com/in/haninsofia/",
  },
  {
    name: "Luke S.",
    role: "Sponsorships Team",
    image: "./team/luke_s.jpg",
    link: "https://www.linkedin.com/in/luke-sanderson-/",
  },
  {
    name: "Sarah S.",
    role: "Sponsorships Team",
    image: "./team/sarah_s.jpg",
    link: "https://www.linkedin.com/in/sarahssaad/",
  },
  {
    name: "Manoj M.",
    role: "Sponsorships-Logistics Team",
    image: "./team/manoj_m.jpg",
    link: "https://www.linkedin.com/in/manojmanikandan/",
  },
  {
    name: "Jacob G.",
    role: "Dev Team",
    image: "./team/jacob_g.jpg",
    link: "https://www.linkedin.com/in/jaygee0/",
  },
];

export function getSplitMembers() {
  return [
    members.slice(0, members.length / 2),
    members.slice(members.length / 2, members.length),
  ];
}

export { members as Members };
