'use client';

import { useEffect, useState } from 'react';
import { STATUS_DATA } from '../constant/status-data';
import { useMyOrder } from '../hooks/use-my-order';
import { Status } from '../types/my-order';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import OrderCard from './order-card';
import { Search } from 'lucide-react';
import { LoadingSpinner } from '@/components/shared/loading-spinner';

const MyOrderData = () => {
  const [search, setSearch] = useState<string>('');
  const [status, setStatus] = useState<Status>('done');

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, isPending } =
    useMyOrder(status);
  const { ref, inView } = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  const filteredData =
    data?.pages.flatMap((data) =>
      data.data.orders.filter((rest) =>
        search
          ? rest.restaurants[0].restaurant.name
              .toLowerCase()
              .includes(search.toLowerCase())
          : true
      )
    ) ?? [];

  return (
    <div className='flex flex-col gap-5 p-4 md:p-6'>
      <div className='relative flex h-11 w-full max-w-149.5 items-center gap-1.5 rounded-full border border-neutral-300 bg-white'>
        <Search className='absolute top-1/2 left-4 size-5 -translate-y-1/2 cursor-pointer text-neutral-500 hover:scale-105' />

        <input
          type='text'
          value={search}
          placeholder='Search'
          onChange={(e) => setSearch(e.currentTarget.value)}
          className='text-sm-regular md:text-md-regular mr-4 ml-10.5 h-7 w-full focus-within:outline-0 md:mr-6 md:ml-12.5 md:h-7.5'
        />
      </div>

      {/* Status Filter */}
      <div className='flex items-center gap-2 overflow-x-auto md:gap-3'>
        <span className='text-sm-bold md:text-lg-bold text-neutral-950'>
          Status
        </span>

        {STATUS_DATA.map((filter) => (
          <Button
            key={filter.name}
            variant='empty'
            size='filter'
            onClick={() => setStatus(filter.name)}
            className={cn(
              status === filter.name &&
                'border-primary-100/10 bg-[#FFECEC] hover:bg-red-100'
            )}
          >
            <span
              className={cn(
                'text-sm-semibold md:text-md-semibold',
                status === filter.name && 'text-primary-100'
              )}
            >
              {filter.displayName}
            </span>
          </Button>
        ))}
      </div>

      {/* My Order */}
      <div ref={ref} className='flex flex-col gap-5'>
        {filteredData.length === 0 &&
          !isPending &&
          (search ? (
            <span className='text-sm-medium md:text-md-medium text-neutral-950'>
              Try a different search term or check your spelling
            </span>
          ) : (
            <span className='text-sm-medium md:text-md-medium text-neutral-950'>
              No order(s) found for status "
              {STATUS_DATA.find((v) => v.name === status)?.displayName}"
            </span>
          ))}

        {filteredData.map((order) => (
          <OrderCard key={order.transactionId} {...order} />
        ))}
      </div>

      {isPending && (
        <div className='mt-10 flex w-full items-center justify-center'>
          <LoadingSpinner className='border-primary-100 mx-auto size-10 border-t-0' />
        </div>
      )}
    </div>
  );
};

export { MyOrderData };
