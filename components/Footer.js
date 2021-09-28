import React from 'react';
import SocialMedia from './util/SocialMedia';

export const Footer = () => {
  return (
    <>
      <footer className='py-2 bg-gradient-to-t from-gray-50 fixed inset-x-0 bottom-0 flex flex-col leading-3 justify-center items-center'>
        {/* ===== SOCIAL MEDIA LINKS */}
        <SocialMedia />
        <br />
        {/* ===== RIGHTS RESERVED */}
        <p className='text-emperor cursor-default'>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </>
  );
};
