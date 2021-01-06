import Head from 'next/head';
import { Fragment } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Hero from '../components/sections/Hero';
import Music from '../components/sections/Music';
import Tours from '../components/sections/Tours';
import Photos from '../components/sections/Photos';
import Store from '../components/sections/Store';
import Bio from '../components/sections/Bio';
import Contact from '../components/sections/Contact';

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
        <Hero />
        <Music />
        <Tours />
        <Photos />
        <Store />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}
