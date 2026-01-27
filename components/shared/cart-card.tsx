import { CartRestaurant } from '@/types/api-cart';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { usePutCart } from '@/hooks/use-cart';
import { ItemCartCard } from './item-cart-card';
import { cn } from '@/lib/utils';

type CartCardProps = CartRestaurant & {
  onCart?: boolean;
  className?: string;
};

const CartCard: React.FC<CartCardProps> = ({
  onCart = true,
  restaurant,
  items,
  subtotal,
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-4 shadow-[0_0_20px_#CBCACA40] md:p-5',
        className
      )}
    >
      <div className='flex flex-col gap-3 md:gap-5'>
        {/* Restaurant Name */}
        <div className='flex items-center justify-between'>
          <Link href={`/restaurant/${restaurant.id}`}>
            <div className='flex items-center gap-1 overflow-hidden md:gap-2'>
              <Image
                src={restaurant.logo}
                alt={restaurant.name}
                height={32}
                width={32}
                loading='lazy'
                className='size-8 object-cover'
              />

              <span className='text-md-bold md:text-lg-bold text-neutral-950'>
                {restaurant.name}
              </span>

              <ChevronRight className='size-5 text-neutral-950 md:size-6' />
            </div>
          </Link>

          {/* add more button here */}
          {!onCart && (
            <Link href={`/restaurant/${restaurant.id}`}>
              <Button
                type='button'
                variant='empty'
                size='empty'
                className='h-9 px-6 md:h-10 md:px-6.75'
              >
                Add item
              </Button>
            </Link>
          )}
        </div>

        {/* Restaurant Menu */}
        <div className='flex flex-col gap-3 md:gap-5'>
          {items.map((menu) => (
            <ItemCartCard key={menu.id} {...menu} />
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

              <Link
                href={`/checkout/${restaurant.id}`}
                className='w-full md:max-w-60'
              >
                <Button type='button' className='h-11 md:h-12 md:max-w-60'>
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { CartCard };
