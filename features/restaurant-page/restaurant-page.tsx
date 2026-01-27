'use client';

import { useParams, useRouter } from 'next/navigation';
import { useGetRest } from './hooks/use-rest';
import { LoadingPage } from '@/components/shared/loading-page';
import { Button } from '@/components/ui/button';
import RestaurantCard from '@/components/shared/restaurant-card';
import { Share2 } from 'lucide-react';
import { useState } from 'react';
import { MENU_FILTER } from './consant/menu-filter';
import { cn } from '@/lib/utils';
import { MenuCart } from './components/menu-card';
import { useGetCart } from '@/hooks/use-cart';

const RestaurantPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const { data, isPending } = useGetRest(Number(id));

  const [filter, setFilter] = useState<string>('All Menu');

  const initialLoad = isPending && !data;

  const isEmpty = !data || !data.data || data.data.menus.length === 0;

  if (initialLoad) {
    return <LoadingPage />;
  }

  if (isEmpty) {
    return (
      <section className='bg-neutral-25 px-4 pt-20 pb-12 md:px-55 md:pt-32 md:pb-25'>
        <div className='mx-auto flex w-full max-w-120 flex-col items-center gap-3 md:gap-4'>
          <div className='flex w-full flex-col gap-1 md:gap-2'>
            <span className='display-xs-extrabold md:display-sm-extrabold text-neutral-950'>
              Restaurant Not Found
            </span>

            <span className='text-sm-regular md:text-md-regular text-neutral-950'>
              We could not find the restaurant you are looking for
            </span>
          </div>

          <Button className='h-9 md:h-10' onClick={() => router.push('/')}>
            Home
          </Button>
        </div>
      </section>
    );
  }

  const filteredMenu = data?.data.menus.filter((menu) => {
    if (filter === 'All Menu') {
      return true;
    }
    return menu.type === filter.toLowerCase();
  });

  return (
    <section className='bg-neutral-25 h-auto px-4 pt-20 pb-10 md:px-30 md:pt-32 md:pb-12'>
      <div className='flex flex-col gap-4 md:gap-8'>
        {/* Images */}
        <div></div>

        {/* Name */}
        <div className='flex items-center justify-between'>
          <RestaurantCard showOutline={false} {...data.data} />

          <Button variant='empty' className='md:max-w-11xl size-11 md:w-full'>
            <Share2 />
            <span className='hidden md:block'>Share</span>
          </Button>
        </div>

        <div className='w-full border border-neutral-300' />

        {/* Menu */}
        <div className='flex flex-col gap-4 md:gap-6'>
          <span className='display-xs-extrabold md:display-lg-extrabold text-neutral-950'>
            Menu
          </span>

          <div className='flex items-center gap-2 md:gap-3'>
            {MENU_FILTER.map((type) => (
              <Button
                key={type}
                variant='empty'
                size='filter'
                onClick={() => setFilter(type)}
                className={cn(
                  filter === type &&
                    'border-primary-100/10 bg-[#FFECEC] hover:bg-red-100'
                )}
              >
                <span
                  className={cn(
                    'text-sm-semibold md:text-md-semibold',
                    filter === type && 'text-primary-100'
                  )}
                >
                  {type}
                </span>
              </Button>
            ))}
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-x-5 md:gap-y-6'>
            {filteredMenu.map((menu) => (
              <MenuCart key={menu.id} restaurantId={data.data.id} {...menu} />
            ))}
          </div>
        </div>

        <div className='w-full border border-neutral-300' />

        {/* Review */}
        <div></div>
      </div>
    </section>
  );
};

export { RestaurantPage };
