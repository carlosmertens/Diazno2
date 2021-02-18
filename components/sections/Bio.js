import { SideHeading } from '../util/SideHeading';

export const Bio = () => {
  return (
    <>
      <section
        id='bio-section'
        className='min-h-screen grid grid-cols-section gap-0'>
        <div className=''>
          <SideHeading title='Bio' textColor='white' barsColor='blue-300' />
        </div>
        <div className='bg-white'></div>
      </section>
    </>
  );
};
