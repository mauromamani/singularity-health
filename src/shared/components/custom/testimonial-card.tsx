import { cn } from '@/shared/lib';

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string;
  testimonial: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  testimonial,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'w-[696px] h-[411px] rounded-[20px] bg-pet-orange-900 flex flex-col items-center justify-center space-y-7 card-effect',
        className
      )}
      {...rest}
    >
      <img className='size-[108px] rounded-full object-cover' src={image} />

      <p className='text-[32px] text-center text-pet-white-900'>{name}</p>

      <p className='text-2xl text-center text-pet-white-900 font-opensans font-normal px-10'>
        {testimonial}
      </p>
    </div>
  );
};
