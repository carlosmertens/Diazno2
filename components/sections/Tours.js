import { SideHeading } from '../util/SideHeading';

export const Tours = () => {
  return (
    <section id='tours-section' className='min-h-screen  gap-0 bg-dusty-gray'>
      <div className=''>
        <SideHeading
          title='Tour'
          textColor='indigo-700'
          svgIcon={
            <svg
              className='h-10 w-10 mr-2 text-indigo-700'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          }
          // barsColor='pink-300'
        />
      </div>
      <div className=''></div>
    </section>
  );
};
