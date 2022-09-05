import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Strategic = ({ width }) => {
  gsap.registerPlugin(ScrollTrigger);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'easeIn',
      }
    );

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        duration: 0.6,
        ease: 'easeIn',
      }
    );
  }, []);

  return (
    <section className='flex w-full flex-col items-center'>
      <div className='flex w-full flex-col items-center md:flex-row md:items-start'>
        <div className='relative h-[53.33vw] w-full md:h-[41.125rem] md:w-[49.21%] xl:h-[61.5rem] xl:w-[51.04%]'>
          <Image
            layout='fill'
            objectFit='cover'
            src={
              width >= 768 && width < 1280
                ? '/assets/tablet/image-strategic.jpg'
                : width >= 1280
                ? '/assets/desktop/image-strategic.jpg'
                : '/assets/mobile/image-strategic.jpg'
            }
            alt='logo'
          />
        </div>
        <div className='strategic relative flex w-full flex-col items-center bg-bg-black py-[4.5rem] md:w-[50.78%] md:items-start md:pb-[15rem] md:pl-[4.313rem] md:pt-[7.5rem] xl:w-[48.96%] xl:pl-[9.625rem] xl:pt-[12.5rem] xl:pb-[25rem]'>
          <div className='flex w-[87.2%] flex-col gap-10 md:w-[87.54%] md:gap-8 xl:w-[80.76%] xl:gap-12'>
            <div className='flex w-[87.2%] flex-col gap-6 md:gap-8 xl:w-full xl:gap-[2.688rem]'>
              <h2
                ref={headingRef}
                className='font-h2 xl:font-h2 text-[2rem] leading-[2.5rem] text-white'
              >
                <span className='text-red'>Design</span> is strategic.
              </h2>
              <p
                ref={textRef}
                className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-white'
              >
                “A well-crafted design strategy consistently produces desired
                outcomes and brand awareness. We are firm believers that success
                lies in creative collaboration with our clients.”
              </p>
            </div>
            <Link href='/'>
              <a className='btn-3'>Schedule a Call</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategic;
