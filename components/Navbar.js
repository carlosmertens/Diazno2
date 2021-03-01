import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='fixed flex items-center justify-between'>
      <div className='flex items-center justify-between pl-8 py-6'>
        <div className='p-4'>
          <Link href='/'>
            <a className='text-7xl text-white font-normal tracking-widest	hover:text-mine-shaft'>
              D!AZNO
            </a>
          </Link>
        </div>

        <div className='md:hidden pr-8'>
          <button
            className='text-white hover:text-mine-shaft focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            type='button'
            onClick={() => {
              setIsOpen(!isOpen);
            }}>
            <svg
              className='h-10 w-10 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-2 pl-6 pt-2 pb-8 md:flex md:items-center md:justify-between`}>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-white uppercase font-bold tracking-widest rounded hover:text-mine-shaft'>
            Music & Videos
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-white uppercase font-bold tracking-widest rounded hover:text-mine-shaft'>
            Tour
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-white uppercase font-bold tracking-widest rounded hover:text-mine-shaft'>
            Photos
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-white uppercase font-bold tracking-widest rounded hover:text-mine-shaft'>
            Store
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-white uppercase font-bold tracking-widest rounded hover:text-mine-shaft'>
            Bio
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 pr-5 py-1 text-white uppercase font-bold tracking-widest rounded hover:text-mine-shaft'>
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};
