import { Section } from "./Section";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <Section className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
      <p className="mb-4">© {new Date().getFullYear()} Julien Breuil — Merci de votre visite 👋</p>
      <div className="flex justify-center gap-4 text-muted-foreground">
        <Link href="https://github.com/JulienB24" target="_blank" aria-label="GitHub">
          <Github className="w-5 h-5 hover:text-foreground" />
        </Link>
        <Link href="https://www.linkedin.com/in/julien-breuil-dev/" target="_blank" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:text-foreground" />
        </Link>
        <Link href="mailto:jbdevweb@protonmail.com" aria-label="Email">
          <Mail className="w-5 h-5 hover:text-foreground" />
        </Link>
      </div>
    </Section>
  );
};

