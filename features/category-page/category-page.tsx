'use client';

import RestaurantCard from '@/components/shared/restaurant-card';
import { useRestFilter } from './hooks/use-rest-filter';
import { useEffect, useState } from 'react';
import { CategoryFilter } from './components/category-filter';
import { ListFilter } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { LoadingSpinner } from '@/components/shared/loading-spinner';
import { LoadingPage } from '@/components/shared/loading-page';

const CategoryPage = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  const { data, isPending } = useRestFilter({
    category: null,
    location: null,
    range: null,
    priceMin,
    priceMax,
    rating,
  });

  const initialLoading = isPending && !data;

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth >= 768) {
        setIsSheetOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSheetOpen = () => {
    setIsSheetOpen((prev) => !prev);
  };

  const handlePriceMin = (e: number | null) => {
    setPriceMin(e);
  };

  const handlePriceMax = (e: number | null) => {
    setPriceMax(e);
  };

  const handleRating = (newRating: number | null) => {
    setRating(newRating);
  };

  if (initialLoading) {
    return <LoadingPage />;
  }

  return (
    <section className='bg-neutral-25 w-screen px-4 pt-20 pb-10 md:px-30 md:pt-32 md:pb-25'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <span className='display-xs-extrabold md:display-md-extrabold text-neutral-950'>
          All Restaurant
        </span>

        <div className='flex gap-10'>
          {/* Filter */}
          <div className='hidden md:block'>
            <CategoryFilter
              showShadow={true}
              isPending={isPending}
              priceMin={priceMin}
              handlePriceMin={handlePriceMin}
              priceMax={priceMax}
              handlePriceMax={handlePriceMax}
              rating={rating}
              handleRating={handleRating}
            />
          </div>

          {isPending && (
            <div className='mx-auto mt-10 flex w-full items-center justify-center'>
              <LoadingSpinner className='border-primary-100 mx-auto size-10 border-t-0' />
            </div>
          )}

          {data?.pages[0].data.restaurants.length === 0 && (
            <span className='text-sm-semibold md:text-md-semibold w-full text-neutral-950'>
              No filter result found
            </span>
          )}

          {/* Filter Result */}
          {!isPending && (
            <div className='grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5'>
              <div className='flex items-center justify-between rounded-xl p-4 shadow-[0_0_20px_0_#CBCACA40] md:hidden'>
                <span className='text-sm-extrabold text-neutral-950'>
                  FILTER
                </span>

                <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
                  <SheetTrigger asChild>
                    <ListFilter onClick={handleSheetOpen} className='size-5' />
                  </SheetTrigger>
                  <SheetContent side='left'>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                    <CategoryFilter
                      showShadow={false}
                      isPending={isPending}
                      priceMin={priceMin}
                      handlePriceMin={handlePriceMin}
                      priceMax={priceMax}
                      handlePriceMax={handlePriceMax}
                      rating={rating}
                      handleRating={handleRating}
                    />
                  </SheetContent>
                </Sheet>
              </div>

              {data?.pages.map((card) =>
                card.data.restaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} {...restaurant} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { CategoryPage };
