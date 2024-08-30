import { SocialPlatform } from "@lib/types";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const socialMedia: SocialPlatform[] = [
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/dalton-kimmerly-41661531b",
  },
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/dev-of-future",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:me@kdalton@gmail.com",
  },
];

export default socialMedia;
