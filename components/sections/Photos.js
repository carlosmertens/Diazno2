import { SideHeading } from '../util/SideHeading';

export const Photos = () => {
  return (
    <>
      <section
        id='photos-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-emperor'>
        <div className=''>
          <SideHeading title='Photos' textColor='white' barsColor='yellow-300' />
        </div>
        <div className=''></div>
      </section>
    </>
  );
};
