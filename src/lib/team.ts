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
    image: "/team/jakub_p.jpg",
    link: "https://www.linkedin.com/in/jacob-pabian/",
  },
  {
    name: "Naddy T.",
    role: "Co-Director",
    image: "/team/naddy_t.jpg",
    link: "https://www.linkedin.com/in/nadoms/",
  },
  {
    name: "Gundeep O.",
    role: "Deputy Director and Dev Lead",
    image: "/team/gundeep_o.jpg",
    link: "https://www.linkedin.com/in/gundeepoberoi/",
  },
  {
    name: "Hanin S.",
    role: "PR and Graphics Lead",
    image: "/team/hanin_s.jpg",
    link: "https://www.linkedin.com/in/haninsofia/",
  },
  {
    name: "Insiya M.",
    role: "Logistics Lead",
    image: "/team/insiya_m.jpg",
    link: "https://www.linkedin.com/in/insiya-mullamitha/",
  },
  {
    name: "Keya G.",
    role: "Logistics Lead",
    image: "/team/keya_g.jpeg",
    link: "https://www.linkedin.com/in/keya-gandhi13/",
  },
  {
    name: "Sam M.",
    role: "Sponsorships",
    image: "/team/sam_m.jpg",
    link: "https://www.linkedin.com/in/samuel-morgan-dev",
  },
  {
    name: "Jacob Y.",
    role: "Dev",
    image: "/team/jacob_y.jpeg",
  },
  {
    name: "Abdullah S.",
    role: "PR",
    image: "/team/abdullah_s.jpg",
    link: "https://www.linkedin.com/in/abdullahsweesi",
  },
  {
    name: "Long P.",
    role: "Dev",
    image: "/team/long_p.jpg",
    link: "https://www.linkedin.com/in/yat-long-poon/",
  },
  {
    name: "Luke S.",
    role: "Sponsorships",
    image: "/team/luke_s.jpg",
    link: "https://www.linkedin.com/in/luke-sanderson-/",
  },
  {
    name: "Sarah S.",
    role: "Sponsorships",
    image: "/team/sarah_s.jpg",
    link: "https://www.linkedin.com/in/sarahssaad/",
  },
  {
    name: "Manoj M.",
    role: "Sponsorships and Logistics ",
    image: "/team/manoj_m.jpg",
    link: "https://www.linkedin.com/in/manojmanikandan/",
  },
  {
    name: "Jacob G.",
    role: "Dev",
    image: "/team/jacob_g.jpg",
    link: "https://www.linkedin.com/in/jaygee0/",
  },
  {
    name: "Yashasvi N.",
    role: "Logistics",
    image: "/team/yashasvi_n.jpg",
    link: "http://linkedin.com/in/yashasvi-nandamuri-a1a21b280/",
  },
  {
    name: "Yashika G.",
    role: "PR",
    image: "/team/yashika_g.jpg",
    link: "http://linkedin.com/in/yashikagandhi2023/",
  },
  {
    name: "Ananya S.",
    role: "Logistics",
    image: "/team/ananya_s.jpg",
    link: "https://www.linkedin.com/in/naga-sai-sri-ananya-susarla-51418627a/",
  },
  {
    name: "Armelia K.",
    role: "PR and Graphics",
    image: "/team/armelia_k.jpg",
    link: "https://www.linkedin.com/in/armelia-briggite-kasenda/",
  },
  {
    name: "Matthew L.",
    role: "PR",
    image: "/team/matthew_l.jpg",
    link: "https://www.linkedin.com/in/matthewlewis2100/",
  },
  {
    name: "Dhruv S.",
    role: "Dev",
    image: "/team/dhruv.jpeg",
    link: "https://www.linkedin.com/in/dsio/",
  },
];

export function getSplitMembers() {
  return [
    members.slice(0, members.length / 2),
    members.slice(members.length / 2, members.length),
  ];
}

export { members as Members };
