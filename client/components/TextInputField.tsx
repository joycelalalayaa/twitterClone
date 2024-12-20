import React from "react";

interface TextInputFieldProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
  maxLength?: number;
  type?: 'text' | 'password';
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  value,
  onChange,
  placeholder,
  maxLength = 280,
  type = 'text',
}) => {
  return (
    <div className={`text-input-field`}>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full px-4 py-3 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default TextInputField;
