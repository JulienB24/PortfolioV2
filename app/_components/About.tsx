import { Section } from "./Section";
import Image from "next/image";


export const About = () =>{
  return(
    <Section>
<h2 className="font-bold text-4xl lg:text-5xl">About Me</h2>
<p className="text-xl text-muted-foreground mt-2 lg:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, numquam!</p>
<div className="">
  Compétences
  Soft Skills
  Mon CV
</div>


    </Section>
  )
}