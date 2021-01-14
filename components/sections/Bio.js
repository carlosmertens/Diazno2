export const Bio = () => {
  return (
    <>
      <section
        id='bio-section'
        className='min-h-screen grid grid-cols-12 gap-0 bg-dusty-gray '>
        <div className='col-1'>
          <div className='h-full flex flex-col items-center justify-center'>
            <div className='w-2 h-40 bg-blue-800'></div>

            <h2
              className='transform rotate-180 text-mine-shaft text-2xl py-8'
              style={{ writingMode: 'vertical-rl' }}>
              Bio
            </h2>

            <div className='w-2 h-40 bg-blue-800 '></div>
          </div>
        </div>
        <div className='bg-scorpion col-span-11'></div>
      </section>
    </>
  );
};
