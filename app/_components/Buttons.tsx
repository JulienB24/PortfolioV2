import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleUser,faComment } from "@fortawesome/free-solid-svg-icons";

export const Buttons = () => {
  return (
    <Section className="-mt-20 gap-2">
      <div className="items-center">
        <Button size="lg" className="w-fit mt-4 bg-blue-800">
          <Link             className="flex flex-nowrap"
 href="#contact"> <FontAwesomeIcon className="mr-1 mt-0.5" icon={faComment} />Contact me</Link>{" "}
        </Button>
        <Button size="lg" variant="ghost" className="w-fit mt-4">
          <Link
            target="_blank"
            className="flex flex-nowrap"
            href="https://github.com/JulienB24"
          >
            {" "}
            <FontAwesomeIcon className="mr-1 mt-0.5" icon={faGithub} /> Github
          </Link>
        </Button>
        <Button size="lg" variant="ghost" className="w-fit mt-4">
          <Link
            target="_blank"
            className="flex flex-nowrap"
            href="https://www.linkedin.com/in/julien-breuil-dev/"
          >
            <FontAwesomeIcon className="mr-1 mt-0.5" icon={faLinkedin} /> Linkedin
          </Link>
        </Button>
        <Button size="lg" variant="ghost" className="z-10 w-fit mt-4">
          <FontAwesomeIcon className="mr-1 mt-0.5" icon={faXTwitter} />
        </Button>
        <Button size="lg" variant="ghost" className="z-10 w-fit mt-4">
          <Link  target="_blank"
            className="flex flex-nowrap"
            href="#"><FontAwesomeIcon className="mr-1 mt-0.5" icon={faCircleUser} />Mon CV </Link>
        </Button>
      </div>
    </Section>
  );
};
