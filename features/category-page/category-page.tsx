'use client';

import RestaurantCard from '@/components/shared/restaurant-card';
import { useRestFilter } from './hooks/use-rest-filter';
import { useState } from 'react';

const CategoryPage = () => {
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

  return (
    <section className='w-screen px-4 pt-20 pb-10 md:px-30 md:pt-32 md:pb-25'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <span className='display-xs-extrabold md:display-md-extrabold text-neutral-950'>
          All Restaurant
        </span>

        <div className='flex gap-10'>
          {/* Filter */}

          {/* Filter Result */}
          <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5'>
            {data?.pages.map((card) =>
              card.data.restaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  id={restaurant.id}
                  logo={restaurant.logo}
                  name={restaurant.name}
                  star={restaurant.star}
                  place={restaurant.place}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CategoryPage };
