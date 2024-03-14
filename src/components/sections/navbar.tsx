import { FaFirefox } from "react-icons/fa";
import { FloatingNav } from "../ui/floating-navbar";

const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <FaFirefox className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Schedule",
      link: "#schedule",
      icon: <FaFirefox className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Crew",
      link: "#team",
      icon: (
        <FaFirefox className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "FAQs",
      link: "#faq",
      icon: (
        <FaFirefox className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  
const applyItem = {
    name: "Apply",
    link: "https://apply.mcrstudenthack.com/"
}

  export default function Navbar() {
    return <FloatingNav navItems={navItems} mainItem={applyItem} className="border-[#10F6D3] bg-transparent backdrop-blur-xl font-bold text-[#10F6D3]" />;
  }
