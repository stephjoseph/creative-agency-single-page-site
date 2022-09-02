import Image from 'next/image';
import Link from 'next/link';

const Strategic = () => {
  return (
    <section className='flex w-full flex-col items-center'>
      <div className='flex w-full flex-col items-center'>
        <div className='relative h-[53.33vw] w-full'>
          <Image
            layout='fill'
            objectFit='cover'
            src='/assets/mobile/image-strategic.jpg'
            alt='logo'
          />
        </div>
        <div className='strategic relative flex w-full flex-col items-center bg-bg-black py-[4.5rem]'>
          <div className='flex w-[87.2%] flex-col gap-10'>
            <div className='flex w-[87.2%] flex-col gap-6'>
              <h2 className='font-h2 text-[2rem] leading-[2.5rem] text-white'>
                <span className='text-red'>Design</span> is strategic.
              </h2>
              <p className='font-body text-[0.938rem] leading-[1.563rem] text-white'>
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
