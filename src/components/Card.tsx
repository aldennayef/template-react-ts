import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Card = ({ children, title, className, ...props }: CardProps) => (
  <div
    className={cn(
      'bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden',
      className
    )}
    {...props}
  >
    {title && (
      <div className="px-6 py-4 border-b border-gray-100 font-semibold text-gray-800">
        {title}
      </div>
    )}
    <div className={title ? 'p-6' : ''}>{children}</div>
  </div>
);

export const CardHeader = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('px-6 py-4 border-b border-gray-200 font-bold', className)}
    {...props}
  >
    {children}
  </div>
);

export const CardBody = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6', className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('px-6 py-4 bg-gray-50 border-t border-gray-200', className)}
    {...props}
  >
    {children}
  </div>
);