import Head from 'next/head';
import Image from 'next/image';

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
        <Image
          src='/hero.jpg'
          alt='Diazno backgroung image'
          width={2000}
          height={2000}
          layout='responsive'
          sizes='100vw'
          priority
        />
        <img src='logo.png' />
      </main>
    </div>
  );
}
