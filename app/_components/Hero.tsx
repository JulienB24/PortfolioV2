/* eslint-disable @next/next/no-img-element */
import { PropsWithChildren } from "react";
import { Section } from "./Section";
import { CustomIcon } from "./icons/CustomIcon";

export const Hero = () => {
  return (
    <Section className="flex flex-col md:flex-row items-center flex-col-reverse">
      {" "}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff00ea] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="relative">
        <div className="transform-gpu blur-3xl">
          <div
            className="absolute right-0 opacity-50 -z-50 w-56 h-64 bg-gradient-to-tr from-[#11198c] to-[#2e3fff]"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 99% 19%, 70% 75%, 25% 100%, 3% 40%)",
            }}
          />
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="font-bold text-4xl lg:text-5xl py-3 flex flex-nowrap items-center">
            {" "}
            <img
              src="https://julienb24.github.io/PortFolioJB/static/media/logoJB3.266d51a7a6f23a0e4016.png"
              alt="JB"
              className="w-20 mr-7"
            />
            Julien BREUIL{" "}
          </h1>
          <h3 className="py-3">
            {" "}
            <Code>
              {" "}
              Developpeur Web et Web Mobile{" "}
              <CustomIcon className="inline ml-0.5" name="dev" size={16} />
            </Code>{" "}
          </h3>
        </div>
        <p className="text-lg leading-9 text-muted-foreground z-10 text-justify">
        J'aime créer des sites web en tant que développeur web. Toujours curieux, j’aime apprendre et expérimenter de nouvelles technologies pour concevoir des applications modernes et performantes.         </p>
      </div>

    </Section>
  );
};

const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="text-foreground px-1 -mx-O.5 items-center bg-accent/20 border-accent rounded md border py-1">
      {props.children}
    </span>
  );
};
