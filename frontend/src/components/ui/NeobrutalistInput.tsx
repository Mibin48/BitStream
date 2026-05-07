import React from 'react';

interface NeobrutalistInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

const NeobrutalistInput = ({
  label,
  error,
  containerClassName = '',
  ...props
}: NeobrutalistInputProps) => {
  const id = props.id || props.name;

  return (
    <div className={`space-y-2 ${containerClassName}`}>
      {label && (
        <label htmlFor={id} className="block font-bold text-sm uppercase tracking-wider ml-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`
          w-full bg-white border-[3px] border-black rounded-xl px-4 py-3 font-medium 
          transition-shadow shadow-[4px_4px_0_0_#0F172A]
          placeholder:text-gray-400 placeholder:font-medium
          focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-200 
          focus-visible:translate-x-[1px] focus-visible:translate-y-[1px] focus-visible:shadow-[3px_3px_0_0_#0F172A]
          ${error ? 'border-red-500' : 'border-black'}
          ${props.className || ''}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs font-black ml-1 uppercase" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
};

export default NeobrutalistInput;
