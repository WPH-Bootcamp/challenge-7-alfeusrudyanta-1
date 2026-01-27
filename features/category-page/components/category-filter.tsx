import { cn } from '@/lib/utils';
import { DISTANCE_FILTER, RATING_FILTER } from '../constant/filter-data';
import { Checkbox } from '@/components/ui/checkbox';
import { ChangeEventHandler, FormEventHandler } from 'react';
import { Star } from 'lucide-react';
import { CheckedState } from '@radix-ui/react-checkbox';

type CategoryFilterProps = {
  showShadow?: boolean;
  isPending: boolean;
  priceMin: number | null;
  handlePriceMin: ChangeEventHandler<HTMLInputElement>;
  priceMax: number | null;
  handlePriceMax: ChangeEventHandler<HTMLInputElement>;
  rating: number | null;
  handleRating: (starNumber: number | null) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  showShadow = false,
  isPending,
  priceMin,
  handlePriceMin,
  priceMax,
  handlePriceMax,
  rating,
  handleRating,
}) => {
  const handleCheckboxChange = (starRating: number) => {
    if (rating === starRating) {
      handleRating(null);
      return;
    }

    const newRating = starRating === 0 ? null : starRating;
    handleRating(newRating);
  };

  return (
    <div
      className={cn(
        'flex h-fit w-full flex-col gap-3 bg-white px-4 py-4 md:w-66.5 md:gap-6',
        showShadow && 'rounded-xl shadow-[0_0_20px_0_#CBCACA40]'
      )}
    >
      {/* Distance */}
      <div className='flex flex-col gap-2.5'>
        <span className='md:text-md-extrabold text-md-bold text-neutral-950'>
          FILTER
        </span>

        <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
          Distance
        </span>

        {DISTANCE_FILTER.map((distance) => (
          <label
            key={distance}
            htmlFor={distance}
            className='text-sm-regular md:text-md-regular flex cursor-pointer items-center gap-2 text-neutral-950'
          >
            <Checkbox id={distance} name={distance} disabled={isPending} />
            {distance}
          </label>
        ))}
      </div>

      <div className='w-full border border-neutral-300' />

      {/* Price */}
      <div className='flex flex-col gap-2.5'>
        <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
          Price
        </span>

        <div
          key='price-min'
          className='flex items-center gap-2 rounded-md border border-neutral-300 px-2 py-1.25 md:p-2'
        >
          <div className='flex size-9.5 shrink-0 items-center justify-center rounded-xs bg-neutral-200 md:bg-neutral-100'>
            <span className='md:text-md-bold text-sm-semibold text-neutral-950'>
              Rp
            </span>
          </div>

          <input
            type='number'
            min={0}
            placeholder='Minimum Price'
            value={priceMin ?? ''}
            onChange={handlePriceMin}
            className='md:text-md-regular text-sm-regular h-7 w-[calc(100%-4px)] text-neutral-950 outline-0 md:h-7.5'
          />
        </div>

        <div
          key='price-max'
          className='flex items-center gap-2 rounded-md border border-neutral-300 px-2 py-1.25 md:p-2'
        >
          <div className='flex size-9.5 shrink-0 items-center justify-center rounded-xs bg-neutral-200 md:bg-neutral-100'>
            <span className='md:text-md-bold text-sm-semibold text-neutral-950'>
              Rp
            </span>
          </div>

          <input
            type='number'
            min={0}
            placeholder='Maximum Price'
            value={priceMax ?? ''}
            onChange={handlePriceMax}
            className='md:text-md-regular text-sm-regular h-7 w-[calc(100%-4px)] text-neutral-950 outline-0 md:h-7.5'
          />
        </div>
      </div>

      <div className='w-full border border-neutral-300' />

      {/* Rating */}
      <div className='flex flex-col gap-2.5'>
        <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
          Rating
        </span>

        <div className='flex flex-col'>
          {RATING_FILTER.map((starRating) => (
            <label
              htmlFor={starRating.toString()}
              key={starRating}
              className='flex cursor-pointer items-center gap-1 p-2 md:gap-2'
            >
              <Checkbox
                id={starRating.toString()}
                name={starRating.toString()}
                checked={starRating <= (rating ?? 0)}
                onCheckedChange={() => handleCheckboxChange(starRating)}
                disabled={isPending}
              />

              <div className='flex items-center gap-0.5 md:gap-1.25'>
                <Star className='size-6 fill-[#FFAB0D] stroke-0' />
                {starRating}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CategoryFilter };
