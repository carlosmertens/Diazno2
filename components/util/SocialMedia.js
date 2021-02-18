import {
  FaSpotify,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const ShareSocial = ({ transparent }) => {
  return (
    <div className='social-media text-xl text-white flex items-center justify-center'>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.facebook.com/officialdiazno'
        className='px-2 focus:text-blue-400 focus:outline-none'>
        <FaFacebookSquare className='hover:text-blue-400 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.youtube.com/channel/UCuAuh0pongpsiMQGxwLcTxQ'
        className='px-2 focus:text-red-500 focus:outline-none'>
        <FaYoutube className='hover:text-red-500 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.instagram.com/diazno/'
        className='px-2 focus:text-red-300 focus:outline-none'>
        <FaInstagram className='hover:text-red-200 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://open.spotify.com/artist/4UobcfdsvVwgXka22f9I7d?si=PXsGbhijT3qVRajiC6jVvw'
        className='px-2 focus:text-green-400 focus:outline-none'>
        <FaSpotify className='hover:text-green-400 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' />
      </a>
    </div>
  );
};

export default ShareSocial;
