import React from "react";
import cn from "classnames";

interface Prop {
  title: string;
  variant: "primary" | "secondary" | "ghost" | "outline" | "category";
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string
}

const CustomButton = ({ title, variant, isActive, onClick, className }: Prop) => {
  const customButtonColor = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 text-white";
      case "category":
        return isActive
          ? "bg-blue-600 text-white"
          : "bg-transparent hover:bg-blue-100";
      case "secondary":
        return "bg-gray-500 text-white";
      case "ghost":
        return "bg-transparent hover:bg-blue-100 text-blue-600";
      case "outline":
        return "border border-blue-600 text-blue-600";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        `${customButtonColor(variant)} py-3 px-7 rounded-full transition-all ease-in-out duration-500 text-gray-500`, className
      )}
    >
      {title}
    </button>
  );
};

export default CustomButton;
