import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export const Buttons = () => {
  return (
    <Section className="-mt-20">
      <div className="items-center">
        <Button size="lg" className="w-fit mt-4">
          <Link href="#contact">Contact me</Link>{" "}
        </Button>
        <Button size="lg" variant="ghost" className="w-fit mt-4">
          <Link
            target="_blank"
            className="flex flex-nowrap"
            href="https://github.com/JulienB24"
          >
            {" "}
            <FontAwesomeIcon className="mr-1" icon={faGithub} /> Github
          </Link>
        </Button>
        <Button size="lg" variant="ghost" className="w-fit mt-4">
          <Link
            target="_blank"
            className="flex flex-nowrap"
            href="https://www.linkedin.com/in/julien-breuil-dev/"
          >
            <FontAwesomeIcon className="mr-1" icon={faLinkedin} /> Linkedin
          </Link>
        </Button>
        <Button size="lg" variant="ghost" className="z-10 w-fit mt-4">
          <FontAwesomeIcon icon={faXTwitter} />
        </Button>
      </div>
    </Section>
  );
};
