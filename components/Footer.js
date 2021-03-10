import React from 'react';
import SocialMedia from './util/SocialMedia';

export const Footer = () => {
  return (
    <>
      <footer className='bg-gradient-to-t from-red-50 fixed inset-x-0 bottom-0 flex flex-col leading-3 justify-center items-center py-2'>
        <SocialMedia />
        <br />
        <p className='text-emperor cursor-default'>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </>
  );
};
