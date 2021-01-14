import Head from 'next/head';

export const HeroLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Diazno 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='min-h-screen relative bg-hero-sm bg-cover bg-center md:bg-hero-md md:bg-bottom lg:bg-hero-lg lg:bg-center'>
        {children}
      </header>
    </>
  );
};
