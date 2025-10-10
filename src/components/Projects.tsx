import Container from "./Container";

const Projects = () => {
  return (
    <Container className="relative max-w-xl">
      <div className="mt-8 max-w-xl px-3 pb-8 sm:px-5">
        <h3 className="text-primary font-heading mb-5 text-xl font-bold md:text-2xl">
          Projects
        </h3>
        <div>
          <div></div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
    </Container>
  );
};

export default Projects;
