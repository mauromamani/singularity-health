import { CircleYellowSVG } from '@/shared/assets/svg/circle-yellow';
import { SemiCircleYellowSVG } from '@/shared/assets/svg/semi-circle-yellow';
import { ServicesCard } from '@/shared/components/custom/services-card';
import { ReserveSVG } from '../assets/svg/reserve';
import { MatchSVG } from '../assets/svg/match';
import { RelaxSVG } from '../assets/svg/relax';
import { ArrowButton } from '@/shared/components/custom/arrow-button';
import { Input } from '@/shared/components/custom/input';

export const HowItWorks = () => {
  return (
    <section className='z-40 px-6 md:px-[70px] xl:px-[140px] mb-60 md:mb-0 md:min-h-svh relative w-full mx-auto mt-48'>
      <div className='flex flex-col-reverse xl:flex-row w-full mt-10'>
        {/* CARDS */}
        <div className='mx-auto hidden md:block scale-[0.7] lg:scale-[0.8] 2xl:scale-[0.9] 3xl:scale-100 w-[618px] h-[362px] relative left-[-50px] 2xl:left-0'>
          <ServicesCard
            title='Reserve'
            icon={<ReserveSVG />}
            className='z-30 absolute top-[20px] left-[138px] size-[249px] bg-pet-white-900 rounded-[20px] flex flex-col p-10 justify-center items-center gap-y-9'
          />

          <ServicesCard
            title='Match'
            icon={<MatchSVG />}
            className='z-30 absolute bottom-[-160px] right-[-150px] size-[249px] bg-pet-white-900 rounded-[20px] flex flex-col p-10 justify-center items-center gap-y-9'
          />

          <ServicesCard
            title='Relax'
            icon={<RelaxSVG />}
            className='z-30 absolute bottom-[-420px] left-[138px] size-[249px] bg-pet-white-900 rounded-[20px] flex flex-col p-10 justify-center items-center gap-y-9'
          />

          <svg
            className='absolute bottom-[-340px] left-[260px]'
            width='418'
            height='598'
            viewBox='0 0 418 598'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.5 3.99989C0.5 3.99989 320.371 -2.00011 402.834 258.8C485.295 519.6 107.273 604.4 0.5 593.2'
              stroke='#FD6845'
              strokeWidth='7'
              strokeDasharray='30'
            />
          </svg>
        </div>

        <div className='flex flex-col justify-center items-center xl:block w-full xl:w-1/2 xl:ml-60 3xl:ml-80 mt-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-left text-pet-orange-800 mb-12'>
            How it Works
          </h2>

          <div className='flex flex-col text-lg sm:text-2xl text-pet-grey-800/80 font-opensans font-normal mb-8'>
            <p>Because finding a good pet sitter shouldn't be</p>
            <p>a hassle. With Fetch! it's as easy as...</p>
          </div>

          <p className='text-lg sm:text-2xl font-black text-left text-pet-orange-800 font-segoe-ui mb-6'>
            Enter Your Location and Fetch Our Services
          </p>

          <Input type='text' placeholder='ZIP Code'>
            <ArrowButton className='-mr-8' />
          </Input>
        </div>
      </div>

      <CircleYellowSVG />

      <SemiCircleYellowSVG />
    </section>
  );
};
