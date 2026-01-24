'use client';

import { Scrolled } from '../types';
import { useGetCart } from '@/hooks/use-cart';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useGetProfile } from '@/hooks/use-profie';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ProfileSide } from '@/components/shared/profile-side';
import { profile } from 'console';

const LoggedIn: React.FC<Scrolled> = ({ isScrolled }) => {
  const cart = useGetCart();
  const profile = useGetProfile();
  const pathName = usePathname();
  const router = useRouter();

  const isHome = pathName === '/';
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const ImageSrc = isScrolled
    ? '/icons/header-bag-black.svg'
    : !isHome
      ? '/icons/header-bag-black.svg'
      : '/icons/header-bag-white.svg';

  useEffect(() => {
    const handleKeyOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('mousedown', handleKeyOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleKeyOutside);
    };
  }, [isMenuOpen]);

  const handleMenuOpen = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen((prev) => !prev);
      return;
    }

    router.push('/profile');
  };

  return (
    <div className='flex items-center gap-4 md:gap-6'>
      {/* Cart */}
      <Link href={'/mycart'} className='relative'>
        <Image
          src={ImageSrc}
          alt='Bag Icon'
          height={28}
          width={28}
          className='cursor-pointer md:size-8'
        />

        {cart.data?.data.summary.restaurantCount && (
          <div className='bg-primary-100 absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full text-white'>
            <span>{cart.data?.data.summary.restaurantCount}</span>
          </div>
        )}
      </Link>

      {/* Profile */}
      <div onClick={handleMenuOpen} className='relative'>
        <div className='flex cursor-pointer items-center gap-4'>
          <Image
            src={profile.data?.data.avatar ?? '/images/user.png'}
            alt='User Profile Picture'
            height={40}
            width={40}
            className='size-10 rounded-full md:size-12'
          />

          <span
            className={cn(
              'text-lg-semibold hidden text-neutral-950 md:block',
              isHome && 'text-white',
              isScrolled && 'text-neutral-950'
            )}
          >
            {profile.data?.data.name}
          </span>

          {/* Overlay */}
          {isMenuOpen && <ProfileSide isHover={true} ref={menuRef} />}
        </div>
      </div>
    </div>
  );
};

export { LoggedIn };
