import { cn } from '@/shared/lib';

interface ServicesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: React.ReactNode;
}

export const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  icon,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'size-[200px] xl:size-[249px] bg-pet-white-900 rounded-[20px] flex flex-col p-6 xl:p-10 justify-center items-center gap-y-9',
        className
      )}
      style={{ boxShadow: '0px 3px 4px 1px rgba(0,0,0,0.16)' }}
      {...rest}
    >
      {icon}

      <p className='text-2xl text-center text-pet-grey-900'>{title}</p>
    </div>
  );
};
