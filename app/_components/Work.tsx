import { Section } from "./Section";
import Image from "next/image";

export const Work = () => {
  return (
    <Section>
      <h2 className="font-bold text-4xl lg:text-5xl">My best work</h2>
      <p className="text-xl text-muted-foreground mt-2 lg:mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        numquam!
      </p>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(4.1% 44.1%, 10% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 4.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/3 bg-gradient-to-tr from-[#ff00ea] to-[#9089fc] opacity-30 sm:left-[calc(30%+1rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="grid grid-cols-2 mt-4 lg:mt-6 gap-4 lg:gap-6">
        <div className="rounded-md overflow-hidden shadow-md">
          <a
            href="https://www.carlavalenti.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/CarlaValenti.png"
              alt="CarlaValenti"
              width={500}
              height={300}
            />
          </a>
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <a
            href="https://www.lilyparker.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/LilyParker.png"
              alt="LilyParker"
              width={500}
              height={300}
            />
          </a>
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <a
            href="https://www.williamspencer.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/WilliamSpencer.png"
              alt="WilliamSpencer"
              width={500}
              height={300}
            />
          </a>
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <a
            href="https://julienb24.github.io/masterMind/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/Mastermind.png"
              alt="masterMind"
              width={500}
              height={300}
            />
          </a>
        </div>
      </div>
    </Section>
  );
};
