import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface NeuroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'raised' | 'inset' | 'flat';
  size?: 'sm' | 'md' | 'lg';
}

export const NeuroCard = forwardRef<HTMLDivElement, NeuroCardProps>(
  ({ className, variant = 'raised', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'bg-gray-100 rounded-2xl border border-gray-200 transition-all duration-200';
    
    const variantClasses = {
      raised: 'shadow-lg hover:shadow-xl',
      inset: 'shadow-inner',
      flat: 'shadow-sm'
    };

    const sizeClasses = {
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6'
    };

    return (
      <div
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
      </div>
    );
  }
);

NeuroCard.displayName = 'NeuroCard';