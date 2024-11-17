export const MakeFetchHappen = () => {
  return (
    <section className='z-40 px-6 md:px-[70px] xl:px-[140px] relative w-full mx-auto mt-28'>
      <div className='mx-auto w-11/12 3xl:w-[1360px] rounded-[20px] bg-pet-blue-1000 flex flex-col 2xl:flex-row py-14 space-y-10 2xl:space-y-0'>
        <div className='w-1/4 mx-auto'>
          <div className='2xl:ml-52 relative z-40 size-[300px] 2xl:left-0 2xl:scale-100 scale-[0.8] lg:scale-90 lg:left-36 sm:left-20 left-10'>
            <div className='absolute circle-2 z-20 top-[0px] left-[-180px]' />

            <div className='absolute top-[-50px] -left-[230px] perro-container-2 z-40 ml-3'>
              <img src='/perro-2.png' className='perro-2' />

              <svg>
                <clipPath id='mask-2'>
                  <path
                    d='M378.789 0.632889L1.17969 6.76625L82.0889 328.644C113.96 365.486 171.29 390.157 232.701 380.956C302.961 370.428 340.568 315.487 348.17 303.498L378.789 0.632889Z'
                    stroke='#FF0E0E'
                  />
                </clipPath>
              </svg>
            </div>
          </div>
        </div>

        <div className='2xl:block flex justify-center items-center flex-col w-full 2xl:w-3/4 2xl:ml-20'>
          <h2 className='text-4xl md:text-5xl font-semibold text-left text-[#ffe530]'>
            Make Fetch! Happen
          </h2>

          <p className='text-xl md:text-[32px] text-left text-pet-white-1000 px-10 2xl:pr-20 2xl:pl-0 mt-8 leading-8 lg:leading-10'>
            If you love pets and want exciting work, apply to be a Fetch! Pet
            Care Provider! We train every team member and provide ongoing
            support to help you get the most from your
          </p>

          <button
            style={{ boxShadow: '0px 3px 3px 0 rgba(44,29,173,0.16)' }}
            className='text-pet-orange-900 rounded-full text-lg md:text-xl font-bold bg-pet-white-1000 px-9 py-6 mt-12'
            type='button'
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};
