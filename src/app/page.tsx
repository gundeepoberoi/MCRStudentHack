import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import Schedule from "@/components/sections/schedule";
import Team from "@/components/sections/team";
import Alt1 from "@/assets/logos/alt 1.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1 className="text-6xl font-bold">MCRStudentHack</h1> */}

      <Alt1 className="transition ease-in-out delay-150 hover:scale-110" />
      <About />
      {/* <Schedule /> */}
      <Team />
      <FAQ />
    </main>
  );
}
