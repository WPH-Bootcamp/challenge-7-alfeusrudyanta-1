'use client';

import { CartCard } from '@/components/shared/cart-card';
import { Button } from '@/components/ui/button';
import { useDeleteCart, useGetCart } from '@/hooks/use-cart';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useGetProfile } from '@/hooks/use-profie';
import { DeliveryDetail } from './components/delivery-detail';
import { PaymentDetail } from './components/payment-detail';
import { useCheckout } from '@/hooks/use-checkout';

export const CheckoutPage = () => {
  const router = useRouter();
  const { id } = useParams();

  /* Query */
  const cart = useGetCart();
  const profile = useGetProfile();

  /* Mutation */
  const checkout = useCheckout();
  const deleteCart = useDeleteCart();

  const [selectedBank, setSelectedBank] = useState<string>(
    'Bank Negara Indonesia'
  );
  const [address] = useState<string>(
    'Jl. Sudirman No. 25, Jakarta Pusat, 10220'
  );

  const restId = Number(id);
  const cartData = cart.data?.data.cart.find(
    (cartItem) => cartItem.restaurant.id === restId
  );

  const diplayedPhoneNumber =
    profile.data?.data.phone.replace(/(\d{4})(?=\d)/g, '$1-') || '';
  const totalItem = cart.data?.data.summary.totalItems ?? 0;

  const price = cart.data?.data.summary.totalPrice ?? 0;
  const deliveryFee = 10000;
  const serviceFee = 1000;
  const totalPrice = price + deliveryFee + serviceFee;

  const itemsData =
    cartData?.items.map((item) => {
      return { menuId: item.menu.id, quantity: item.quantity };
    }) ?? [];

  const handleCheckOut = () => {
    if (totalItem === 0) return;

    const data = {
      restaurants: [
        {
          restaurantId: cartData?.restaurant.id ?? 0,
          items: itemsData,
        },
      ],
      deliveryAddress: address,
      phone: diplayedPhoneNumber,
      paymentMethod: selectedBank,
      notes: 'Please ring the doorbell',
    };

    checkout.mutate(data, {
      onSuccess: () => {
        cartData?.items.forEach((item) => deleteCart.mutate(item.id));
        router.push('/success');
      },
    });
  };

  if (cartData === undefined) {
    return null;
  }

  return (
    <div className='px-4 pt-20 pb-12 md:px-55 md:pt-32 md:pb-25'>
      <div className='flex flex-col gap-4 md:gap-6'>
        <span className='display-xs-extrabold md:display-md-extrabold text-neutral-950'>
          CheckoutPage
        </span>

        <div className='flex h-fit flex-col gap-4 md:flex-row md:gap-5'>
          {/* Left */}
          <div className='flex w-full flex-col gap-4 md:gap-5'>
            <DeliveryDetail
              address={address}
              diplayedPhoneNumber={diplayedPhoneNumber}
            />

            <CartCard {...cartData} onCart={false} />
          </div>

          {/* Right */}
          <div className='flex h-fit w-full shrink-0 flex-col gap-4 rounded-2xl bg-white p-4 py-4 shadow-[0_0_20px_#CBCACA40] md:w-97.5 md:flex-row md:py-5'>
            <PaymentDetail
              totalItem={totalItem}
              price={price}
              deliveryFee={deliveryFee}
              serviceFee={serviceFee}
              totalPrice={totalPrice}
              selectedBank={selectedBank}
              setSelectedBank={setSelectedBank}
              handleCheckout={handleCheckOut}
              isPending={deleteCart.isPending}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
