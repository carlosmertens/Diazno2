import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='fixed inset-x-0 top-0 md:flex md:items-center md:justify-between bg-gradient-to-b from-red-50'>
      <div className='flex items-center justify-between md:pl-8 md:py-6 py-4'>
        <div className='p-4'>
          <Link href='/'>
            <a className='text-5xl md:text-7xl font-medium text-mine-shaft md:font-normal md:tracking-widest	hover:text-mine-shaft'>
              D!AZNO
            </a>
          </Link>
        </div>

        <div className='md:hidden pr-8'>
          <button
            className='text-mine-shaft hover:text-mine-shaft focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            type='button'
            onClick={() => {
              setIsOpen(!isOpen);
            }}>
            <svg
              className='h-11 w-11 fill-current'
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
        <a
          href='#music-section'
          className='block mt-4 px-3 py-1 text-mine-shaft uppercase md:font-bold md:tracking-widest rounded hover:text-mine-shaft'
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          Music & Videos
        </a>
        <a
          href='#tours-section'
          className='block mt-4 px-3 py-1 text-mine-shaft uppercase md:font-bold md:tracking-widest rounded hover:text-mine-shaft'
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          Tour
        </a>
        <a
          href='#photos-section'
          className='block mt-4 px-3 py-1 text-mine-shaft uppercase md:font-bold md:tracking-widest rounded hover:text-mine-shaft'
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          Photos
        </a>
        <a
          href='#store-section'
          className='block mt-4 px-3 py-1 text-mine-shaft uppercase md:font-bold md:tracking-widest rounded hover:text-mine-shaft'
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          Store
        </a>
        <a
          href='#bio-section'
          className='block mt-4 px-3 py-1 text-mine-shaft uppercase md:font-bold md:tracking-widest rounded hover:text-mine-shaft'
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          Bio
        </a>
        <a
          href='#contact-section'
          className='block mt-4 px-3 pr-5 py-1 text-mine-shaft uppercase md:font-bold md:tracking-widest rounded hover:text-mine-shaft'
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          Contact
        </a>
      </div>
    </nav>
  );
};
