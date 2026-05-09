import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
  color?: string;
  fill?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 40, 
  strokeWidth = 8,
  color = "black",
  fill = "white"
}) => {

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      className={cn("w-full h-full", className)}
      style={{ width: size, height: size }}
    >
      <path 
        d="M50,15 A25,25 0 1,0 50,65 A25,25 0 1,0 50,15 Z M35,40 A25,25 0 1,0 35,90 A25,25 0 1,0 35,40 Z M65,40 A25,25 0 1,0 65,90 A25,25 0 1,0 65,40 Z"
        fill={fill}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />





    </svg>
  );
};

export default Logo;
