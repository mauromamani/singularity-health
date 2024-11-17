import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='relative isolate min-h-svh'>
      <img
        src='/404.webp'
        alt='404 - page not found'
        className='absolute inset-0 -z-10 h-full w-full object-cover object-top'
      />

      <div className='mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8'>
        <p className='text-xl font-semibold leading-8 text-pet-orange-900'>
          404
        </p>

        <h1 className='mt-4 text-3xl font-bold tracking-tight text-pet-orange-900 sm:text-5xl'>
          Page not found
        </h1>

        <p className='mt-4 text-base text-pet-orange-900/70 sm:mt-6'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex justify-center'>
          <Link
            to='/'
            className='text-sm font-semibold leading-7 text-pet-orange-900'
          >
            <span aria-hidden='true'>&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
