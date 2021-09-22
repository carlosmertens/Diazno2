import { SectionHeading } from '../util/SectionHeading';

export const Contact = () => {
  return (
    <section id='contact-section' className='min-h-screen bg-black'>
      <div className=''>
        <SectionHeading
          title='Contact us'
          textColor='white'
          svgIcon={
            <svg
              className='h-10 w-10 mr-2 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
              />
            </svg>
          }
          // barsColor='red-800'
        />
      </div>
      <div className=''></div>
    </section>
  );
};
