import { HeroLayout } from '../components/layouts/HeroLayout';
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
      <HeroLayout />
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
