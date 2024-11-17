import { WaveBlueSVG } from '@/shared/assets/svg/wave-blue';
import { ServicesCard } from '@/shared/components/custom/services-card';
import { PetSittingSVG } from '../assets/svg/pet-sitting';
import { DogWalkingSVG } from '../assets/svg/dog-walking';
import { OvernightSVG } from '../assets/svg/overnight';
import { OtherServicesSVG } from '../assets/svg/other-services';
import { Input } from '@/shared/components/custom/input';
import { ArrowButton } from '@/shared/components/custom/arrow-button';

export const Services = () => {
  return (
    <section className='z-40 px-6 md:px-[70px] xl:px-[140px] relative w-full mx-auto'>
      <div className='flex flex-col xl:flex-row w-full xl:mt-10 space-y-10'>
        <div className='flex justify-center flex-col items-center w-full xl:w-1/2 xl:block space-y-8 3xl:ml-36'>
          <h2 className='text-4xl sm:text-5xl font-bold text-left text-pet-orange-800'>
            Our Services
          </h2>

          <div className='flex flex-col text-lg sm:text-2xl text-pet-grey-800/80 font-opensans font-normal'>
            <p>National Brand With a Local Feel.</p>
            <p>Experience the Fetch! Difference</p>
          </div>

          <p className='text-lg sm:text-2xl font-black text-center lg:text-left text-pet-orange-800 font-segoe-ui'>
            Enter Your Location and Fetch Our Services
          </p>

          <Input type='text' placeholder='ZIP Code'>
            <ArrowButton className='-mr-8' />
          </Input>
        </div>

        {/* CARDS */}
        <div className='w-full xl:w-[550px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-y-8 gap-x-5 place-items-center'>
          <ServicesCard title='Dog Walking' icon={<DogWalkingSVG />} />

          <ServicesCard title='Pet Sitting' icon={<PetSittingSVG />} />

          <ServicesCard title='Overnight Care' icon={<OvernightSVG />} />

          <ServicesCard title='Other Services' icon={<OtherServicesSVG />} />
        </div>
      </div>

      <WaveBlueSVG />
    </section>
  );
};
