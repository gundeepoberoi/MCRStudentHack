import { FaFirefox } from "react-icons/fa";
import { FloatingNav } from "../ui/floating-navbar";
import { FaCircleInfo } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";

const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <FaCircleInfo className="h-4 w-4 text-white" />,
    },
    {
      name: "Schedule",
      link: "#schedule",
      icon: <FaListUl className="h-4 w-4 text-white" />,
    },
    {
      name: "Our Crew",
      link: "#team",
      icon: (
        <RiTeamFill className="h-4 w-4 text-white"/>
      ),
    },
    {
      name: "FAQs",
      link: "#faq",
      icon: (
        <FaQuestionCircle className="h-4 w-4 text-white"/>
      ),
    },
  ];
  
const applyItem = {
    name: "Apply",
    link: "https://apply.mcrstudenthack.com/"
}

  export default function Navbar() {
    return <FloatingNav navItems={navItems} mainItem={applyItem} className="border-[#10F6D3] bg-transparent backdrop-blur-xl font-bold text-white" />;
  }
