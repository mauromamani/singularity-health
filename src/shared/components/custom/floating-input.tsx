import { cn } from '@/shared/lib';
import { useState } from 'react';

interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
  onChange,
  placeholder,
  className,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className='relative w-full'>
      <input
        style={{
          boxShadow: '2px 2px 3px 1px rgba(44,29,173,0.2)',
        }}
        id='floatingInput'
        className={cn(
          'w-full pt-4 pb-1 px-5 text-lg focus:outline-none',
          className
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        {...props}
      />

      <label
        htmlFor='floatingInput'
        className={`absolute left-2 transition-all duration-200 ${
          isFocused || value
            ? 'top-0.5 text-gray-400 text-[12px] px-2'
            : 'top-1 text-gray-400 text-[24px] pl-3'
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};
