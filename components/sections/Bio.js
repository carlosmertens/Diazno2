import { useState } from 'react';
import { SideHeading } from '../util/SideHeading';
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
    <section
      id='bio-section'
      className='min-h-screen grid grid-cols-section gap-0 bg-emperor'>
      <div className=''>
        <SideHeading title='Bio' textColor='white' barsColor='blue-300' />
      </div>
      <div className=''>
        <BioText />
        <div className='flex flex-col md:flex-row items-center justify-center'>
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
