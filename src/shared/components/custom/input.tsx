import { cn } from '@/shared/lib';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  containerClassName = 'w-[293px] ',
  className,
  children,
  ...rest
}) => {
  return (
    <div
      style={{ boxShadow: '0px 2px 5px 1px rgba(44,29,173,0.16)' }}
      className={cn(
        'text-pet-grey-800/80 rounded-full text-xl lg:text-2xl font-segoe-ui font-normal bg-pet-white-900 px-9 pt-1 flex items-center justify-between',
        containerClassName
      )}
    >
      <input
        className={cn(
          'bg-transparent w-10/12 focus:outline-none -mt-1',
          className
        )}
        {...rest}
      />

      {children}
    </div>
  );
};
