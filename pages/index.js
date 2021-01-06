import Head from 'next/head';
import Music from '../components/sections/Music';
import Tours from '../components/sections/Tours';
import Photos from '../components/sections/Photos';
import Store from '../components/sections/Store';
import Bio from '../components/sections/Bio';
import Contact from '../components/sections/Contact';
import PageLayout from '../components/layouts/PageLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Diazno 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageLayout>
        <Music />
        <Tours />
        <Photos />
        <Store />
        <Bio />
        <Contact />
      </PageLayout>
    </>
  );
}
