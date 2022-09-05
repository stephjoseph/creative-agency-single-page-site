import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CTA = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headingRef = useRef(null);

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
  }, []);
  return (
    <section className='cta flex w-full flex-col items-center bg-white  py-[6.25rem] md:pt-[4.375rem] md:pb-[6.25rem] xl:relative xl:pt-[7.5rem] xl:pb-[7.188rem]'>
      <div className='flex w-[87.2%] flex-col gap-12 md:w-[89.71%] md:flex-row md:items-center md:justify-between xl:w-[77.08%]'>
        <h2
          ref={headingRef}
          className='font-h2 xl:font-h2 w-full text-[2rem] leading-[2.5rem] text-black md:w-[57.76%] xl:w-[57.21%]'
        >
          Let&apos;s build something great together.
        </h2>
        <Link href='/'>
          <a className='btn-1 w-[12.438rem] py-6'>Schedule a Call</a>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
