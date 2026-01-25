'use client';

import { CartRestaurant } from '@/types/api-cart';
import { ChevronRight, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

type CartCardWithActionProps = CartRestaurant & {
  onCart?: boolean;
};

const CartCardWithAction: React.FC<CartCardWithActionProps> = ({
  onCart = true,
  restaurant,
  items,
  subtotal,
}) => {
  const router = useRouter();

  return (
    <div className='rounded-2xl bg-white p-4 shadow-[0_0_20px_#CBCACA40] md:p-5'>
      <div className='flex flex-col gap-3 md:gap-5'>
        {/* Restaurant Name */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1 md:gap-2'>
            <Image
              src={restaurant.logo}
              alt={restaurant.name}
              height={32}
              width={32}
              loading='lazy'
            />

            <span className='text-md-bold md:text-lg-bold text-neutral-950'>
              {restaurant.name}
            </span>

            <ChevronRight className='size-5 text-neutral-950 md:size-6' />
          </div>

          {/* add more button here */}
          {!onCart}
        </div>

        {/* Restaurant Menu */}
        <div className='flex flex-col gap-3 md:gap-5'>
          {items.map((menu) => (
            <div key={menu.id} className='flex items-center justify-between'>
              <div className='flex items-center gap-4.25'>
                <Image
                  src={menu.menu.image}
                  alt={menu.menu.foodName}
                  height={64}
                  width={64}
                  className='rounded-xl md:size-20'
                />

                <div className='flex flex-col'>
                  <span className='text-sm-medium md:text-md-medium text-neutral-950'>
                    {menu.menu.foodName}
                  </span>

                  <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
                    {menu.itemTotal.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <Button variant='empty' size='rounded'>
                  <Minus className='size-5 md:size-6' />
                </Button>

                <span className='md:text-lg-semibold text-md-semibold text-neutral-950'>
                  {menu.quantity}
                </span>

                <Button size='rounded'>
                  <Plus className='size-5 text-white md:size-6' />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        {onCart && (
          <div className='flex flex-col gap-3 md:gap-5'>
            {/* Divider */}
            <div className='w-full border border-neutral-300' />

            <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-col'>
                <span className='text-sm-medium md:text-md-medium text-neutral-950'>
                  Total
                </span>

                <span className='text-lg-extrabold md:text-xl-extrabold text-neutral-950'>
                  Rp{subtotal.toLocaleString('id-ID')}
                </span>
              </div>

              <Button className='h-11 md:h-12 md:max-w-60'>Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { CartCardWithAction };
