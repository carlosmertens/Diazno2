import { SideHeading } from '../util/SideHeading';

export const Store = () => {
  return (
    <>
      <section
        id='store-section'
        className='min-h-screen grid grid-cols-12 gap-0 bg-dusty-gray'>
        <div className='col-span-1'>
          <SideHeading
            title='Store'
            textColor='mine-shaft'
            barsColor='green-800'
          />
        </div>
        <div className='col-span-11'></div>
      </section>
    </>
  );
};
