import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav className='relative flex w-full flex-col items-center py-10 md:py-0'>
      <div className='flex w-[86.67%] items-center justify-between md:w-full md:pl-10'>
        <Link href='/'>
          <a className='h-[1.875rem]'>
            <Image
              width={161}
              height={30}
              src='/assets/desktop/logo.svg'
              alt='logo'
            />
          </a>
        </Link>
        <button
          className='-mr-1 flex h-[1.875rem] w-[1.875rem] items-center justify-center md:hidden'
          type='button'
          aria-label='menu button'
          onClick={toggleActive}
        >
          <div>
            <Image
              width={isActive ? 20 : 24}
              height={isActive ? 20 : 18}
              src={
                isActive
                  ? '/assets/mobile/icon-cross.svg'
                  : '/assets/mobile/icon-hamburger.svg'
              }
              alt=''
            />
          </div>
        </button>
        <div className='hidden w-[60.16%] flex-col items-center bg-red py-14 md:flex'>
          <div className='flex w-[83.33%] items-center justify-between'>
            <ul className='font-body flex w-[52.05%] items-center justify-between gap-[1.25rem] text-[0.938rem] leading-[2rem] text-white lg:text-xl'>
              <li>
                <Link href=''>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <a>Service</a>
                </Link>
              </li>
              <li>
                <Link href=''>
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
            <Link href='/'>
              <a className='btn-2 py-6 px-[1.25rem] text-base leading-[1.25rem]'>
                Schedule a Call
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          !isActive && 'pointer-events-none opacity-0'
        } absolute top-[100%] right-6 flex w-[67.2%] flex-col items-center bg-bg-black py-8 transition-opacity duration-300 ease-in md:hidden`}
      >
        <div className='flex w-[78.96%] flex-col items-center gap-6'>
          <ul className='font-body flex w-full flex-col items-center gap-6 text-center text-white'>
            <li className='w-full active:text-red'>
              <Link href='/'>
                <a>About</a>
              </Link>
            </li>
            <li className='w-full active:text-red'>
              <Link href='/'>
                <a>Services</a>
              </Link>
            </li>
            <li className='w-full active:text-red'>
              <Link href='/'>
                <a>Projects</a>
              </Link>
            </li>
          </ul>
          <Link href='/'>
            <a className='btn-1 w-full py-6'>Schedule a Call</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
