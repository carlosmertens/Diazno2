import { SideHeading } from '../util/SideHeading';

export const Tours = () => {
  return (
    <>
      <section
        id='tours-section'
        className='min-h-screen grid grid-cols-12 gap-0 bg-gray-200'>
        <div className='col-span-1'>
          <SideHeading
            title='Tours'
            textColor='mine-shaft'
            barsColor='purple-800'
          />
        </div>
        <div className='col-span-11'></div>
      </section>
    </>
  );
};
