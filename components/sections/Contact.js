import { SideHeading } from '../util/SideHeading';

export const Contact = () => {
  return (
    <>
      <section
        id='contact-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-green-400'>
        <div className=''>
          <SideHeading
            title='Contact'
            textColor='mine-shaft'
            barsColor='red-800'
          />
        </div>
        <div className='bg-yellow-400'></div>
      </section>
    </>
  );
};
