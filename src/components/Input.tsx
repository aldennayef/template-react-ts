import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, name, className, containerClassName, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1 mb-4', containerClassName)}>
        <label htmlFor={name} className="font-medium text-sm text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          name={name}
          id={name}
          className={cn(
            'border rounded-md px-3 py-2 text-sm outline-none transition-colors',
            'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
            className
          )}
          {...props}
        />
        {error && <span className="text-red-500 text-xs mt-0.5">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';