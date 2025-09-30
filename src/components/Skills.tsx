import Container from "./Container";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const languages = [
    { name: "TypeScript", path: "/typescript.svg" },
    { name: "JavaScript", path: "/javascript.svg" },
    { name: "Python", path: "/python.svg" },
  ];

  const libraries = [
    { name: "React", path: "/reactjs.svg" },
    { name: "React Query", path: "/react-query.svg" },
    { name: "React Router", path: "/reactrouter.svg" },
    { name: "Tailwind CSS", path: "/tailwindcss.svg" },
    { name: "Framer Motion", path: "/framer-motion.svg" },
    { name: "Express.js", path: "/expressjs.svg" },
    { name: "Zod", path: "/zod.png" },
  ];

  const runtime = [{ name: "Node.js", path: "/nodejs.svg" }];

  const database = [{ name: "MongoDB", path: "/mongodb.svg" }];

  const developerTools = [
    { name: "Git", path: "/git.svg" },
    { name: "GitHub", path: "/github.svg" },
    { name: "VS Code", path: "/VScode.svg" },
    { name: "Postman", path: "/Postman.svg" },
  ];

  return (
    <Container className="relative max-w-3xl">
      <div className="mt-8 max-w-xl px-3 pb-8 sm:px-5">
        <h2 className="text-primary font-heading mb-4 text-xl font-bold md:text-2xl">
          Skills
          <span className="text-accent ml-5 font-sans text-sm font-medium">
            Which I use/know
          </span>
        </h2>

        <p className="text-muted-foreground mb-8 text-sm text-pretty">
          These are the technologies I've learned and worked with. This list is
          constantly evolving as I continue to learn and grow as a developer.
        </p>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground text-sm">
              &lt; LANGUAGES /&gt;
            </h3>
            <ul className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <li key={language.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={language.path} alt="" width={15} />
                    {language.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex max-w-md flex-col gap-3">
            <h3 className="text-muted-foreground text-sm">
              &lt; FRAMEWORKS / LIBRARIES /&gt;
            </h3>
            <ul className="flex flex-wrap gap-2">
              {libraries.map((language) => (
                <li key={language.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={language.path} alt="" width={15} />
                    {language.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground text-sm">
              &lt; BACKEND & RUNTIME /&gt;
            </h3>
            <ul className="flex flex-wrap gap-2">
              {runtime.map((language) => (
                <li key={language.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={language.path} alt="" width={15} />
                    {language.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground text-sm">
              &lt; DATABASE /&gt;
            </h3>
            <ul className="flex flex-wrap gap-2">
              {database.map((language) => (
                <li key={language.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={language.path} alt="" width={15} />
                    {language.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground text-sm">
              &lt; DEVELOPER TOOLS /&gt;
            </h3>
            <ul className="flex flex-wrap gap-2">
              {developerTools.map((language) => (
                <li key={language.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={language.path} alt="" width={15} />
                    {language.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
    </Container>
  );
};

export default Skills;
