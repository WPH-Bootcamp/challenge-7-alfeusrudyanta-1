import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function DefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <div className='grow'>{children}</div>
      <Footer />
    </>
  );
}
