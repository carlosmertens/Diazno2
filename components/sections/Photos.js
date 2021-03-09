import { SideHeading } from '../util/SideHeading';

export const Photos = () => {
  return (
    <section
      id='photos-section'
      className='min-h-screen grid grid-cols-section gap-0 bg-emperor'>
      <div className=''>
        <SideHeading title='Photos' textColor='white' barsColor='yellow-300' />
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
