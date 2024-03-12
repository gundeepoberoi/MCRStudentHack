import About from "@/components/sections/about/about";
import FAQ from "@/components/sections/faq";
import Schedule from "@/components/sections/schedule/schedule";
import Alt1 from "@/assets/logos/alt 1.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-8">
      <Alt1 className="transition ease-in-out delay-150 hover:scale-110" />
      <About />
      <Schedule />
      <FAQ />
    </main>
  );
}
