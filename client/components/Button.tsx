import React from "react";

interface ButtonProps {
  label: string; // Text displayed on the button
  onClick: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Additional CSS classes
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`w-full px-4 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
