import { BurgerNav } from "../ui/burger-navigation";
import { FloatingNav } from "../ui/floating-navbar";

const navItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Schedule",
    link: "#schedule",
  },
  {
    name: "FAQs",
    link: "#faq",
  },
  {
    name: "Our Crew",
    link: "#team",
  },
];

const applyItem = {
  name: "Apply",
  link: "#hero"
}

export default function Navigation() {
  return (
    <div className="text-white">
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} mainItem={applyItem} className="border-[#10F6D3] bg-transparent backdrop-blur-xl font-bold" />
      </div>
      <div className="md:hidden text-white">
        <BurgerNav navItems={navItems} mainItem={applyItem}/>
      </div>
    </div>
  );
}
