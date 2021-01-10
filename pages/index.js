import { HeroLayout } from '../components/layouts/HeroLayout';
import { MainLayout } from '../components/layouts/MainLayout';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/sections/Hero';
import { Music } from '../components/sections/Music';
import { Tours } from '../components/sections/Tours';
import { Photos } from '../components/sections/Photos';
import { Store } from '../components/sections/Store';
import { Bio } from '../components/sections/Bio';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroLayout>
        <Navbar />
        {/* <Hero /> */}
        <Footer />
      </HeroLayout>
      <MainLayout>
        <Music />
        <Tours />
        <Photos />
        <Store />
        <Bio />
        <Contact />
      </MainLayout>
    </>
  );
}
