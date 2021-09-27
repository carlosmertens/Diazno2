export const SectionHeading = (props) => {
  return (
    <div className='flex flex-row pt-10 pb-10 justify-center items-center'>
      {props.svgIcon}
      <h2
        className={`text-2xl text-${props.textColor} font-bold cursor-default md:text-3xl`}>
        {props.title}
      </h2>
    </div>
  );
};
