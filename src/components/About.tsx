import Container from "./Container";

const About = () => {
  return (
    <Container className="mx-auto mt-10 max-w-3xl">
      <div className="mx-5 sm:m-0">
        <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-5xl -translate-x-1/2">
          {/* Left line */}
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-slate-300/20 via-slate-400/30 to-transparent" />
          {/* Right line */}
          <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-slate-300/20 via-slate-400/30 to-transparent" />
        </div>
        <div className="max-w-md">
          <h1 className="text-primary pb-2 text-2xl font-bold md:text-3xl">
            Ajay Shekhawat
          </h1>
          <p className="text-muted-foreground text-sm text-pretty">
            I'm a <span className="text-primary font-bold">Full-Stack Developer</span> with a passion for building
            scalable and efficient systems. I'm currently looking for an
            Internship.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
