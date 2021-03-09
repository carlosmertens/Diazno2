export const SideHeading = (props) => {
  return (
    <div className='h-full flex flex-row p-4 items-center '>
      {/* <div className={`w-2 h-40 bg-${props.barsColor} md:h-48`}></div> */}

      <svg
        className={`h-10 w-10 mr-2 text-${props.textColor}`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
        />
      </svg>

      <h2
        className={`text-xl text-${props.textColor} cursor-default`}
        // className='md:transform md:rotate-180 '
        // style={{ writingMode: 'vertical-rl' }}
      >
        {props.title}
      </h2>

      {/* <div className={`w-2 h-40 bg-${props.barsColor} md:h-48`}></div> */}
    </div>
  );
};
