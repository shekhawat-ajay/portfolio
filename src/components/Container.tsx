import { cn } from "@/lib/utils";
import React from "react";

type containerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: containerProps) => {
  return (
    <div className={cn("mx-auto max-w-5xl ", className)}>
      {children}
    </div>
  );
};

export default Container;
