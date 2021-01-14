export const SideHeading = (props) => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <div className={`w-2 h-40 bg-${props.barsColor} md:h-48`}></div>

      <h2
        className={`transform rotate-180 text-${props.textColor} text-2xl py-8 cursor-default md:text-3xl`}
        style={{ writingMode: 'vertical-rl' }}>
        {props.title}
      </h2>

      <div className={`w-2 h-40 bg-${props.barsColor} md:h-48`}></div>
    </div>
  );
};
