import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Hero } from '../sections/Hero';

export default function PageLayout({ children }) {
  return (
    <>
      <header className='bg-hero-small bg-cover bg-center md:bg-hero md:bg-bottom lg:bg-bottom'>
        <Navbar />
        <Hero />
      </header>
      <main className='bg-dusty-gray'>{children}</main>
      <Footer />
    </>
  );
}
