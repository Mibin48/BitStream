import { motion, useReducedMotion, HTMLMotionProps } from 'framer-motion';

interface NeobrutalistButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const NeobrutalistButton = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: NeobrutalistButtonProps) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    primary: 'bg-green-500 text-white border-black',
    secondary: 'bg-purple-500 text-white border-black',
    outline: 'bg-white text-black border-black',
    ghost: 'bg-transparent text-black border-transparent hover:border-black'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm border-[2px] shadow-[2px_2px_0_0_#0F172A]',
    md: 'px-6 py-3 text-base border-[3px] shadow-[4px_4px_0_0_#0F172A]',
    lg: 'px-8 py-4 text-lg border-[3px] shadow-[6px_6px_0_0_#0F172A]'
  };

  // Adjust shadow for visual hierarchy (secondary/outline get smaller shadows)
  const hierarchyStyles = variant === 'primary' || variant === 'secondary'
    ? ''
    : 'shadow-[2px_2px_0_0_#0F172A] border-[2.5px]';

  return (
    <motion.button
      whileHover={shouldReduceMotion ? {} : { translateX: -2, translateY: -2, boxShadow: variant === 'ghost' ? '0 0 0 0 transparent' : (size === 'lg' ? '8px 8px 0 0 #0F172A' : '6px 6px 0 0 #0F172A') }}
      whileTap={shouldReduceMotion ? {} : { translateX: 0, translateY: 0, boxShadow: 'none' }}
      className={`
        relative inline-flex items-center justify-center font-black transition-colors rounded-xl
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0
        ${variants[variant]}
        ${sizes[size]}
        ${hierarchyStyles}
        ${className}
      `}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading…</span>
        </div>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
};

export default NeobrutalistButton;
