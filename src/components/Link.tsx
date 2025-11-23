import React from "react";
import { cn } from "@/lib/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  className,
  target = "_self",
  children,
  ...props
}) => {
  return (
    <a
      className={cn(
        "cursor-pointer text-cyan-800 underline decoration-cyan-800 decoration-[0.1em] underline-offset-2 transition-all",
        "visited:text-cyan-800 visited:decoration-cyan-800",
        "hover:decoration-cyan-900 hover:text-cyan-900",
        className,
      )}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
};
