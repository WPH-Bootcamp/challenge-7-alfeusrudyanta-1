import { cn } from '@/lib/utils';
import { LogoProps } from '../types';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC<LogoProps> = ({ isHome, isScrolled }) => {
  const ImageSrc =
    isScrolled || !isHome
      ? '/icons/header-bag-black.svg'
      : '/icons/header-bag-white.svg';

  return (
    <Link href={'/'} className='flex items-center gap-3.75'>
      <Image
        src={ImageSrc}
        alt='Foody Logo'
        height={42}
        width={42}
        className='size-10 md:size-10.5'
      />
      <span
        className={cn(
          'display-md-extrabold hidden text-neutral-950 md:block',
          isHome && 'text-white',
          isScrolled && 'text-neutral-950'
        )}
      >
        Foody
      </span>
    </Link>
  );
};

export { Logo };
