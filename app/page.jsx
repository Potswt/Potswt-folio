// components
import About from "@/components/About";
import Activities from "@/components/Activities";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Activities />
      <Cta />
    </main>
  );
}
