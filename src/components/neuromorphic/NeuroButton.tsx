import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface NeuroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const NeuroButton = forwardRef<HTMLButtonElement, NeuroButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseClasses = `
      rounded-2xl font-medium transition-all duration-200 ease-in-out
      hover:scale-105 active:scale-95 shadow-lg
      focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    `;

    const variantClasses = {
      default: 'text-gray-800 bg-gray-100 hover:bg-gray-50 border border-gray-200',
      primary: 'text-white bg-blue-600 hover:bg-blue-700 border border-blue-700',
      secondary: 'text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200'
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeuroButton.displayName = 'NeuroButton';