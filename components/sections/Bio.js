import { useState } from 'react';
import { SectionHeading } from '../util/SectionHeading';
import { BioText } from '../util//BioText';

export const Bio = () => {
  const [subscriber, setSubscriber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // REMOVE CONSOLE.LOG
    console.log(subscriber, 'has subscribed!!!');
    setSubscriber('');
  };
  return (
    <section id='bio-section' className='min-h-screen  gap-0 bg-emperor'>
      <div className=''>
        <SectionHeading
          title='Bio'
          textColor='blue-300'
          svgIcon={
            <svg
              className='h-10 w-10 mr-2 text-blue-300'
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
          // barsColor='blue-300'
        />
      </div>
      <div className=''>
        <BioText />
        <div className='flex flex-col md:flex-row items-center justify-center pb-6'>
          <h3 className='text-mine-shaft text-xl font-bold md:text-4xl uppercase'>
            Stay up to date!
          </h3>
          <form onSubmit={handleSubmit}>
            <label className='hidden'>Email address</label>
            <input
              type='email'
              placeholder='Email address'
              value={subscriber}
              onChange={(e) => setSubscriber(e.target.value)}
              className='w-48 mb-4 md:ml-6 px-1 py-2 focus:outline-none focus:ring-2 focus:ring-mine-shaft'
              required
            />
            <button className='bg-mine-shaft text-white px-2 py-2 outline-none hover:bg-dusty-gray hover:ring-2 hover:ring-mine-shaft focus:outline-none focus:ring-2 focus:ring-mine-shaft focus:ring-opacity-50'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
