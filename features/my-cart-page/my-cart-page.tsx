'use client';

import { CartCardWithAction } from '@/components/shared/cart-card-with-action';
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
          {data?.data.cart.map((restaurant) => (
            <CartCardWithAction
              key={restaurant.restaurant.id}
              {...restaurant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { MyCartPage };
