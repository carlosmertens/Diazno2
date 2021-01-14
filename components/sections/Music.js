import { SideHeading } from '../util/SideHeading';

export const Music = () => {
  return (
    <>
      <section
        id='music-section'
        className='min-h-screen grid grid-cols-12 gap-0'>
        <div className='col-span-1'>
          <SideHeading
            title='Music + Videos'
            textColor='white'
            barsColor='pink-300'
          />
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
