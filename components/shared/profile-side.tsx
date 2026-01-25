'use client';

import { useAuth } from '@/hooks/use-auth';
import { useGetProfile } from '@/hooks/use-profie';
import { MapPin, FileText, LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Ref } from 'react';

type ProfileSideProps = {
  isHover?: boolean;
  ref?: Ref<HTMLDivElement>;
};

const ProfileSide: React.FC<ProfileSideProps> = ({ isHover = false, ref }) => {
  const { logout } = useAuth();
  const { data } = useGetProfile();

  return (
    <div
      ref={ref}
      className={cn(
        'flex w-60 flex-col gap-6 rounded-2xl bg-white p-5 shadow-[0_0_20px_#CBCACA40]',
        isHover && 'absolute top-13 right-0 w-49.25 gap-3 p-4 md:hidden',
        !isHover && 'hidden h-fit md:flex'
      )}
    >
      <Link href={'/profile'} className='group'>
        <div className='flex items-center gap-2'>
          <Image
            src={data?.data.avatar ?? '/images/user.png'}
            alt='User Profile Picture'
            height={36}
            width={36}
            className='size-9 rounded-full md:size-12'
          />

          <span className='text-md-bold md:text-lg-bold group-hover:text-primary-100 text-neutral-950'>
            {data?.data.name}
          </span>
        </div>
      </Link>

      <div className='w-full border border-neutral-200' />

      <Link href={'/profile'} className='group flex items-center gap-2'>
        <MapPin className='group-hover:text-primary-100 size-6 text-neutral-950' />
        <span className='text-sm-medium md:text-md-medium group-hover:text-primary-100 text-neutral-950'>
          Delivery Address
        </span>
      </Link>

      <Link href={'/my-order'} className='group flex items-center gap-2'>
        <FileText className='group-hover:text-primary-100 size-6 text-neutral-900' />
        <span className='text-sm-medium md:text-md-medium group-hover:text-primary-100 text-neutral-950'>
          My Orders
        </span>
      </Link>

      <div
        onClick={logout}
        className='group flex cursor-pointer items-center gap-2'
      >
        <LogOut className='group-hover:text-primary-100 size-6 text-neutral-950' />
        <span className='text-sm-medium md:text-md-medium group-hover:text-primary-100 text-neutral-950'>
          Logout
        </span>
      </div>
    </div>
  );
};

export { ProfileSide };
