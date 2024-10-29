import { cn } from "@/utils/cn";
import { forwardRef } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { icon, label, variant = "ghost", size = "md", className, ...props },
    ref
  ) => {
    const variants = {
      primary: "bg-orange-500 hover:bg-orange-600 text-white",
      secondary: "bg-gray-700 hover:bg-gray-600 text-gray-100",
      ghost: "hover:bg-gray-700 text-gray-100",
    };

    const sizes = {
      sm: "p-1",
      md: "p-2",
      lg: "p-3",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",
          variants[variant],
          sizes[size],
          className
        )}
        aria-label={label}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
