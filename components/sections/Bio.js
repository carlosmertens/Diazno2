import { SideHeading } from '../util/SideHeading';

export const Bio = () => {
  return (
    <>
      <section
        id='bio-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-emperor'>
        <div className=''>
          <SideHeading title='Bio' textColor='white' barsColor='blue-300' />
        </div>
        <div className=''></div>
      </section>
    </>
  );
};
