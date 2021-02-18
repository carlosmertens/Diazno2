import { SideHeading } from '../util/SideHeading';

export const Store = () => {
  return (
    <>
      <section
        id='store-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-blue-400'>
        <div className=''>
          <SideHeading
            title='Store'
            textColor='mine-shaft'
            barsColor='green-800'
          />
        </div>
        <div className='bg-purple-700'></div>
      </section>
    </>
  );
};
