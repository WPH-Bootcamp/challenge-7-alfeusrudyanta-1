'use client';

import { Star } from 'lucide-react';
import { useGetReviewRest } from '../hooks/use-review';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { LoadingSpinner } from '@/components/shared/loading-spinner';
import { ReviewCard } from './review-card';

type ReviewDataProps = {
  restaurantId: number;
  rating: number;
};

export const ReviewData: React.FC<ReviewDataProps> = ({
  restaurantId,
  rating,
}) => {
  const { data, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetReviewRest(restaurantId);

  const { ref, inView } = useInView({ threshold: 0.8 });

  const reviewCount = data?.pages[0].data.pagination.total;
  const initialLoad = isPending && !data;

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, hasNextPage]);

  if (initialLoad) {
    return (
      <div className='flex flex-col gap-2 md:gap-3'>
        <span className='display-xs-extrabold md:display-lg-extrabold text-neutral-950'>
          Review
        </span>
        <LoadingSpinner className='border-primary-100 mx-auto size-5 border-t-0 md:size-6' />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      {/* Title */}
      <div className='flex flex-col gap-2 md:gap-3'>
        <span className='display-xs-extrabold md:display-lg-extrabold text-neutral-950'>
          Review
        </span>

        <div className='flex items-center gap-1'>
          <Star className='size-6 fill-[#FFAB0D] stroke-0' />

          <span className='md:text-lg-extrabold text-md-extrabold text-neutral-950'>
            {rating.toFixed(1)} ({reviewCount} Review
            {reviewCount && reviewCount > 0 && 's'})
          </span>
        </div>
      </div>

      {/* Review */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5'>
        {data?.pages.map((pages) =>
          pages.data.reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))
        )}
      </div>

      <div ref={ref} />
      {isFetchingNextPage && (
        <LoadingSpinner className='border-primary-100 mx-auto size-5 border-t-0 md:size-6' />
      )}
    </div>
  );
};
