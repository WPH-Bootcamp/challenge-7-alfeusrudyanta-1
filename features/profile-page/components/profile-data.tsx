'use client';

import { Button } from '@/components/ui/button';
import { useGetProfile } from '@/hooks/use-profie';

const ProfileData = () => {
  const { data } = useGetProfile();

  return (
    <div className='flex w-full max-w-131 flex-col gap-6 rounded-2xl p-4 shadow-[0_0_20px_#CBCACA40] md:p-5'>
      {/* Profile data */}
      <div className='flex flex-col gap-2 md:gap-3'>
        <div className='flex items-center justify-between'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            Name
          </span>

          <span className='text-sm-bold md:text-md-bold text-neutral-950'>
            {data?.data.name}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            Email
          </span>

          <span className='text-sm-bold md:text-md-bold text-neutral-950'>
            {data?.data.email}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            Phone Number
          </span>

          <span className='text-sm-bold md:text-md-bold text-neutral-950'>
            {data?.data.phone}
          </span>
        </div>
      </div>

      <Button className='h-11'>Update Profile</Button>
    </div>
  );
};

export { ProfileData };
