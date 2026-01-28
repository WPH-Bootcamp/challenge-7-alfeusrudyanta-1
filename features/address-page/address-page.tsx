'use client';

import { ChangeAddressOverlay } from '@/components/shared/change-address-overlay';
import { LoadingPage } from '@/components/shared/loading-page';
import { ProfileSide } from '@/components/shared/profile-side';
import { Button } from '@/components/ui/button';
import { useGetProfile } from '@/hooks/use-profie';
import { selectAddress } from '@/store/slices/address-slice';
import { useSelector } from 'react-redux';

export const AddressPage = () => {
  const address = useSelector(selectAddress);

  const { data, isPending } = useGetProfile();

  const initialLoading = isPending && !data;

  if (initialLoading) {
    return <LoadingPage />;
  }

  return (
    <section className='bg-neutral-50 px-4 py-20 pb-12 md:px-30 md:py-32'>
      <div className='flex md:gap-8'>
        <ProfileSide />
        <div className='flex h-fit w-full flex-col gap-4 md:gap-6'>
          <span className='md:display-md-extrabold display-xs-extrabold text-neutral-950'>
            Address
          </span>

          <div className='flex w-full max-w-131 flex-col gap-6 rounded-2xl bg-white p-4 shadow-[0_0_20px_0_#CBCACA40] md:p-5'>
            <div className='flex items-center justify-between'>
              <span className='text-sm-medium md:text-md-medium text-neutral-950'>
                Address
              </span>

              <span className='text-sm-bold md:text-md-bold text-neutral-950'>
                {address}
              </span>
            </div>

            <ChangeAddressOverlay>
              <Button>Change</Button>
            </ChangeAddressOverlay>
          </div>
        </div>
      </div>
    </section>
  );
};
