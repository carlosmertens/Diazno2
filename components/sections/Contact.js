import { SideHeading } from '../util/SideHeading';

export const Contact = () => {
  return (
    <>
      <section
        id='contact-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-dusty-gray'>
        <div className=''>
          <SideHeading
            title='Contact'
            textColor='mine-shaft'
            barsColor='red-800'
          />
        </div>
        <div className=''></div>
      </section>
    </>
  );
};
