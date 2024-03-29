import { SectionHeading } from '../util/SectionHeading';

export const Store = () => {
  return (
    <section id='store-section' className='min-h-screen'>
      {/* ===== SECTION TITLE ===== */}
      <SectionHeading
        title='Store'
        textColor='mine-shaft'
        svgIcon={
          <svg
            className='h-10 w-10 mr-2 mine-shaft'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
            />
          </svg>
        }
      />
      {/* PRODUCTS GRID */}
      <div className='grid grid-row-6 gap-4 pt-10 pb-10 justify-items-center	 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 p-4'>
        <div className='h-48 w-3/4 rounded bg-green-50'>1</div>
        <div className='h-48 w-3/4 rounded bg-green-200'>2</div>
        <div className='h-48 w-3/4 rounded bg-green-300'>3</div>
        <div className='h-48 w-3/4 rounded bg-green-400'>4</div>
        <div className='h-48 w-3/4 rounded bg-green-500'>5</div>
        <div className='h-48 w-3/4 rounded bg-green-600'>6</div>
      </div>
    </section>
  );
};
