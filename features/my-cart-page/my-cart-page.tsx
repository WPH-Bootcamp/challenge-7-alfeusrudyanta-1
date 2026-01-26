'use client';

import { CartCard } from '@/components/shared/cart-card';
import { useGetCart } from '@/hooks/use-cart';

const MyCartPage = () => {
  const { data } = useGetCart();

  return (
    <section className='px-4 pt-20 pb-10 md:px-80 md:pt-32 md:pb-25'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <span className='display-xs-extrabold md:display-md-extrabold text-neutral-950'>
          My Cart
        </span>

        {/* Cart Item(s) */}
        <div className='flex flex-col gap-5'>
          {data?.data.cart.length === 0 && (
            <div className='flex flex-col gap-3 md:max-w-175'>
              <span className='md:text-lg-extrabold text-md-extrabold text-neutral-950'>
                Your cart is empty
              </span>

              <span className='md:text-md-medium text-sm-medium text-neutral-950'>
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
