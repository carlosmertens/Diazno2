import { FaVimeo, FaSpotify, FaYoutube } from 'react-icons/fa';
import { SideHeading } from '../util/SideHeading';

export const Music = () => {
  return (
    <>
      <section
        id='music-section'
        className='min-h-screen grid grid-cols-section gap-0 bg-emperor'>
        <div className=''>
          <SideHeading
            title='Music + Videos'
            textColor='white'
            barsColor='blue-500'
          />
        </div>

        <div className='grid grid-rows-music'>
          <div className='flex flex-col xl:flex-row items-center justify-center gap-4 md:gap-10'>
            <iframe
              className='md:w-2/3 md:h-2/5 xl:h-3/5'
              src='https://www.youtube-nocookie.com/embed/FMrtSHAAPhM'
              width='330'
              height='220'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
            <iframe
              className='md:w-2/3 md:h-2/5 xl:h-3/5 xl:mr-4'
              src='https://www.youtube-nocookie.com/embed/FMrtSHAAPhM'
              width='330'
              height='220'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
          <div className='flex items-center justify-center'>
            <h2 className='text-xl md:text-2xl lg:text-4xl uppercase'>
              Listen on &nbsp;
            </h2>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://www.vimeo.com'
              className='px-2 focus:text-blue-400 focus:outline-none'>
              <FaVimeo className='hover:text-blue-300 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://open.spotify.com/artist/4UobcfdsvVwgXka22f9I7d?si=PXsGbhijT3qVRajiC6jVvw'
              className='px-2 focus:text-green-400 focus:outline-none'>
              <FaSpotify className='hover:text-green-400 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://www.youtube.com/channel/UCuAuh0pongpsiMQGxwLcTxQ'
              className='px-2 focus:text-red-500 focus:outline-none'>
              <FaYoutube className='hover:text-red-500 text-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
