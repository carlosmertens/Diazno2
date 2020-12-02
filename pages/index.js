import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diazno 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-5xl text-amber-500 text-center'>
          Welcome to Diazno 2.0
        </h1>
      </main>
    </div>
  );
}
