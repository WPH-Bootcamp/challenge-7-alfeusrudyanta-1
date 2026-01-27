import { Search } from 'lucide-react';
import Image from 'next/image';
import { HeroSearchProps } from '@/features/home-page/types/hero';

const HeroSearch: React.FC<HeroSearchProps> = ({ search, setSearch }) => {
  return (
    <div className='relative aspect-1440/827 max-h-206.75 min-h-162'>
      <Image
        src='/images/home-front.png'
        alt='Home Food Image'
        loading='eager'
        fill
        className='object-cover'
      />

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-linear-to-b from-black/20 to-black/80' />

      {/* Centered content */}
      <div className='absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-5.5'>
        {/* Hero Welcome */}
        <div className='flex flex-col gap-1 text-center md:gap-2'>
          <h1 className='display-lg-extrabold md:display-2xl-extrabold text-white'>
            Explore Culinary Experiences
          </h1>
          <p className='text-lg-bold md:display-xs-bold text-white'>
            Search and refine your choice to discover the perfect restaurant.
          </p>
        </div>

        {/* Search Bar */}
        <div className='relative mx-auto mt-6 flex h-12 w-full max-w-151 items-center gap-1.5 rounded-full bg-white md:mt-10 md:h-14'>
          <Search className='absolute top-1/2 left-4 size-5 -translate-y-1/2 cursor-pointer text-neutral-500 hover:scale-105 md:left-6' />

          <input
            type='text'
            value={search}
            placeholder='Search restaurants, food and drink'
            onChange={(e) => setSearch(e.currentTarget.value)}
            className='text-sm-regular md:text-md-regular mr-4 ml-10.5 h-7 w-full focus-within:outline-0 md:mr-6 md:ml-12.5 md:h-7.5'
          />
        </div>
      </div>
    </div>
  );
};

export { HeroSearch };
