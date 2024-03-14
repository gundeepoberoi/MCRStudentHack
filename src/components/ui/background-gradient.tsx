import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-md  transition duration-500",
          "bg-zinc-900/5 ring-2 ring-slate-500 ring-offset-2",
          "group-hover:backdrop-blur-3xl"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          "ring-2 ring-slate-500",
          "filter backdrop-blur-3xl"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
