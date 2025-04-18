import { Section } from "./Section";
import Image from "next/image";
import { PropsWithChildren } from "react";

export const Work = () => {
  return (
    <Section>
      <h2 className="font-bold text-4xl lg:text-5xl">My best work</h2>
      <p className="text-xl text-muted-foreground mt-2 mb-6 lg:mt-4">
      Une sélection de mes projets les plus aboutis !
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
          <Code>REGGAO 2024-2025 - CDD</Code>
      <div className="grid grid-cols-2 mt-4 mb-10 lg:mt-6 gap-4 lg:gap-6">
        <div className="rounded-md overflow-hidden shadow-md my-auto">
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
        <div className="rounded-md overflow-hidden m-auto">
        <h4 className="underline">William Spencer - PrestaShop</h4>
        <p className="text-justify">Installation et développement complet du site williamspencer.fr avec PrestaShop. Création d&apos;une boutique en ligne sur mesure, incluant l&apos;intégration de produits, la gestion des commandes, et la personnalisation de l&apos;interface pour une expérience utilisateur optimale.</p>
        </div>
        <div className="rounded-md overflow-hidden m-auto">
        <h4 className="underline">Lily Parker - PrestaShop</h4>
        <p className="text-justify">Installation et développement complet du site lilyparker.fr avec PrestaShop. Création d&apos;une boutique en ligne personnalisée, incluant l&apos;intégration des produits, la gestion des commandes, et la personnalisation de l&apos;interface pour une expérience utilisateur fluide et moderne.  </p>      </div>
        <div className="rounded-md overflow-hidden shadow-md my-auto">
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
      </div>
      <Code>AFPA 2024 - Formation</Code>

      <div className="grid grid-cols-2 mt-4 lg:mt-6 gap-4 lg:gap-6">
        <div className="rounded-md overflow-hidden shadow-md my-auto">
          <a
            href="https://julienb24.github.io/pendu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/pendu.png"
              alt="Le jeu du pendu"
              width={500}
              height={300}
            />
          </a>
        </div>
        <div className="rounded-md overflow-hidden m-auto">
        <h4 className="underline">Jeu du Pendu en JavaScript</h4>
        <p className="text-justify">Implémentation du jeu du Pendu où l&apos;utilisateur doit deviner un mot en proposant des lettres. À chaque mauvaise réponse, une partie du dessin du pendu apparaît, jusqu&apos;à ce que l&apos;utilisateur ait trouvé le mot ou que le dessin soit complet.</p>        </div>
        <div className="rounded-md overflow-hidden m-auto">
        <h4 className="underline">Mastermind en JavaScript</h4><p className="text-justify">
        Implémentation du jeu Mastermind où l&apos;utilisateur doit deviner une combinaison de couleurs. Le jeu fournit un retour visuel sur la précision de chaque essai.</p>
        </div>
        <div className="rounded-md overflow-hidden shadow-md my-auto">
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
const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="text-foreground px-1 -mx-O.5 items-center bg-accent/20 border-accent rounded md  bg-red border py-1">
      {props.children}
    </span>
  );
};
