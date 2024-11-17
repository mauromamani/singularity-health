import { WaveOrangeSVG } from '@/shared/assets/svg/wave-orange';
import Navbar from './navbar';
import { Footer } from './footer';
import { FooterOrangeSVG } from '@/shared/assets/svg/footer-orange';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main className='relative z-50 overflow-hidden overflow-y-none bg-pet-blue-900'>
      <Navbar />
      <WaveOrangeSVG />

      <Outlet />

      <Footer />
      <FooterOrangeSVG />
    </main>
  );
};
