import Container from "./Container";
import { Badge } from "@/components/ui";

const Skills = () => {
  const languages = [
    { name: "TypeScript", path: "/typescript.svg", size: 15 },
    { name: "JavaScript", path: "/javascript.svg", size: 15 },
    { name: "Python", path: "/python.svg", size: 15 },
  ];

  const libraries = [
    { name: "React", path: "/reactjs.svg", size: 15 },
    { name: "React Query", path: "/react-query.svg", size: 15 },
    { name: "React Router", path: "/reactrouter.svg", size: 15 },
    { name: "Tailwind CSS", path: "/tailwindcss.svg", size: 15 },
    { name: "Framer Motion", path: "/framer-motion.svg", size: 12 },
    { name: "Express.js", path: "/expressjs.svg", size: 15 },
    { name: "Zod", path: "/zod.png", size: 15 },
  ];

  const runtime = [{ name: "Node.js", path: "/nodejs.svg", size: 15 }];

  const database = [{ name: "MongoDB", path: "/mongodb.svg", size: 15 }];

  const developerTools = [
    { name: "Git", path: "/git.svg", size: 15 },
    { name: "GitHub", path: "/github.svg", size: 15 },
    { name: "VS Code", path: "/VScode.svg", size: 15 },
    { name: "Postman", path: "/Postman.svg", size: 15 },
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
                    <img src={language.path} alt="" width={language.size} />
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
              {libraries.map((library) => (
                <li key={library.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={library.path} alt="" width={library.size} />
                    {library.name}
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
              {runtime.map((runtime) => (
                <li key={runtime.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={runtime.path} alt="" width={runtime.size} />
                    {runtime.name}
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
              {database.map((database) => (
                <li key={database.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={database.path} alt="" width={database.size} />
                    {database.name}
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
              {developerTools.map((tool) => (
                <li key={tool.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground py-1 delay-100 hover:ring"
                  >
                    <img src={tool.path} alt="" width={tool.size} />
                    {tool.name}
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
