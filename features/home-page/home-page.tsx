'use client';

import { useEffect, useState } from 'react';
import { HeroSearch } from './components/hero-search';
import { useRestBestSeller } from './hooks/use-rest-best-seller';
import { useRestSearch } from './hooks/use-rest-search';
import { LoadingSpinner } from '@/components/shared/loading-spinner';
import { CATEGORY_CARDS } from './constant/category-card';
import { CategoryCard } from './components/category-card';
import RestaurantCard from '@/components/shared/restaurant-card';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { LoadingPage } from '@/components/shared/loading-page';

const HomePage = () => {
  const [search, setSearch] = useState<string>('');

  const bestSellerRest = useRestBestSeller();
  const searchRest = useRestSearch(search);
  const { ref, inView } = useInView({ threshold: 0.8 });

  const data = search.length === 0 ? bestSellerRest : searchRest;

  const isPending =
    bestSellerRest.isPending || (searchRest.isPending && search.length !== 0);

  const initialLoading =
    (bestSellerRest.isPending && !bestSellerRest.data) ||
    (searchRest.isPending && !searchRest.data && search.length !== 0);

  useEffect(() => {
    if (inView && data?.hasNextPage && !data?.isFetchingNextPage) {
      data.fetchNextPage();
    }
  }, [inView, data]);

  const handleSeeAll = async () => {
    if (!data?.hasNextPage || data?.isFetchingNextPage) return;

    while (data?.hasNextPage && !data?.isFetchingNextPage) {
      await data.fetchNextPage();
    }
  };

  const handleShowMore = async () => {
    if (data?.hasNextPage && !data?.isFetchingNextPage) {
      data.fetchNextPage();
    }
  };

  if (initialLoading) {
    return <LoadingPage />;
  }

  return (
    <section className='bg-neutral-25 flex w-screen flex-col pb-6 md:gap-12 md:pb-25'>
      <HeroSearch key='Hero Search' search={search} setSearch={setSearch} />

      {/* Category Cards */}
      <div className='grid grid-cols-3 items-stretch gap-x-5 gap-y-5 px-4 py-6 md:grid-cols-6 md:px-30 md:py-0'>
        {CATEGORY_CARDS.map((item, index) => (
          <CategoryCard key={index} image={item.image} name={item.name} />
        ))}
      </div>

      {/* Restaurant List */}
      <div className='flex flex-col gap-4 px-4 py-6 md:gap-8 md:px-30 md:py-0'>
        <div className='flex items-center justify-between'>
          <span className='display-xs-extrabold md:display-md-extrabold text-neutral-950'>
            Recommended
          </span>

          <span
            onClick={handleSeeAll}
            className='text-md-extrabold text-primary-100 md:text-lg-extrabold cursor-pointer hover:underline'
          >
            See All
          </span>
        </div>

        {/* List */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
          {data?.data?.pages.map((card) =>
            card.data.restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))
          )}
        </div>

        {data?.hasNextPage && (
          <Button
            onClick={handleShowMore}
            ref={ref}
            variant='empty'
            className='mx-auto max-w-40'
          >
            Show More
          </Button>
        )}
      </div>

      {data.data?.pages[0].data.restaurants.length === 0 && (
        <div className='-mt-10 mb-4 px-4 md:-mt-15 md:mb-0 md:px-30'>
          <span className='text-md-bold md:text-lg-bold text-neutral-950'>
            No results found for "{search}"
          </span>
        </div>
      )}

      {isPending && (
        <div className='mt-10 flex w-full items-center justify-center'>
          <LoadingSpinner className='border-primary-100 mx-auto size-10 border-t-0' />
        </div>
      )}
    </section>
  );
};

export { HomePage };
