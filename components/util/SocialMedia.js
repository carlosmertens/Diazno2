import {
  FaSpotify,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const ShareSocial = ({ transparent }) => {
  return (
    <div className='social-media text-xl flex items-center justify-center'>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.facebook.com/officialdiazno'
        className='px-2 focus:text-blue-500 focus:outline-none'>
        <FaFacebookSquare className='text-blue-500 hover:text-white text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.youtube.com/channel/UCuAuh0pongpsiMQGxwLcTxQ'
        className='px-2 focus:text-red-500 focus:outline-none'>
        <FaYoutube className='text-red-500 hover:text-white text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.instagram.com/diazno/'
        className='px-2 focus:text-red-300 focus:outline-none'>
        <FaInstagram className='text-red-200 hover:text-white text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://open.spotify.com/artist/4UobcfdsvVwgXka22f9I7d?si=PXsGbhijT3qVRajiC6jVvw'
        className='px-2 focus:text-green-400 focus:outline-none'>
        <FaSpotify className='text-green-400 hover:text-white text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
      </a>
    </div>
  );
};

export default ShareSocial;
