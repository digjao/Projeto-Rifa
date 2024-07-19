// Input.tsx
import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  type: string;
  id: string;
  className?: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ name, label, id, placeholder, type, className, value, onChange, errorMessage }) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="text-xl font-semibold mb-1 block">
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className={`border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-[#EFEFEF] ${className}`}
        value={value}
        onChange={onChange}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Input;
