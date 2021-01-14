export const Music = () => {
  return (
    <>
      <section
        id='music-section'
        className='min-h-screen grid grid-cols-12 gap-0'>
        <div className='col-span-1'>
          <div className='h-full flex flex-col items-center justify-center'>
            <div className='w-2 h-40 bg-purple-800 md:h-48'></div>

            <h2
              className='transform rotate-180 text-mine-shaft text-2xl py-8 cursor-default md:text-3xl'
              style={{ writingMode: 'vertical-rl' }}>
              Music + Videos
            </h2>

            <div className='w-2 h-40 bg-purple-800 md:h-48'></div>
          </div>
        </div>

        <div class='col-span-11 w-full flex items-center justify-center'>
          <iframe
            className=''
            src='https://www.youtube-nocookie.com/embed/FMrtSHAAPhM'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        </div>
      </section>
    </>
  );
};

{
  /* <section id='music-section' className='flex'>
  <div
    className='bg-blue-300 flex transform rotate-180'
    style={{ writingMode: 'vertical-rl' }}>
    <div className='bg-purple-600 flex w-24 h-1 transform rotate-90'></div>
    <div>Music & Videos</div>
  </div>
  <div class='bg-emperor w-full flex items-center justify-center'>
    <iframe
      className=''
      src='https://www.youtube-nocookie.com/embed/FMrtSHAAPhM'
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen></iframe>
  </div>
</section> */
}
