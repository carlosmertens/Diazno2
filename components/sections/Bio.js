import { useState } from 'react';
import { SectionHeading } from '../util/SectionHeading';
import { BioText } from '../util//BioText';

export const Bio = () => {
  const [subscriber, setSubscriber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // REMOVE CONSOLE.LOG
    // console.log(subscriber, 'has subscribed!!!');
    setSubscriber('');
  };
  return (
    <section id='bio-section'>
      {/* ===== SECTION TITLE ===== */}
      <SectionHeading
        title='Bio'
        textColor='white'
        svgIcon={
          <svg
            className='h-10 w-10 mr-2 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
            />
          </svg>
        }
      />
      {/* ===== BIO CONTENT ===== */}
      <div className='mx-6 md:mx-6 xl:mx-28'>
        {/* BIO IMAGE */}
        <img
          className='float-left h-60 rounded-lg mt-1 mr-5 md:h-80 xl:h-96'
          src='/imageBio.jpg'
          alt='Bio photo'
        />
        {/* BIO TEXT */}
        <BioText />
        {/* FORM SUBSCRIBE */}
        <div className='flex flex-col mt-10 md:flex-row items-center justify-center pb-6'>
          <h3 className='text-white text-xl font-bold pb-4 md:text-4xl uppercase'>
            Stay up to date!
          </h3>
          <form onSubmit={handleSubmit}>
            <label className='hidden'>Email address</label>
            <input
              type='email'
              placeholder='Email address'
              value={subscriber}
              onChange={(e) => setSubscriber(e.target.value)}
              className='w-48 px-1 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-mine-shaft md:ml-6'
              required
            />
            <button className='bg-mine-shaft text-white px-4 py-2 rounded-r outline-none hover:bg-dusty-gray hover:ring-2 hover:ring-mine-shaft focus:outline-none focus:ring-2 focus:ring-mine-shaft focus:ring-opacity-50'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
