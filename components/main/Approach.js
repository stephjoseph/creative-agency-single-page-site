import { v4 as uuidv4 } from 'uuid';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const steps = [
  {
    id: uuidv4(),
    num: '01',
    title: 'Brand Strategy',
    text: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.',
  },
  {
    id: uuidv4(),
    num: '02',
    title: 'Brand Design',
    text: 'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.',
  },
  {
    id: uuidv4(),
    num: '03',
    title: 'Web Design',
    text: 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.',
  },
];

const Approach = () => {
  gsap.registerPlugin(ScrollTrigger);
  const stepsRef = useRef([]);
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

    gsap.fromTo(
      stepsRef.current,
      {
        x: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: stepsRef.current[0],
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'easeIn',
        stagger: {
          each: 0.3,
        },
      }
    );
  }, []);

  return (
    <section className='z-10 flex w-full flex-col items-center md:-mt-[7.5rem] md:flex-row md:items-start md:gap-[0.625rem] xl:-mt-[12.5rem] xl:gap-0'>
      <h2
        ref={headingRef}
        className='font-h2 xl:font-h2 z-10 ml-auto mt-[15.375rem] hidden w-[36.59%] text-[2rem] leading-[2.5rem] md:block xl:mt-[25rem] xl:-mr-[10rem] xl:w-[37.5%]'
      >
        Our approach for creating a winning brand
      </h2>
      <div className='flex flex-col items-center bg-red py-24 md:w-[57.03%] md:py-[7.5rem] xl:w-[62.15%] xl:items-start xl:py-[12.5rem] xl:pl-[17.813rem]'>
        <div className='flex w-[87.2%] flex-col gap-12 md:w-[81.05%] xl:w-[82.62%]'>
          <h2 className='font-h2 text-[2rem] leading-[2.5rem] text-white md:hidden'>
            Our approach for creating a winning brand
          </h2>
          <div className='flex w-full flex-col gap-10 xl:gap-14'>
            {steps.map((step, i) => (
              <div
                ref={(element) => {
                  stepsRef.current[i] = element;
                }}
                className='relative flex w-full items-end justify-end pl-4 pt-[2.75rem] xl:items-start xl:justify-start xl:pl-[3.688rem] xl:pt-[2.75rem]'
                key={step.id}
              >
                <div className='font-h1 absolute top-0 left-0 text-white/25'>
                  {step.num}
                </div>
                <div className='flex w-[95.11%] flex-col gap-[0.938rem] md:w-[95.49%] xl:w-full xl:gap-6'>
                  <h3 className='font-h3 xl:font-h3 text-[0.938rem] leading-[1.563rem] text-white'>
                    {step.title}
                  </h3>
                  <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-white'>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
