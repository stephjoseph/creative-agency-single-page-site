import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex w-full flex-col items-center pt-[68.27%] pb-24 md:pt-[4.813rem] md:pb-[9.375rem] xl:pt-[7rem] xl:pb-[10rem]'>
      <div className='flex w-[87.2%] flex-col gap-10 md:w-[89.71%]  md:gap-8 xl:w-[77.08%] xl:gap-12'>
        <div className='flex w-full flex-col gap-[0.938rem] md:w-[57.76%] md:gap-8 xl:w-[64%] xl:gap-10'>
          <h1 className='font-h1 xl:font-h1 text-[2.5rem] leading-[2.5rem] text-black md:text-[3.5rem] md:leading-[3.5rem]'>
            Branding & website design agency
          </h1>
          <p className='font-body xl:font-body text-[0.938rem] leading-[1.563rem] text-black xl:w-[76.06%]'>
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
        </div>
        <Link href='/'>
          <a className='btn-1 w-[11.063rem] px-[2.5rem] py-[1.563rem]'>
            Learn More
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
