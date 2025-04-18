import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Julien Breuil · Développeur Web",
  description:
    "Développeur web formé et passionné, je présente ici mes projets réalisés avec HTML, CSS et JS, React, et plus encore. Disponible pour missions ou CDI.",
  openGraph: {
    title: "Julien Breuil · Développeur Web",
    description:
      "Développeur web formé et passionné, je présente ici mes projets réalisés avec HTML, CSS et JS, React, et plus encore. Disponible pour missions ou CDI.",
    images: "/img/JB_logo.png", 
    url: "https://jb-dev-web.vercel.app/", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <head>
        {/* Sécurisation de l'accès aux propriétés avec l'opérateur de chaînage optionnel */}
        <meta name="description" content={String(metadata?.description)} />
        <meta property="og:title" content={String(metadata?.openGraph?.title)} />
        <meta property="og:description" content={String(metadata?.openGraph?.description)} />
        <meta property="og:image" content={String(metadata?.openGraph?.images)} />
        <meta property="og:url" content={String(metadata?.openGraph?.url)} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
