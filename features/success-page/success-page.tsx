'use client';

import { Button } from '@/components/ui/button';
import { selectCheckoutState } from '@/store/slices/checkout-slice';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { DashedLine } from '@/components/shared/dashed-line';

export const SuccessPage = () => {
  const checkout = useSelector(selectCheckoutState);

  return (
    <section className='flex min-h-screen items-center justify-center px-4'>
      <div className='flex flex-col gap-7'>
        <div className='mx-auto flex items-center gap-3.75'>
          <Image
            src='/icons/logo-red.svg'
            alt='logo'
            height={42}
            width={42}
            className='size-10.5'
          />

          <span className='display-md-extrabold text-neutral-950'>Foody</span>
        </div>

        <div className='flex w-full max-w-107 flex-col gap-4 rounded-2xl bg-white p-4 shadow-[0_0_20px_0_#CBCACA40] md:p-5'>
          {/* Order Success */}
          <div className='flex flex-col items-center justify-center gap-0.5'>
            <Image
              src='/icons/success-check.svg'
              alt='Success Icon'
              height={64}
              width={64}
              className='size-16'
            />

            <span className='text-lg-extrabold md:text-xl-extrabold tracking-[-0.02em] text-neutral-950 md:tracking-normal'>
              Payment Success
            </span>

            <span className='text-sm-regular md:text-md-regular tracking-[-0.02em] text-neutral-950'>
              Your payment has been successfully processed.
            </span>
          </div>

          <DashedLine
            leftDotClassName='-left-5'
            rightDotClassName='-right-10'
          />

          <div className='flex items-center justify-between'>
            <span className='text-sm-medium md:text-md-medium text-neutral-950 md:tracking-[-0.03em]'>
              Date
            </span>
            <span className='text-sm-semibold md:text-md-bold tracking-[-0.02em] text-neutral-950'>
              {checkout.date}
            </span>
          </div>

          <div className='flex items-center justify-between'>
            <span className='text-sm-medium md:text-md-medium text-neutral-950 md:tracking-[-0.03em]'>
              Payment Method
            </span>
            <span className='text-sm-semibold md:text-md-bold tracking-[-0.02em] text-neutral-950'>
              {checkout.selectedBank}
            </span>
          </div>

          <div className='flex items-center justify-between'>
            <span className='text-sm-medium md:text-md-medium text-neutral-950 md:tracking-[-0.03em]'>
              Price ( {checkout.totalItem} item{checkout.totalItem > 1 && 's'})
            </span>
            <span className='text-sm-semibold md:text-md-bold tracking-[-0.02em] text-neutral-950'>
              Rp{checkout.price.toLocaleString('id-ID')}
            </span>
          </div>

          <div className='flex items-center justify-between'>
            <span className='text-sm-medium md:text-md-medium text-neutral-950 md:tracking-[-0.03em]'>
              Delivery Fee
            </span>
            <span className='text-sm-semibold md:text-md-bold tracking-[-0.02em] text-neutral-950'>
              Rp{checkout.deliveryFee.toLocaleString('id-ID')}
            </span>
          </div>

          <div className='flex items-center justify-between'>
            <span className='text-sm-medium md:text-md-medium text-neutral-950 md:tracking-[-0.03em]'>
              Service Fee
            </span>
            <span className='text-sm-semibold md:text-md-bold tracking-[-0.02em] text-neutral-950'>
              Rp{checkout.serviceFee.toLocaleString('id-ID')}
            </span>
          </div>

          <DashedLine
            leftDotClassName='-left-5'
            rightDotClassName='-right-10'
          />

          <div className='flex items-center justify-between'>
            <span className='text-sm-medium md:text-md-medium tracking-[-0.02em] text-neutral-950 md:tracking-normal'>
              Total
            </span>
            <span className='md:text-md text-sm font-bold text-neutral-950 md:tracking-[-0.02em]'>
              Rp{checkout.totalPrice.toLocaleString('id-ID')}
            </span>
          </div>

          <Link href={'/my-order'}>
            <Button className='h-11 md:h-12'>See My Orders</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
