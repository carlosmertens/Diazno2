import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Hero } from '../sections/Hero';

export default function PageLayout({ children }) {
  return (
    <>
      <header className='bg-dusty-gray'>
        <Navbar />
        <Hero />
      </header>
      <main className='bg-dusty-gray'>{children}</main>
      <Footer />
    </>
  );
}