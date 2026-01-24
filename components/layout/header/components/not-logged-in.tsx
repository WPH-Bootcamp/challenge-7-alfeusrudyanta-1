'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Scrolled } from '../types';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const NotLoggedIn: React.FC<Scrolled> = ({ isScrolled }) => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSheetOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile View */}
      <div className='md:hidden'>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button size='rounded' variant='empty' className='bg-white'>
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetTitle></SheetTitle>
            <div className='text-sm-bold flex cursor-pointer flex-col gap-4 px-4 py-8 text-neutral-950 hover:text-neutral-950/90'>
              <Link href={'/authorization?tab=sign-in'}>Sign In</Link>
              <Link href={'/authorization?tab=sign-up'}>Sign Up</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop View */}
      <div className='hidden items-center gap-4 md:flex'>
        <Link href={'/authorization?tab=sign-in'}>
          <Button
            variant='empty'
            className={cn(
              'w-40.75 border-2',
              !isScrolled && 'text-white hover:bg-neutral-100/10'
            )}
          >
            Sign In
          </Button>
        </Link>

        <Link href={'/authorization?tab=sign-up'}>
          <Button
            variant='empty'
            className={cn(
              'w-40.75 border-2 bg-white',
              !isScrolled && 'border-none'
            )}
          >
            Sign Up
          </Button>
        </Link>
      </div>
    </>
  );
};

export { NotLoggedIn };
