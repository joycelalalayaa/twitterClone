import React from "react";

interface ButtonProps {
  label: string; // Text displayed on the button
  onClick: () => void; // Click handler
  variant: "primary" | "secondary";
  disabled?: boolean; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant,
  disabled = false,
}) => {
  let background = "";
  if (disabled) {
    background = "bg-gray-400 cursor-not-allowed  text-white";
  } else {
    if (variant == "primary") {
      background =
        "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition text-white";
    } else {
      background =
        " bg-blue-100 active:bg-blue-300 text-slate-900 hover:bg-blue-200";
    }
  }
  return (
    <div>
      <button
        className={`w-full px-4 py-3 font-bold rounded-full ${background}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
