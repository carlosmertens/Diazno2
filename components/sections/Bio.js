import { SideHeading } from '../util/SideHeading';

export const Bio = () => {
  return (
    <>
      <section id='bio-section' className='min-h-screen grid grid-cols-12 gap-0'>
        <div className='col-span-1'>
          <SideHeading title='Bio' textColor='white' barsColor='blue-300' />
        </div>
        <div className='col-span-11'></div>
      </section>
    </>
  );
};
