import {
  FaSpotify,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const ShareSocial = ({ transparent }) => {
  return (
    <div
      className={`share-social text-xl ${
        transparent ? '' : 'bg-gray-600'
      } text-white flex items-center justify-center`}>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.facebook.com/officialdiazno'
        className='px-2'>
        <FaFacebookSquare className='hover:text-blue-400' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.youtube.com/channel/UCuAuh0pongpsiMQGxwLcTxQ'
        className='px-2'>
        <FaYoutube className='hover:text-red-500' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.instagram.com/diazno/'
        className='px-2'>
        <FaInstagram className='hover:text-red-300' />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://open.spotify.com/artist/4UobcfdsvVwgXka22f9I7d?si=PXsGbhijT3qVRajiC6jVvw'
        className='px-2'>
        <FaSpotify className='hover:text-green-400' />
      </a>
    </div>
  );
};

export default ShareSocial;
