import { SideHeading } from '../util/SideHeading';

export const Photos = () => {
  return (
    <>
      <section
        id='photos-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-green-500'>
        <div className=''>
          <SideHeading title='Photos' textColor='white' barsColor='yellow-300' />
        </div>
        <div className='bg-red-500'></div>
      </section>
    </>
  );
};
