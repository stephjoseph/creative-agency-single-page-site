import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex w-full flex-col items-center pt-[68.27%] pb-24'>
      <div className='flex w-[87.2%] flex-col gap-10'>
        <div className='flex w-full flex-col gap-[0.938rem]'>
          <h1 className='font-h1 text-[2.5rem] leading-[2.5rem] text-black'>
            Branding & website design agency
          </h1>
          <p className='font-body text-[0.938rem] leading-[1.563rem] text-black'>
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
