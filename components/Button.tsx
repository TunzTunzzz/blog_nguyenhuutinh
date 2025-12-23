import React from 'react';
import { ButtonVariant } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold border-2 border-black transition-all duration-100 ease-in-out px-6 py-2 flex items-center justify-center gap-2";
  
  // Interaction: Move 2px down/right on active, reduce shadow size to match
  const interactionStyles = "shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-hard-sm disabled:opacity-50 disabled:cursor-not-allowed";

  let variantStyles = "";
  switch (variant) {
    case ButtonVariant.PRIMARY:
      variantStyles = "bg-accent text-white hover:bg-[#ff5252]";
      break;
    case ButtonVariant.SECONDARY:
      variantStyles = "bg-dark text-cream hover:bg-black";
      break;
    case ButtonVariant.OUTLINE:
      variantStyles = "bg-transparent text-dark hover:bg-white";
      break;
  }

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${interactionStyles} ${variantStyles} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};