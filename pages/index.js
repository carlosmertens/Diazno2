import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';
import { HeroLayout } from '../components/layouts/HeroLayout';
import { MainLayout } from '../components/layouts/MainLayout';
import { Navbar } from '../components/Navbar';
import { Music } from '../components/sections/Music';
import { Tours } from '../components/sections/Tours';
import { Photos } from '../components/sections/Photos';
import { Store } from '../components/sections/Store';
import { Bio } from '../components/sections/Bio';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <PageLayout>
        <HeroLayout>
          <Navbar />
        </HeroLayout>
        <MainLayout>
          <Music />
          <Tours />
          <Photos />
          <Store />
          <Bio />
          <Contact />
        </MainLayout>
        <Footer />
      </PageLayout>
    </React.Fragment>
  );
}
