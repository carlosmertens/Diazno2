import Head from 'next/head';

export const HeroLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Diazno 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='bg-hero-small bg-cover bg-center md:bg-hero md:bg-bottom lg:bg-center'>
        {children}
      </header>
    </>
  );
};
