'use client';

import { ProfileSide } from '@/components/shared/profile-side';
import { MyOrderData } from './components/my-order-data';
import { useGetProfile } from '@/hooks/use-profie';
import { LoadingPage } from '@/components/shared/loading-page';

const MyOrderPage = () => {
  const { data, isPending } = useGetProfile();

  const initialLoading = isPending && !data;

  if (initialLoading) {
    return <LoadingPage />;
  }

  return (
    <section className='bg-neutral-50 px-4 py-20 pb-12 md:px-30 md:py-32'>
      <div className='flex md:gap-8'>
        <ProfileSide />

        <div className='min-w-0 flex-1'>
          <div className='flex h-fit w-full flex-col gap-4 md:gap-6'>
            <span className='md:display-md-extrabold display-xs-extrabold text-neutral-950'>
              My Orders
            </span>
            <MyOrderData />
          </div>
        </div>
      </div>
    </section>
  );
};

export { MyOrderPage };
