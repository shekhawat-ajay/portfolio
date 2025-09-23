import { useState, useEffect } from "react";
import Container from "./Container";
import { LocateFixed } from "lucide-react";

const About = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const time = formatter.format(currentTime);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 10000);

      return () => clearInterval(timer);
    }, []);

  return (
    <Container className="relative mt-5 max-w-3xl">
      <div className="px-3 pb-10 sm:px-5">
        <div className="text-muted-foreground mb-5 flex items-center justify-between text-sm">
          <h3>IN {time}</h3>
          <div className="flex items-center gap-1">
            <LocateFixed size={16} strokeWidth={1} />
            <h3>New Delhi, India</h3>
          </div>
        </div>

        <div className="mt-8 mb-8 flex items-center gap-4">
          <div>
            <img
              src="avatar.png"
              alt="avatar"
              width={100}
              className="rounded-full"
            />
          </div>

          <div>
            <h1 className="text-primary font-doto text-xl font-bold md:text-3xl">
              Ajay
            </h1>
            <a href="#" className="text-muted-foreground hover:text-primary">
              @meiajayhoon
            </a>
          </div>
        </div>

        <div className="text-muted-foreground flex max-w-xl flex-col gap-4 text-sm text-pretty">
          <p>
            I'm a{" "}
            <span className="text-primary font-bold">Full-Stack Developer</span>{" "}
            with a passion for building scalable and efficient systems.
          </p>

          <p>
            Currently building projects to strengthen my skills and seeking
            internship opportunities where I can contribute and grow.
          </p>

          <p>
            I love solving problems, learning by doing, and pushing myself with
            every new challenge.
          </p>
        </div>
      </div>

      {/* Full-width horizontal line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-300/10 via-transparent to-slate-300/10" />
    </Container>
  );
};

export default About;
