import React, { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, name, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor={name} className="font-medium text-sm">
          {label}
        </label>
        <input
          ref={ref}
          name={name}
          id={name}
          className={`border rounded-md px-3 py-2 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          {...props}
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';