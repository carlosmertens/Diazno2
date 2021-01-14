export const Store = () => {
  return (
    <>
      <section
        id='store-section'
        className='min-h-screen grid grid-cols-12 gap-0 bg-scorpion '>
        <div className='col-1'>
          <div className='h-full flex flex-col items-center justify-center'>
            <div className='w-2 h-40 bg-indigo-400'></div>

            <h2
              className='transform rotate-180 text-gray-100 text-2xl py-8'
              style={{ writingMode: 'vertical-rl' }}>
              Store
            </h2>

            <div className='w-2 h-40 bg-indigo-400 '></div>
          </div>
        </div>
        <div className='bg-dusty-gray col-span-11'></div>
      </section>
    </>
  );
};
