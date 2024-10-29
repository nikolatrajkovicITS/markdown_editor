import { cn } from "@/utils/cn";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, fullWidth, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label className="text-sm font-medium text-gray-400">{label}</label>
        )}
        <input
          ref={ref}
          className={cn(
            "bg-gray-700 px-3 py-2 rounded-lg text-gray-100",
            "focus:outline-none focus:ring-2 focus:ring-orange-500",
            "placeholder:text-gray-400",
            error && "border border-red-500",
            fullWidth && "w-full",
            className
          )}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
