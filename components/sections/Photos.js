import { SectionHeading } from '../util/SectionHeading';

export const Photos = () => {
  return (
    <section id='photos-section' className='bg-black'>
      <SectionHeading
        title='Photos'
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
              d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
        }
      />

      <div className='mx-auto px-6 max-w-7xl sm:px-6 lg:px-8'>
        <div className='space-y-12'>
          <ul className='space-y-6 sm:grid sm:grid-cols-2 md:grid-cols-1 md:gap-y-4 lg:grid-cols-3  lg:space-y-0 lg:gap-x-4 lg:gap-y-4'>
            <li>
              <div className='aspect-w-4 aspect-h-3'>
                <img
                  className='object-cover shadow-lg rounded-lg'
                  src='/img/pic2.jpg'
                  alt='Photo2'
                />
              </div>
            </li>
            <li>
              <div className='aspect-w-4 aspect-h-3'>
                <img
                  className='object-cover shadow-lg rounded-lg'
                  src='/img/pic3.jpg'
                  alt='Photo3'
                />
              </div>
            </li>
            <li>
              <div className='aspect-w-4 aspect-h-3'>
                <img
                  className='object-cover shadow-lg rounded-lg'
                  src='/img/pic4.jpg'
                  alt='Photo4'
                />
              </div>
            </li>
            <li>
              <div className='aspect-w-4 aspect-h-3'>
                <img
                  className='object-cover shadow-lg rounded-lg'
                  src='/img/pic5.jpg'
                  alt='Photo5'
                />
              </div>
            </li>
            <li>
              <div className='aspect-w-4 aspect-h-3'>
                <img
                  className='object-cover shadow-lg rounded-lg'
                  src='/img/pic6.jpg'
                  alt='Photo6'
                />
              </div>
            </li>
            <li>
              <div className='aspect-w-4 aspect-h-3'>
                <img
                  className='object-cover shadow-lg rounded-lg'
                  src='/img/pic1.jpg'
                  alt='Photo1'
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
