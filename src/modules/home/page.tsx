import { Hero } from './components/hero';
import { HowItWorks } from './components/how-it-works';
import { MakeFetchHappen } from './components/make-fetch-happen';
import { Services } from './components/services';
import { Testimonials } from './components/testimonials';

const Home = () => {
  return (
    <>
      <Hero />

      <Services />

      <Testimonials />

      <HowItWorks />

      <MakeFetchHappen />
    </>
  );
};

export default Home;
