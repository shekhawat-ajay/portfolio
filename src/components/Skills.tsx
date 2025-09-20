import Container from "./Container";

const Skills = () => {
  const skills = [
    { name: "TypeScript", path: "/typescript.svg", width: "40" },
    { name: "Python", path: "/python.svg", width: "40" },
    { name: "React", path: "/reactjs.svg", width: "40" },
    { name: "React Query", path: "/react-query.svg", width: "40" },
    { name: "React Router", path: "/reactrouter.svg", width: "40" },
    { name: "Node.js", path: "/nodejs.svg", width: "40" },
    { name: "Framer Motion", path: "/framer-light.svg", width: "20" },
    { name: "Tailwind CSS", path: "/tailwindcss.svg", width: "40" },
    { name: "Express.js", path: "/expressjs-light.svg", width: "40" },
    { name: "MongoDB", path: "/mongodb.svg", width: "40" },
  ];

  return (
    <Container className="mt-10 max-w-3xl">
      <h2 className="text-primary mb-5 text-xl font-bold md:text-2xl">
        Skills
        <div></div>
      </h2>
    </Container>
  );
};

export default Skills;
