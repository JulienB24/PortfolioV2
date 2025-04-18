"use client";
import dynamic from "next/dynamic";

// Importation dynamique de Framer Motion
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  ssr: false,  // Empêche le rendu côté serveur
});

import { Hero } from "./_components/Hero";
import { Work } from "./_components/Work";
import { Contact } from "./_components/Contact";
import { About } from "./_components/About";
import { Buttons } from "./_components/Buttons";
import { Footer } from "./_components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Julien Breuil - Développeur Web et Web Mobile" />
        <meta property="og:description" content="Développeur web formé et passionné, je présente ici mes projets réalisés avec React, Framer Motion et plus encore. Disponible pour missions ou CDI." />
        <meta property="og:image" content="/img/JB_logo.png" />
        <meta property="og:url" content="https://jb-dev-web.vercel.app/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <main className="h-full space-y-24">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Buttons />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <About />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Work />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Contact />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Footer />
        </MotionDiv>
      </main>
    </>
  );
}
