import { SideHeading } from '../util/SideHeading';

export const Photos = () => {
  return (
    <>
      <section
        id='photos-section'
        className='min-h-screen grid grid-cols-12 gap-0'>
        <div className='col-span-1'>
          <SideHeading title='Photos' textColor='white' barsColor='yellow-300' />
        </div>
        <div className='col-span-11'></div>
      </section>
    </>
  );
};
