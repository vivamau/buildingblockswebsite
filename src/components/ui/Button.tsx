import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}) => {
  const baseClasses = 'justify-center items-center flex gap-2 font-medium leading-5 rounded-md transition-colors';
  
  const variantClasses = {
    primary: 'bg-zinc-900 text-neutral-50 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_0_rgba(0,0,0,0.06)] hover:bg-zinc-800',
    secondary: 'bg-neutral-50 text-zinc-900 hover:bg-gray-100',
    ghost: 'bg-transparent text-zinc-900 hover:bg-gray-100'
  };

  const sizeClasses = {
    sm: 'min-h-9 h-9 px-4 py-2 text-sm',
    md: 'min-h-10 h-10 px-4 py-2 text-sm',
    lg: 'min-h-11 h-11 px-6 py-3 text-base'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <span className="self-stretch my-auto">{children}</span>
      {icon && <span className="self-stretch shrink-0 my-auto">{icon}</span>}
    </button>
  );
};
