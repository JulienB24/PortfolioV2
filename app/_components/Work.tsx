import { Section } from "./Section";
import Image from "next/image";


export const Work = () =>{
  return(
    <Section>
<h2 className="font-bold text-4xl lg:text-5xl">My best work</h2>
<p className="text-xl text-muted-foreground mt-2 lg:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, numquam!</p>

<div className="grid grid-cols-2 mt-4 lg:mt-6 gap-4 lg:gap-6">
  <div className="rounded-md overflow-hidden shadow-md">
    <a href="https://www.carlavalenti.fr" target="_blank" rel="noopener noreferrer">
      <Image src="/img/CarlaValenti.png" alt="CarlaValenti" width={500} height={300} />
    </a>
  </div>
  <div className="rounded-md overflow-hidden shadow-md">
    <a href="https://www.lilyparker.fr" target="_blank" rel="noopener noreferrer">
      <Image src="/img/LilyParker.png" alt="LilyParker" width={500} height={300} />
    </a>
  </div>
  <div className="rounded-md overflow-hidden shadow-md">
    <a href="https://www.williamspencer.fr" target="_blank" rel="noopener noreferrer">
      <Image src="/img/WilliamSpencer.png" alt="WilliamSpencer" width={500} height={300} />
    </a>
  </div>
  <div className="rounded-md overflow-hidden shadow-md">
    <a href="https://julienb24.github.io/masterMind/" target="_blank" rel="noopener noreferrer">
      <Image src="/img/Mastermind.png" alt="masterMind" width={500} height={300} />
    </a>
  </div>
</div>


    </Section>
  )
}