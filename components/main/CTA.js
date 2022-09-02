import Link from 'next/link';

const CTA = () => {
  return (
    <section className='flex w-full flex-col items-center bg-white py-[6.25rem]'>
      <div className='flex w-[87.2%] flex-col gap-12'>
        <h2 className='font-h2 w-full text-[2rem] leading-[2.5rem] text-black'>
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
