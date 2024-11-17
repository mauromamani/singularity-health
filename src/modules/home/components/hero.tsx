import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const texts: { [key: string]: string } = {
  '/': 'We Get Pet Care!',
  '/location': 'Location',
  '/blog': 'Blog',
  '/services': 'Services',
  '/about-us': 'About US',
  '/franchise-with-us': 'Franchise with Us',
};

export const Hero = () => {
  const location = useLocation();

  const renderText = useMemo(() => {
    const path = location.pathname as keyof typeof texts;

    if (texts[path]) {
      return texts[path];
    }

    return 'We Get Pet Care!';
  }, [location.pathname]);

  return (
    <section className='z-40 px-6 md:px-[70px] xl:px-[140px] min-h-svh relative w-full mx-auto'>
      <div className='flex w-full items-center mt-10'>
        <div className='w-full lg:w-1/2 space-y-8 mt-20 lg:mt-36'>
          <h2 className='text-center text-5xl lg:text-[60px] 2xl:text-[84px] sm:text-left text-pet-white-1000 font-museo-sans-rounded font-semibold'>
            {renderText}
          </h2>

          <p className='text-center font-opensans font-normal text-lg xl:text-2xl sm:text-left text-pet-white-1000 max-w-2xl'>
            For over 17 Years, Fetch! Pet Care has been a trusted partner in
            keeping pets healthy and happy!
          </p>

          <div className='flex items-center space-y-5 sm:space-x-10 font-opensans flex-col sm:flex-row'>
            <button
              style={{ boxShadow: '0px 3px 3px 0 rgba(44,29,173,0.16)' }}
              className='text-pet-white-1000 rounded-full text-md xl:text-xl font-bold bg-pet-blue-1000 px-9 py-6'
              type='button'
            >
              Schedule Service
            </button>

            <p className='text-md xl:text-xl text-pet-white-1000 font-light'>
              Or Call <a href='#'>866.338.2463</a>
            </p>
          </div>
        </div>

        {/* PERRO */}
        <div className='hidden lg:block w-1/2'>
          <div className='ml-0 xl:ml-10 2xl:ml-32 3xl:ml-52 relative z-40 scale-[0.7] xl:scale-[0.8] 3xl:scale-100 size-[600px]'>
            <div className='absolute circle size-[546px] z-20 top-[185px] left-[60px]' />
            <div className='absolute top-0 perro-container z-40 ml-3'>
              <img src='/perro.png' className='perro' />

              <svg>
                <clipPath id='mask'>
                  <path
                    d='M595 1L1.13281 12.7333L125.074 647.437C168.087 700.12 279.582 745.127 365.247 728.571C464.575 715.593 538.445 631.248 552.195 604.443L595 1Z'
                    stroke='black'
                  />
                </clipPath>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
