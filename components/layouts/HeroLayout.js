import Head from 'next/head';
import { Navbar } from '../Navbar';
import { Hero } from '../sections/Hero';

export const HeroLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Diazno 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='bg-hero-small bg-cover bg-center md:bg-hero md:bg-bottom lg:bg-center'>
        <Navbar />
        <Hero />
      </header>
    </>
  );
};
