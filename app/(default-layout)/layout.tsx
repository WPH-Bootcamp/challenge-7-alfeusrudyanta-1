import { Footer } from '@/components/layout/footer';

export default function DefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className='grow'>{children}</div>
      <Footer />
    </>
  );
}
