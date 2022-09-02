import { v4 as uuidv4 } from 'uuid';

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
    text: 'Keeping the brand design unique and meaningful helps in communicating the brand’s value effectively.',
  },
  {
    id: uuidv4(),
    num: '03',
    title: 'Web Design',
    text: 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.',
  },
];

const Approach = () => {
  return (
    <section className='flex w-full flex-col items-center bg-red py-24'>
      <div className='flex w-[87.2%] flex-col gap-12'>
        <h2 className='font-h2 text-[2rem] leading-[2.5rem] text-white'>
          Our approach for creating a winning brand
        </h2>
        <div className='flex flex-col gap-10'>
          {steps.map((step) => (
            <div
              className='relative flex w-full items-end justify-end pl-4 pt-[2.75rem]'
              key={step.id}
            >
              <div className='font-h1 absolute top-0 left-0 text-white/25'>
                {step.num}
              </div>
              <div className='flex w-[95.11%] flex-col gap-[0.938rem]'>
                <h3 className='font-h3 text-[0.938rem] leading-[1.563rem] text-white'>
                  {step.title}
                </h3>
                <p className='font-body text-[0.938rem] leading-[1.563rem] text-white'>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
