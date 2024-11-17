import { ArrowButtonSVG } from '@/shared/components/custom/arrow-button';
import { TestimonialCard } from '@/shared/components/custom/testimonial-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/components/ui/carousel';
import { useState } from 'react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <>
      <section className='z-50 sm:px-6 lg:px-[140px] relative w-full mx-auto mt-40 lg:mt-80 scale-[0.6] xl:scale-[0.8] 3xl:scale-100'>
        <div className='text-5xl font-bold text-center text-pet-orange-800'>
          <p>Here's what pet owners have to</p>
          <p className='mt-4'>say about Fetch! Pet Care...</p>
        </div>

        <div className='hidden lg:block'>
          <div className='relative container-2 mx-auto mt-20 max-w-[1200px] h-[500px]'>
            <button
              className='absolute left-[-200px] lg:left-[-250px] top-[180px]'
              onClick={handlePrev}
            >
              <ArrowButtonSVG position='left' />
            </button>

            <button
              className='absolute right-[-300px] 3xl:right-[-290px] top-[180px]'
              onClick={handleNext}
            >
              <ArrowButtonSVG position='right' />
            </button>

            <input
              type='radio'
              name='slider'
              id='item-1'
              checked={currentIndex === 0}
              readOnly
            />

            <input
              type='radio'
              name='slider'
              id='item-2'
              checked={currentIndex === 1}
              readOnly
            />

            <input
              type='radio'
              name='slider'
              id='item-3'
              checked={currentIndex === 2}
              readOnly
            />

            <div className='cards'>
              <label className='card' htmlFor='item-1' id='card-1'>
                <TestimonialCard
                  image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  name='Kenned Dsouza'
                  testimonial='I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing'
                  className='bg-pet-blue-1000'
                />
              </label>

              <label className='card' htmlFor='item-2' id='card-2'>
                <TestimonialCard
                  image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  name='Kenned Dsouza'
                  testimonial='I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing'
                />
              </label>

              <label className='card' htmlFor='item-3' id='card-3'>
                <TestimonialCard
                  image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  name='Kenned Dsouza'
                  testimonial='I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing'
                />
              </label>
            </div>
          </div>
        </div>
      </section>

      <Carousel
        className=' z-50 lg:hidden w-full mt-4 px-10'
        opts={{ loop: true }}
      >
        <CarouselContent className='-ml-1'>
          <CarouselItem className='pl-1'>
            <TestimonialCard
              image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              name='Kenned Dsouza'
              testimonial='I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing'
              className='py-5 bg-pet-blue-1000 w-auto h-auto'
            />
          </CarouselItem>
          <CarouselItem className='pl-1'>
            <TestimonialCard
              image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              name='Kenned Dsouza'
              testimonial='I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing'
              className='py-5 bg-pet-blue-1000 w-auto h-auto'
            />
          </CarouselItem>
          <CarouselItem className='pl-1'>
            <TestimonialCard
              image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              name='Kenned Dsouza'
              testimonial='I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing'
              className='py-5 bg-pet-orange-900 w-auto h-auto'
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};
