import { Menu } from 'lucide-react';
import { cn } from '@/shared/lib';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { useState } from 'react';

import logoSvg from '/svg/logo.svg';
import { Link } from 'react-router-dom';

const navItems = [
  { href: '/location', label: 'Location' },
  { href: '/blog', label: 'Blog' },
  { href: '/services', label: 'Services' },
  { href: '/about-us', label: 'About Us' },
  { href: '/franchise-with-us', label: 'Franchise with Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-transparent z-40'>
      <div className='flex h-32 items-center px-[70px] xl:pl-[140px] xl:pr-[132px] mx-auto bg-transparent'>
        <div className='flex-1'>
          <Link to='/'>
            <img src={logoSvg} alt='Logo' className='size-auto' />
          </Link>
        </div>

        <div className='flex items-center space-x-4 -mt-3'>
          <div className='hidden lg:flex space-x-[34px]'>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                size={40}
                className='text-pet-white-900 cursor-pointer lg:hidden'
              />
            </SheetTrigger>

            <SheetContent side='right'>
              <nav className='flex flex-col space-y-4 mt-4'>
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className='text-pet-grey-1000'
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({
  href,
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      to={href || '/'}
      className={cn('text-2xl font-opensans font-normal text-white', className)}
      {...props}
    >
      {children}
    </Link>
  );
};
