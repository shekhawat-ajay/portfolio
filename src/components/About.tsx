import { useState, useEffect } from "react";
import { LocateFixed, Download } from "lucide-react";
import { Container } from "@/components";
import { Button } from "@/components/ui";
import { motion } from "motion/react";

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
    <Container className="relative max-w-3xl">
      <div className="mt-5 px-3 pb-6 sm:px-5">
        <div className="text-muted-foreground mb-5 flex items-center justify-between text-sm">
          <h3>IN {time}</h3>
          <div className="flex items-center gap-1">
            <LocateFixed size={16} strokeWidth={1} />
            <h3>New Delhi, India</h3>
          </div>
        </div>

        <motion.div
          className="mt-8 mb-8 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeIn",
            type: "tween",
          }}
        >
          <div>
            <img
              src="avatar.png"
              alt="avatar"
              width={100}
              className="rounded-full"
            />
          </div>

          <div className="text-center">
            <h1 className="text-primary font-heading text-2xl font-medium md:text-3xl">
              Ajay Shekhawat
            </h1>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm delay-100"
            >
              @meiajayhoon
            </a>
          </div>
        </motion.div>

        <motion.div
          className="text-muted-foreground mx-auto max-w-md space-y-2.5 text-center text-sm text-pretty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeIn",
            type: "tween",
          }}
        >
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
        </motion.div>

        <motion.div
          className="mx-auto mt-10 flex max-w-md flex-wrap items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: "easeIn",
            type: "tween",
          }}
        >
          <div className="bg-accent hover:ring-highlight/75 flex items-center gap-2 rounded-md px-3 py-2 delay-100 hover:ring">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="bg-highlight relative inline-flex size-3 rounded-full"></span>
            </span>
            <h3 className="text-accent-foreground font-heading text-[13px] font-light tracking-wide">
              Available for new opportunities
            </h3>
          </div>
          <Button
            variant="secondary"
            className="hover:ring-accent-foreground cursor-pointer text-[13px] delay-100 hover:ring"
          >
            <Download />
            Download CV
          </Button>
        </motion.div>
      </div>

      {/* Full-width horizontal line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
    </Container>
  );
};

export default About;
