import { Container } from "@/components";
import { Button } from "@/components/ui";
import {
  BlueSkyIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/Icons";
import { motion } from "motion/react";

const Connect = () => {
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
    <Container className="relative max-w-xl">
      <div className="mt-6 px-3 pb-10 sm:px-5">
        <h2 className="text-muted-foreground font-heading text-sm">
          Where to find me (digitally)
        </h2>
        <div className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {socialHandles.map((handle) => (
              <motion.li
                key={handle.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1, ease: "easeIn", type: "tween" }}
              >
                <a href={handle.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="hover:ring-accent-foreground cursor-pointer delay-100 hover:ring"
                  >
                    <handle.Icon className="mr-0.5 size-5" />
                    {handle.name}
                  </Button>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Connect;
