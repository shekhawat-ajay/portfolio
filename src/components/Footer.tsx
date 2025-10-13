import { Container } from "@/components";
import { Button } from "@/components/ui";
import {
  BlueSkyIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/Icons";

const Footer = () => {
  const socialHandles = [
    {
      name: "GitHub",
      Icon: GitHubIcon,
      link: "https://github.com/shekhawat-ajay",
    },
    {
      name: "LinkedIN",
      Icon: LinkedinIcon,
      link: "#",
    },
    {
      name: "Discord",
      Icon: DiscordIcon,
      link: "#",
    },
    { name: "Twitter", Icon: TwitterIcon, link: "https://x.com/meiajayhoon" },
    {
      name: "BlueSky",
      Icon: BlueSkyIcon,
      link: "https://bsky.app/profile/ajayshekhawat.bsky.social",
    },
  ];
  return (
    <Container className="max-w-3xl">
      <div className="mx-auto max-w-md">
        <div className="mb-5">
          <ul className="flex flex-wrap justify-center gap-3">
            {socialHandles.map((handle) => (
              <li key={handle.name}>
                <a href={handle.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="hover:ring-accent-foreground cursor-pointer delay-100 hover:ring"
                  >
                    <handle.Icon className="size-5" />
                    <span className="sr-only">{handle.name}</span>
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted-foreground mb-10 text-center text-xs font-light text-balance">
          © {new Date().getFullYear()} Ajay Shekhawat. All rights reserved
          (even the bugs).
        </p>
      </div>
    </Container>
  );
};

export default Footer;
