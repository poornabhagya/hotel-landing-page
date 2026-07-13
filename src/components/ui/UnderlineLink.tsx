import React from "react";
import { ArrowRight } from "lucide-react";

interface UnderlineLinkProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export default function UnderlineLink({ href = "#", onClick, children, className = "" }: UnderlineLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2 group ${className}`}
      style={{
        fontSize: "0.7rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#2A2520",
        fontWeight: 400,
        borderBottom: "1px solid rgba(42,37,32,0.3)",
        paddingBottom: 2,
        width: "fit-content",
        transition: "border-color 0.2s",
      }}
    >
      {children}
      <ArrowRight size={10} className="opacity-60 group-hover:translate-x-0.5 transition-transform duration-200" />
    </a>
  );
}
