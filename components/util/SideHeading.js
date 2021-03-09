export const SideHeading = (props) => {
  return (
    <div className='h-full flex flex-row p-4 items-center'>
      {/* <div className={`w-2 h-40 bg-${props.barsColor} md:h-48`}></div> */}
      <svg
        className='h-10 w-10 mr-2 text-blue-300'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path d='M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z' />
      </svg>
      <svg
        className='h-10 w-10 mr-2 text-blue-300'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
        />
      </svg>
      <h2
        className={`md:transform md:rotate-180 text-blue-300 text-xl cursor-default md:text-3xl`}
        // style={{ writingMode: 'vertical-rl' }}
      >
        {props.title}
      </h2>

      {/* <div className={`w-2 h-40 bg-${props.barsColor} md:h-48`}></div> */}
    </div>
  );
};
