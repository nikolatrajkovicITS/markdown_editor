interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = ({
  variant = "secondary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-3 py-1 rounded flex items-center space-x-1 transition-colors";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "hover:bg-gray-700 text-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};
