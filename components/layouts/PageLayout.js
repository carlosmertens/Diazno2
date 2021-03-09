import Head from 'next/head';

export const PageLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Diazno 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-scorpion'>{children}</div>
    </>
  );
};
