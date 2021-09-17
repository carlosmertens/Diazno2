import { FaVimeo, FaSpotify, FaYoutube } from "react-icons/fa";
import { SectionHeading } from "../util/SectionHeading";

export const Music = () => {
  return (
    <section
      id='music-section'
      className='min-h-screen gap-0 bg-emperor'
      // className='md:grid md:grid-cols-section'
    >
      <SectionHeading
        title='Music + Videos'
        textColor='mine-shaft'
        svgIcon={
          <svg
            className='h-10 w-10 mr-2 mine-shaft'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
            />
          </svg>
        }
      />

      <div className='flex flex-col items-center justify-center mt-8 gap-6 md:gap-10 xl:flex-row'>
        <iframe
          className='md:w-2/3 md:h-2/3 xl:h-3/5 border-2 rounded-md border-dusty-gray'
          src='https://www.youtube.com/embed/wixAI79iV50'
          width='330'
          height='220'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
        <iframe
          className='md:w-2/3 md:h-2/3 xl:h-3/5 xl:mr-4 border-2 rounded-md border-dusty-gray'
          src='https://www.youtube.com/embed/I89EDHDJ2co'
          width='330'
          height='220'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
      <div className='flex items-center justify-center mt-8'>
        <h2 className='text-mine-shaft font-bold text-xl md:text-3xl lg:text-4xl uppercase'>
          Listen on &nbsp;
        </h2>
        <a
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.vimeo.com'
          className='px-2 text-blue-400 focus:outline-none'>
          <FaVimeo className='hover:text-blue-200 text-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
        </a>
        <a
          target='_blank'
          rel='noreferrer noopener'
          href='https://open.spotify.com/artist/4UobcfdsvVwgXka22f9I7d?si=PXsGbhijT3qVRajiC6jVvw'
          className='px-2 text-green-400 focus:outline-none'>
          <FaSpotify className='hover:text-green-200 text-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
        </a>
        <a
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.youtube.com/channel/UCuAuh0pongpsiMQGxwLcTxQ'
          className='px-2 text-red-500 focus:outline-none'>
          <FaYoutube className='hover:text-red-200 text-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
        </a>
      </div>
    </section>
  );
};
