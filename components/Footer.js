import React from 'react';
import SocialMedia from './SocialMedia';

export const Footer = () => {
  return (
    <>
      <footer className='fixed inset-x-0 bottom-0 flex flex-col leading-3 justify-center items-center'>
        <SocialMedia transparent />
        <br />
        <p className='text-white pb-2'>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </>
  );
};
