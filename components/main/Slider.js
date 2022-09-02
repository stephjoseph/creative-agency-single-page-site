import { useEffect, useState } from 'react';
import Image from 'next/image';

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

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [width, setWidth] = useState(0);

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

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
    console.log(width);
    setWidth(window.innerWidth);
    window.onresize = updateSize;
  }, [width]);

  return (
    <section className='flex w-full flex-col'>
      <div className='relative w-full bg-red'>
        <div className='relative h-[107.73vw] w-full'>
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
        <div className='absolute bottom-0 flex w-full flex-col items-end bg-gradient-to-b from-black/[0.0001] to-black/100 py-9 pr-8'>
          <div className='flex flex-col text-right'>
            <h3 className='font-h3 text-[0.938rem] leading-[1.25rem] text-white'>
              {slides[slideIndex].title}
            </h3>
            <p className='font-body text-[0.938rem] leading-[1.25rem] text-white'>
              {slides[slideIndex].year} Project
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col items-center bg-bg-black py-16'>
        <div className='flex w-[87.2%] flex-col gap-6'>
          <h2 className='font-h2 w-full text-[2rem] leading-[2.5rem] text-white'>
            {slides[slideIndex].heading}
          </h2>
          <div className='flex w-24 items-center justify-between'>
            <button className='group' type='button' onClick={handlePrev}>
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
            <button className='group' type='button' onClick={handleNext}>
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
