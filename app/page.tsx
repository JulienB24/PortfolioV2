
import { Hero } from "./_components/Hero";
import { Work } from "./_components/Work";
import { Contact } from "./_components/Contact";
import { About } from "./_components/About"
import { Buttons } from "./_components/Buttons"


export default function Home() {
  return (
    <main className="h-full">
      <Hero/>
      <Buttons/>
      <About/>
      <Work/>
      <Contact/>

    </main>
  );
}
