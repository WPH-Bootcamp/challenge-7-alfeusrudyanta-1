import { Button } from '@/components/ui/button';
import { CartRestaurant } from '@/types/api-cart';
import Link from 'next/link';
import Image from 'next/image';

export const FixedCart: React.FC<CartRestaurant> = ({
  restaurant,
  items,
  subtotal,
}) => {
  const itemList = items
    .map((item) => item.quantity)
    .reduce((current, total) => (total += current), 0);

  return (
    <div className='fixed bottom-0 flex h-16 w-full items-center justify-between bg-white px-4 shadow-[0_0_20px_0_#CBCACA40] md:h-20 md:px-30'>
      <div className='flex flex-col gap-0.5'>
        <div className='flex items-center gap-1 md:gap-2'>
          <Image
            src='/icons/header-bag-black.svg'
            alt='Bag black icon'
            height={20}
            width={20}
            className='size-5 md:size-6'
          />

          <span className='text-sm-regular md:text-md-regular text-neutral-950'>
            {itemList} Item{itemList > 1 && 's'}
          </span>
        </div>
        <span className='text-md-extrabold md:text-xl-extrabold text-neutral-950'>
          Rp{subtotal.toLocaleString('id-ID')}
        </span>
      </div>

      <Link
        href={`/checkout/${restaurant.id}`}
        className='w-full max-w-40 md:max-w-57.5'
      >
        <Button className='h-10 md:h-11'>Checkout</Button>
      </Link>
    </div>
  );
};
