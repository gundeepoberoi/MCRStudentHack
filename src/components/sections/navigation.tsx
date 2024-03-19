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
    name: "Our Crew",
    link: "#team",
  },
  {
    name: "FAQs",
    link: "#faq",
  },
];

const applyItem = {
  name: "Apply",
  link: "#hero"
}

export default function Navigation() {
  return (
    <div className="text-white font-roboto">
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} mainItem={applyItem} className="border-[#10F6D3] bg-transparent backdrop-blur-xl font-bold" />
      </div>
      <div className="md:hidden text-white font-roboto">
        <BurgerNav navItems={navItems} mainItem={applyItem}/>
      </div>
    </div>
  );
}
