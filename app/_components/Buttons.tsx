import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const Buttons = () =>{
  return(
    <Section className="-mt-20">
      <div className="items-center">
        <Button size="lg" className="w-fit mt-4">
        <Link href="#contact">Contact me</Link>        </Button>
        <Button size="lg" variant="ghost" className="w-fit mt-4">
        <Link target="_blank" href="https://github.com/JulienB24">Github</Link>      
        </Button>
        <Button size="lg" variant="ghost" className="w-fit mt-4">
        <Link target="_blank" href="https://www.linkedin.com/in/julien-breuil-dev/">Linkedin</Link>
        </Button>
        <Button size="lg" variant="ghost"  className="z-10 w-fit mt-4">
          X
        </Button>
      </div>
    </Section>
  )
}

