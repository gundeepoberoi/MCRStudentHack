import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import Schedule from "@/components/sections/schedule";
import Team from "@/components/sections/team";
import Alt1 from "@/assets/logos/alt 1.svg";
import Alt2 from "@/assets/logos/alt 2.svg";
import Alt3 from "@/assets/logos/alt 3.svg";
import Helmet from "@/assets/helmet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{backgroundImage: `url("./stars.jpg")`}}>
      {/* <h1 className="text-6xl font-bold">MCRStudentHack</h1> */}

      {/* <Alt1 className="bg-gray-100 transition ease-in-out delay-150 hover:scale-110" /> */}
      {/* <About /> */}
      {/* <Schedule /> */}
      <Team />
      <Helmet />
      <FAQ />
    </main>
  );
}
