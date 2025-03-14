import { PropsWithChildren } from "react";
import { Section } from "./Section";
import { CustomIcon} from "./icons/CustomIcon"

export const Hero = () => {
return (
<Section className="flex flex-col gap-2">
<h1 className="font-bold text-4xl">Hey, I am Julien 👋</h1>
<p className="text-lg leading-9">Je suis un <Code> Developpeur Web et Web Mobile <CustomIcon className="inline ml-0.5" name="dev" size={16}/></Code>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam eaque non.</p>
</Section>
);
};

const Code = (props: PropsWithChildren<{className?: string}>) =>{
  return(
    <span className="px-1 -mx-O.5 items-center bg-accent/20 border-accent rounded md  bg-red border py-1">{props.children}</span>
  )
}