import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav className='relative flex w-full flex-col items-center py-10'>
      <div className='flex w-[86.67%] items-center justify-between'>
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
          className='-mr-1 flex h-[1.875rem] w-[1.875rem] items-center justify-center'
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
      </div>
      <div
        className={`${
          !isActive && 'pointer-events-none opacity-0'
        } absolute top-[100%] right-6 flex w-[67.2%] flex-col items-center bg-bg-black py-8 transition-opacity duration-300 ease-in`}
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
