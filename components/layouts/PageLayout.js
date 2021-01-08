import { Footer } from '../Footer';

export default function PageLayout({ children }) {
  return (
    <>
      <main className='bg-dusty-gray'>{children}</main>
      <Footer />
    </>
  );
}
