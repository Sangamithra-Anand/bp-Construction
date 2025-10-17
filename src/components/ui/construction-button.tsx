import * as React from "react";
import { cn } from "./utils";

export interface ConstructionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const ConstructionButton = React.forwardRef<HTMLButtonElement, ConstructionButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-construction-sky disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "btn-construction-primary",
      secondary: "btn-construction-secondary", 
      ghost: "btn-construction-ghost"
    };
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: variant === "primary" ? "h-12 px-6 text-base" : "h-11 px-5 text-sm"
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          variant !== "ghost" && sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ConstructionButton.displayName = "ConstructionButton";

export { ConstructionButton };