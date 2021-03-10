import { SideHeading } from '../util/SideHeading';

export const Photos = () => {
  return (
    <section id='photos-section' className='min-h-screen gap-0 bg-emperor'>
      <div className=''>
        <SideHeading
          title='Photos'
          textColor='yellow-400'
          svgIcon={
            <svg
              className='h-10 w-10 mr-2 text-yellow-400'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          }
          // barsColor='yellow-300'
        />
      </div>
      <div className='grid grid-row-6 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 p-4'>
        <div className='bg-pink-50'>1</div>
        <div className='bg-pink-200'>2</div>
        <div className='bg-pink-300'>3</div>
        <div className='bg-pink-400'>4</div>
        <div className='bg-pink-500'>5</div>
        <div className='bg-pink-600'>6</div>
      </div>
    </section>
  );
};
