import About from "./about/about";
import FAQ from "./faq/faq";
import Schedule from "@/components/sections/schedule";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1 className="text-6xl font-bold">MCRStudentHack</h1> */}
      <About />
      <Schedule />
      <FAQ />
    </main>
  );
}
