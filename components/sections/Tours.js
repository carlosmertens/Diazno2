import { SideHeading } from '../util/SideHeading';

export const Tours = () => {
  return (
    <>
      <section
        id='tours-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-gray-900'>
        <div className=''>
          <SideHeading title='Tours' textColor='white' barsColor='pink-300' />
        </div>
        <div className='bg-white'></div>
      </section>
    </>
  );
};
