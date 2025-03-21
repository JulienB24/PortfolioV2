import { Section } from "./Section";
import { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomIcon } from "./icons/CustomIcon";
import { faDatabase,faWrench,faComments,faPeopleGroup,faPalette } from "@fortawesome/free-solid-svg-icons";
import {
  faJsSquare,
  faReact, faHtml5,faCss3Alt,faPhp,faSymfony
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
          <div className="text-sm grid grid-cols-5 gap-2 my-4">
            <div className="flex flex-wrap justify-center items-center hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              HTML<FontAwesomeIcon className="w-4  min-w-3 flex" icon={faHtml5} />
            </div>
            <div className="flex flex-wrap justify-center items-center hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
            CSS<FontAwesomeIcon className="w-4  min-w-3 flex" icon={faCss3Alt} />
            </div>
            <div className="flex flex-wrap justify-center items-center hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              Tailwind
              <CustomIcon className="inline ml-0.5 w-5 min-w-5" name="tailwind" size={24}/>
            </div>
            <div className="flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              JavaScript&nbsp;
              <FontAwesomeIcon icon={faJsSquare} className="w-5  min-w-3 flex" />
            </div>
            <div className="flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              React&nbsp;
              <FontAwesomeIcon icon={faReact} className="w-5 flex" />
            </div>
          </div>
          <div className="text-sm grid grid-cols-4 gap-4">
            <div className="flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              PHP&nbsp; <FontAwesomeIcon className="w-6  min-w-4 flex" icon={faPhp} />
            </div>
            <div className="flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              Symfony&nbsp; <FontAwesomeIcon className="w-5  min-w-3 flex"icon={faSymfony} />
            </div>
            <div className="flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              MySQL&nbsp;<FontAwesomeIcon className="w-4  min-w-2 flex" icon={faDatabase} />
            </div>
            <div className="max-[445px]:text-xs max-[375px]:text-[10px] flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              PHPmyAdmin              <CustomIcon className="inline ml-0.5 w-5 min-w-5" name="phpMyAdmin" size={24}/>

            </div>
          </div>
        </div>

        <div className="my-10">
          <h3>
            <Code>Soft Skills </Code>
          </h3>{" "}
          <div className="text-sm grid grid-cols-4 gap-4 my-4">
          <div className="max-[445px]:text-xs max-[375px]:text-[10px] flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
          Adaptabilité&nbsp;<FontAwesomeIcon className="w-5 flex" icon={faWrench} />
            </div>
            <div className="max-[445px]:text-xs max-[375px]:text-[10px] flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              Communication &nbsp;<FontAwesomeIcon className="w-5 flex"  icon={faComments} />
            </div>
            <div className="text-center max-[445px]:text-xs max-[375px]:text-[10px] flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              Esprit d'équipe&nbsp;<FontAwesomeIcon className="w-5 flex"  icon={faPeopleGroup} />
            </div>
            <div className="max-[445px]:text-xs max-[375px]:text-[10px] flex justify-center items-center flex-wrap hover:bg-accent hover:text-accent-foreground rounded-xl bg-card/10 p-1 border-border border">
              Créativité&nbsp;<FontAwesomeIcon className="w-5 flex"  icon={faPalette} />
            </div>
          </div>
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
