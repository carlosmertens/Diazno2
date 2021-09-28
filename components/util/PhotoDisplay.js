export const PhotoDisplay = (props) => {
  return (
    <div className='aspect-w-4 aspect-h-3'>
      <img
        className='object-cover shadow-lg rounded-lg'
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
};
