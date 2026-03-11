'use client';

import { CartCard } from '@/components/shared/cart-card';
import { LoadingPage } from '@/components/shared/loading-page';
import { useGetCart } from '@/hooks/use-cart';

const MyCartPage = () => {
  const { data, isPending } = useGetCart();

  const initialLoading = isPending && !data;

  if (initialLoading) {
    return <LoadingPage />;
  }

  return (
    <section className='bg-neutral-25 px-4 pt-20 pb-10 md:px-80 md:pt-32 md:pb-25'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <span className='display-xs-extrabold md:display-md-extrabold text-neutral-950'>
          My Cart
        </span>

        {/* Cart Item(s) */}
        <div className='flex flex-col gap-5'>
          {data?.data.cart.length === 0 && (
            <div className='flex flex-col gap-1 md:max-w-175 md:gap-2'>
              <span className='text-md-bold md:text-lg-bold text-neutral-950'>
                Your cart is empty
              </span>

              <span className='text-sm-regular md:text-md-regular text-neutral-500'>
                Looks like you haven't added any items to your cart yet. Start
                exploring our restaurants and add delicious food to your cart!
              </span>
            </div>
          )}

          {data?.data.cart.map((restaurant) => (
            <CartCard key={restaurant.restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { MyCartPage };
