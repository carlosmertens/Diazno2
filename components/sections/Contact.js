export const Contact = () => {
  return (
    <>
      <section
        id='contact-section'
        className='min-h-screen grid grid-cols-12 gap-0 bg-gray-200'>
        <div className='col-span-1'>
          <div className='h-full flex flex-col items-center justify-center'>
            <div className='w-2 h-40 bg-purple-800 md:h-48'></div>

            <h2
              className='transform rotate-180 text-mine-shaft text-2xl py-8 cursor-default md:text-3xl'
              style={{ writingMode: 'vertical-rl' }}>
              Contacto
            </h2>

            <div className='w-2 h-40 bg-purple-800 md:h-48'></div>
          </div>
        </div>
        <div className='col-span-11'></div>
      </section>
    </>
  );
};
