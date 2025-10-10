import Container from "./Container";
import { Badge } from "@/components/ui";

const Skills = () => {
  const languages = [
    { name: "TypeScript", path: "/typescript.svg", size: 16 },
    { name: "JavaScript", path: "/javascript.svg", size: 16 },
    { name: "Python", path: "/python.svg", size: 16 },
    { name: "C", path: "/C.svg", size: 16 },
    { name: "C++", path: "/cpp.svg", size: 16 },
  ];

  const libraries = [
    { name: "React", path: "/reactjs.svg", size: 16 },
    { name: "React Query", path: "/react-query.svg", size: 16 },
    { name: "React Router", path: "/reactrouter.svg", size: 16 },
    { name: "Tailwind CSS", path: "/tailwindcss.svg", size: 16 },
    { name: "Framer Motion", path: "/framer-motion.svg", size: 16 },
    { name: "Express.js", path: "/expressjs.svg", size: 16 },
    { name: "Zod", path: "/zod.svg", size: 16 },
  ];

  const runtime = [{ name: "Node.js", path: "/nodejs.svg", size: 16 }];

  const database = [{ name: "MongoDB", path: "/mongodb.svg", size: 16 }];

  const developerTools = [
    { name: "Git", path: "/git.svg", size: 16 },
    { name: "Postman", path: "/Postman.svg", size: 16 },
    { name: "Vite", path: "/Vite.js.svg", size: 16 },
    { name: "Vercel", path: "/vercel.svg", size: 16 },
    { name: "Appwrite", path: "/appwrite.svg", size: 16 },
    { name: "Supabase", path: "/supabase.svg", size: 16 },
    { name: "shadcn", path: "/shadcn.svg", size: 16 },
  ];

  return (
    <Container className="relative max-w-xl">
      <div className="mt-8 px-3 pb-8 sm:px-5">
        <h2 className="text-primary font-heading mb-4 text-xl font-bold md:text-2xl">
          Skills
          <span className="text-accent ml-5 font-sans text-sm font-medium">
            Which I use/know
          </span>
        </h2>

        <p className="text-muted-foreground mb-8 text-sm text-pretty">
          These are the technologies I have experience working with. This list
          reflects my current skill set and evolves as I continue to develop my
          expertise.
        </p>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground text-sm">
              &lt; LANGUAGES /&gt;
            </h3>
            <ul className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <li key={language.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground px-3 py-1.5 delay-100 hover:ring"
                  >
                    <img
                      src={language.path}
                      alt={`${language.name} logo`}
                      width={language.size}
                      className="mr-1"
                    />
                    {language.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex max-w-lg flex-col gap-3">
            <h3 className="text-muted-foreground text-sm">
              &lt; FRAMEWORKS / LIBRARIES /&gt;
            </h3>
            <ul className="flex flex-wrap gap-2">
              {libraries.map((library) => (
                <li key={library.name}>
                  <Badge
                    variant="secondary"
                    className="hover:ring-accent-foreground px-3 py-1.5 delay-100 hover:ring"
                  >
                    <img
                      src={library.path}
                      alt={`${library.name}logo`}
                      width={library.size}
                      className="mr-1"
                    />
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
                    className="hover:ring-accent-foreground py-1.5 px-3 delay-100 hover:ring"
                  >
                    <img src={runtime.path} alt={`${runtime.name} logo`} width={runtime.size} className="mr-1" />
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
                    className="hover:ring-accent-foreground py-1.5 px-3 delay-100 hover:ring"
                  >
                    <img src={database.path} alt={`${database.name} logo`} width={database.size} className="mr-1" />
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
                    className="hover:ring-accent-foreground py-1.5 px-3 delay-100 hover:ring"
                  >
                    <img src={tool.path} alt="" width={tool.size} className="mr-1" />
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
