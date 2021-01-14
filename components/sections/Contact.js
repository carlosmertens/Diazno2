import { SideHeading } from '../util/SideHeading';

export const Contact = () => {
  return (
    <>
      <section
        id='contact-section'
        className='min-h-screen grid grid-cols-12 gap-0 bg-gray-200'>
        <div className='col-span-1'>
          <SideHeading
            title='Contact'
            textColor='mine-shaft'
            barsColor='red-800'
          />
        </div>
        <div className='col-span-11'></div>
      </section>
    </>
  );
};
