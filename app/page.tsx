
import { Hero } from "./_components/Hero";
import { Work } from "./_components/Work";
import { Contact } from "./_components/Contact";
import { About } from "./_components/About"

export default function Home() {
  return (
    <main className="h-full">
      <Hero/>
      <About/>
      <Work/>
      <Contact/>

    </main>
  );
}
