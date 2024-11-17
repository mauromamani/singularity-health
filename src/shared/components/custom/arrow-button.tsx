import { cn } from '@/shared/lib';

interface ArrowButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  position?: 'left' | 'right';
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  position = 'right',
  ...props
}) => {
  return (
    <button {...props}>
      <ArrowButtonSVG position={position} />
    </button>
  );
};

export const ArrowButtonSVG = ({
  position,
}: {
  position: 'left' | 'right';
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='70'
    height='71'
    fill='none'
    viewBox='0 0 70 71'
    className={cn(position === 'left' ? '-scale-x-100' : 'scale-x-100')}
  >
    <g filter='url(#filter0_d_1_263)'>
      <circle cx='35' cy='32.5' r='32' fill='#FF6752'></circle>
    </g>
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth='2'
      d='M20.001 31.871h29.133'
    ></path>
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='m42.562 25.5 6.571 6.572-6.571 6.571'
    ></path>
    <defs>
      <filter
        id='filter0_d_1_263'
        width='70'
        height='70'
        x='0'
        y='0.5'
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        ></feColorMatrix>
        <feOffset dy='3'></feOffset>
        <feGaussianBlur stdDeviation='1.5'></feGaussianBlur>
        <feComposite in2='hardAlpha' operator='out'></feComposite>
        <feColorMatrix values='0 0 0 0 0.992157 0 0 0 0 0.407843 0 0 0 0 0.270588 0 0 0 0.301961 0'></feColorMatrix>
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1_263'
        ></feBlend>
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_1_263'
          result='shape'
        ></feBlend>
      </filter>
    </defs>
  </svg>
);
