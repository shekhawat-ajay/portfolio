import Container from "./Container";

const Projects = () => {
  const projects = [{ name: "Drizzle", description: "A weather app." }];
  return (
    <Container className="mt-8 max-w-3xl">
      <div className="mx-5">
        <h3 className="text-primary font-heading mb-5 text-xl font-bold md:text-2xl">
          Projects
        </h3>
        <div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
