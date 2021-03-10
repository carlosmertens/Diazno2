export const SectionHeading = (props) => {
  return (
    <div className='h-full flex flex-row p-4 items-center '>
      {/* <div className={`w-2 h-40 bg-${props.barsColor} md:h-48`}></div> */}
      {props.svgIcon}
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
