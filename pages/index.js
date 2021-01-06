import Head from 'next/head';
import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Diazno 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <section id='hero-section' className='min-h-screen bg-gray-400'>
          <div>Section Hero</div>
        </section>
        <section id='-music-section'>
          <div>Section Music & Videos</div>
        </section>
        <section id='tours-section'>
          <div>Section Tours</div>
        </section>
        <section id='photos-section'>
          <div>Section Photos</div>
        </section>
        <section id='store-section'>
          <div>Section Store</div>
        </section>
        <section id='bio-section'>
          <div>Section Bio</div>
        </section>
        <section id='contact-section'>
          <div>Section Contact</div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
