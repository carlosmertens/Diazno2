import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='sticky top-0 bg-transparent md:flex md:items-center md:justify-between'>
      <div className='flex items-center justify-between pl-8 py-6'>
        <div>
          <Link href='/'>
            <a className='text-5xl text-mine-shaft hover:text-scorpion focus:text-scorpion focus:outline-none'>
              D!azno
            </a>
          </Link>
        </div>

        <div className='md:hidden pr-8'>
          <button
            className='text-mine-shaft hover:text-scorpion focus:text-scorpion focus:outline-none'
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
          <a className='block mt-4 px-3 py-1 text-mine-shaft uppercase rounded hover:bg-dusty-gray hover:text-scorpion focus:bg-dusty-gray focus:text-scorpion focus:outline-none'>
            Music & Videos
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-mine-shaft uppercase rounded hover:bg-dusty-gray hover:text-scorpion focus:bg-dusty-gray focus:text-scorpion focus:outline-none'>
            Tours
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-mine-shaft uppercase rounded hover:bg-dusty-gray hover:text-scorpion focus:bg-dusty-gray focus:text-scorpion focus:outline-none'>
            Photos
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-mine-shaft uppercase rounded hover:bg-dusty-gray hover:text-scorpion focus:bg-dusty-gray focus:text-scorpion focus:outline-none'>
            Store
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 py-1 text-mine-shaft uppercase rounded hover:bg-dusty-gray hover:text-scorpion focus:bg-dusty-gray focus:text-scorpion focus:outline-none'>
            Bio
          </a>
        </Link>
        <Link href='/'>
          <a className='block mt-4 px-3 pr-5 py-1 text-mine-shaft uppercase rounded hover:bg-dusty-gray hover:text-scorpion focus:bg-dusty-gray focus:text-scorpion focus:outline-none'>
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};
