import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const slides = [
  {
    heading: 'Brand naming & guidelines',
    title: 'Lean Product Roadmap',
    year: 2019,
    images: {
      mobile: '/assets/mobile/image-slide-1.jpg',
      tablet: '/assets/tablet/image-slide-1.jpg',
      desktop: '/assets/desktop/image-slide-1.jpg',
    },
  },
  {
    heading: 'Brand identity & merchandise',
    title: 'New Majestic Hotel',
    year: 2018,
    images: {
      mobile: '/assets/mobile/image-slide-2.jpg',
      tablet: '/assets/tablet/image-slide-2.jpg',
      desktop: '/assets/desktop/image-slide-2.jpg',
    },
  },
  {
    heading: 'Brand identity & web design',
    title: 'Crypto Dashboard',
    year: 2016,
    images: {
      mobile: '/assets/mobile/image-slide-3.jpg',
      tablet: '/assets/tablet/image-slide-3.jpg',
      desktop: '/assets/desktop/image-slide-3.jpg',
    },
  },
];

const Slider = ({ width }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const imageRef = useRef(null);
  const headingRef = useRef(null);

  const handlePrev = () => {
    slideIndex === 0
      ? setSlideIndex(slides.length - 1)
      : setSlideIndex((prevState) => prevState - 1);

    setSlideDirection('left');
  };

  const handleNext = () => {
    slideIndex === slides.length - 1
      ? setSlideIndex(0)
      : setSlideIndex((prevState) => prevState + 1);

    setSlideDirection('right');
  };

  useEffect(() => {
    if (slideDirection === 'left') {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'easeIn' }
      );
    } else if (slideDirection === 'right') {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'easeIn' }
      );
    } else {
      null;
    }

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'easeIn' }
    );
  }, [slideIndex]);

  return (
    <section className='flex w-full flex-col md:relative md:flex-row-reverse'>
      <div className='relative w-full overflow-hidden bg-red md:-ml-[3.75rem] md:w-[57.03%] xl:-ml-[11.875rem] xl:w-[62.15%]'>
        <div
          ref={imageRef}
          className='relative h-[107.73vw] w-full md:h-[29.5rem] xl:h-[45.5rem]'
        >
          <Image
            layout='fill'
            objectFit='cover'
            src={
              width >= 768 && width < 1280
                ? slides[slideIndex].images.tablet
                : width >= 1280
                ? slides[slideIndex].images.desktop
                : slides[slideIndex].images.mobile
            }
            alt='logo'
          />
        </div>
        <div className='absolute bottom-0 flex w-full flex-col items-end bg-gradient-to-b from-black/[0.0001] to-black/100 py-9 pr-8 md:py-[2.813rem] md:pr-10 xl:py-[4.25rem] xl:pr-[9.625rem]'>
          <div className='flex flex-col text-right'>
            <h3 className='font-h3 xl:font-h3 text-[0.938rem] leading-[1.25rem] text-white'>
              {slides[slideIndex].title}
            </h3>
            <p className='font-body xl:font-body text-[0.938rem] leading-[1.25rem] text-white'>
              {slides[slideIndex].year} Project
            </p>
          </div>
        </div>
      </div>
      <div className='slider xl: z-10 flex w-full flex-col items-center bg-bg-black py-16 md:relative md:h-[22rem] md:w-[50.78%] md:items-start md:py-[6.25rem] md:pl-10 xl:h-[33rem] xl:w-[51.04%] xl:py-[9.5rem] xl:pl-[10.313rem]'>
        <div className='flex w-[87.2%] flex-col gap-6 md:gap-8 xl:gap-[3.188rem]'>
          <h2
            ref={headingRef}
            className='font-h2 xl:font-h2 w-full text-[2rem] leading-[2.5rem] text-white'
          >
            {slides[slideIndex].heading}
          </h2>
          <div className='flex w-24 items-center justify-between'>
            <button
              className='group'
              type='button'
              onClick={handlePrev}
              aria-label='previous'
            >
              <svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'>
                <g
                  className='group-hover:stroke-[#FF9393] group-active:stroke-[#FF9393]'
                  transform='matrix(-1 0 0 1 40 0)'
                  stroke='#F94F4F'
                  fill='none'
                  fillRule='evenodd'
                >
                  <circle cx='20' cy='20' r='19.5' />
                  <path strokeWidth='2' d='M17.5 15l5 5-5 5' />
                </g>
              </svg>
            </button>
            <button
              className='group'
              type='button'
              onClick={handleNext}
              aria-label='next'
            >
              <svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'>
                <g
                  className='group-hover:stroke-[#FF9393] group-active:stroke-[#FF9393]'
                  stroke='#F94F4F'
                  fill='none'
                  fillRule='evenodd'
                >
                  <circle cx='20' cy='20' r='19.5' />
                  <path strokeWidth='2' d='M17.5 15l5 5-5 5' />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
