import { SideHeading } from '../util/SideHeading';
import { BioText } from '../util//BioText';

export const Bio = () => {
  return (
    <>
      <section
        id='bio-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-emperor'>
        <div className=''>
          <SideHeading title='Bio' textColor='white' barsColor='blue-300' />
        </div>
        <div className=''>
          <BioText />
          <div className='flex items-center justify-center'>
            <h3 className='text-2xl uppercase'>Stay up to date!</h3>
          </div>
        </div>
      </section>
    </>
  );
};
