import { ArrowButton } from '@/shared/components/custom/arrow-button';
import { Input } from '@/shared/components/custom/input';

const navigation = {
  about: [
    { name: 'Locations', href: '#' },
    { name: 'Franchise With Us', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Make Fetch Happen!', href: '#' },
  ],
  resources: [
    { name: 'Reviews', href: '#' },
    { name: 'Pet Resource Center', href: '#' },
    { name: 'Media Fact Sheet', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'News', href: '#' },
  ],
  resources2: [
    { name: 'Gift Cards', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Franchisee Login', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
};
export const Footer = () => {
  return (
    <footer className='mt-52'>
      <div className='px-[70px] xl:pl-[140px] xl:pr-[132px] mx-auto pb-16'>
        <div className='xl:grid'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-2xl font-bold text-left text-pet-yellow-800'>
                  About
                </h3>

                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-2xl text-left text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-10 md:mt-0'>
                <h3 className='text-2xl font-bold text-left text-pet-yellow-800'>
                  Resources
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-2xl text-left text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <ul role='list' className='mt-16 space-y-4'>
                  {navigation.resources2.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-2xl text-left text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-10 md:mt-0'>
                <h3 className='text-2xl font-bold text-left text-pet-yellow-800 mb-8'>
                  NewsLetter
                </h3>

                <div className='flex flex-col text-2xl text-pet-white-1000 font-opensans font-normal mb-8'>
                  <p>Sign up to receive the Fetch!</p>
                  <p>Family Newsletter</p>
                </div>

                <Input
                  type='text'
                  placeholder='Email Adress'
                  containerClassName='max-w-[398px]'
                >
                  <ArrowButton className='-mr-8' />
                </Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
