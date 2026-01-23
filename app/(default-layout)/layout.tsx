import { Footer } from '@/components/layout/footer';

export default function DefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
