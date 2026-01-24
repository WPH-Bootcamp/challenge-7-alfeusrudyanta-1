'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from './components/logo';
import Cookies from 'js-cookie';
import { NotLoggedIn } from './components/not-logged-in';
import { LoggedIn } from './components/logged-in';
import { useAuth } from '@/hooks/use-auth';

const Header = () => {
  const pathName = usePathname();
  const { isLoggedIn } = useAuth();

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const isHome = pathName === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed z-10 flex h-16 w-full items-center justify-between px-4 transition-colors ease-in-out md:h-20 md:px-30',
        !isHome && 'shadow-[0_0_20px_#CBCACA40]',
        isScrolled && 'bg-white shadow-[0_0_20px_#CBCACA40]'
      )}
    >
      <Logo isHome={isHome} isScrolled={isScrolled} />

      {!isLoggedIn && <NotLoggedIn isScrolled={isScrolled} />}
      {isLoggedIn && <LoggedIn isScrolled={isScrolled} />}
    </div>
  );
};

export { Header };
