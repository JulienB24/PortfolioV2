import { Section } from "./Section";
import { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomIcon } from "./icons/CustomIcon";

import {
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
export const About = () => {
  return (
    <Section>
      <h2 className="font-bold text-4xl lg:text-5xl">About Me</h2>
      <p className="text-lg leading-9 text-muted-foreground z-10 text-justify">
        Passionné par le développement web et mobile, je me spécialise dans la
        création d&apos;expériences numériques innovantes. Je développe
        constament mes compétences en développement front-end et back-end avec
        une approche axée sur la performance et l’optimisation. Avec un parcours
        riche en management, innovation et qualité, j’apporte une vision
        polyvalente et une capacité d’adaptation essentielle dans le monde du
        numérique. Curieux et toujours en quête de nouvelles technologies,
        j’aime relever des défis et concevoir des solutions modernes et
        efficaces.
      </p>
      <div className="text-xl text-muted-foreground mt-2 lg:mt-4 text-justify">
        <div>
          <h3>
            <Code>Compétences</Code>
          </h3>
          <div className="grid grid-cols-4 gap-2 my-4">
            <div className="flex justify-center items-center hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              HTML &nbsp;&&nbsp; CSS
            </div>
            <div className="flex justify-center items-center hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              Tailwindcss
              <CustomIcon className="inline ml-0.5" name="tailwind" size={33} />
            </div>
            <div className="flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              JavaScript&nbsp;
              <FontAwesomeIcon icon={faJsSquare} className="w-8 flex" />
            </div>
            <div className="flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              React&nbsp;{" "}
              <FontAwesomeIcon icon={faReact} className="w-8 flex" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="hover:bg-accent hover:text-accent-foreground hover:bg-sky-700 p-4 rounded-xl bg-card/10 p-4 border-border border">
              PHP Symfony
            </div>
            <div className="hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              MySQL
            </div>
            <div className="hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              PHPmyAdmin
            </div>
          </div>
        </div>

        <div className="py-4">
          <h3>
            <Code>Soft Skills </Code>
          </h3>{" "}
          <div className="grid grid-cols-4 gap-4 my-4">
            <div className="hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              Adaptabilité
            </div>
            <div className="hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              Communication
            </div>
            <div className="hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              Travail d&apos;équipe
            </div>
            <div className="hover:bg-accent hover:text-accent-foreground p-4 rounded-xl bg-card/10 p-4 border-border border">
              Créativité
            </div>
          </div>
        </div>
        <div className="py-4">
          <h3>
            <Code>Mon CV</Code>
          </h3>
        </div>
      </div>
    </Section>
  );
};
const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="text-foreground px-1 -mx-O.5 items-center bg-accent/20 border-accent rounded md  bg-red border py-1">
      {props.children}
    </span>
  );
};
