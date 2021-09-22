export const SectionHeading = (props) => {
  return (
    <div className='flex flex-row pt-8 pb-8 justify-center items-center'>
      {props.svgIcon}
      <h2
        className={`text-2xl text-${props.textColor} font-bold cursor-default`}>
        {props.title}
      </h2>
    </div>
  );
};
