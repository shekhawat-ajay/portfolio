import Container from "./Container";

const About = () => {
  return (
    <Container className="mx-auto mt-10 max-w-3xl">
        <div className="mx-5 max-w-md">
          <h1 className="text-primary mb-3 text-2xl font-bold md:text-3xl">
            hi, i'm ajay.
          </h1>
          <p className="text-muted-foreground text-sm text-pretty">
            I'm a{" "}
            <span className="text-primary font-bold">Full-Stack Developer</span>{" "}
            with a passion for building scalable and efficient systems. I'm
            currently looking for an Internship.
          </p>
        </div>
    </Container>
  );
};

export default About;
