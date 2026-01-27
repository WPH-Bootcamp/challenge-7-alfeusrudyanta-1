'use client';

import { CartCard } from '@/components/shared/cart-card';
import { useDeleteCart, useGetCart } from '@/hooks/use-cart';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useGetProfile } from '@/hooks/use-profie';
import { DeliveryDetail } from './components/delivery-detail';
import { PaymentDetail } from './components/payment-detail';
import { useCheckout } from '@/hooks/use-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddress } from '@/store/slices/address-slice';
import { setCheckout } from '@/store/slices/checkout-slice';
import { Button } from '@/components/ui/button';
import dayjs from 'dayjs';
import { isPending } from '@reduxjs/toolkit';
import { LoadingPage } from '@/components/shared/loading-page';

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const address = useSelector(selectAddress);
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

  const initialLoading =
    (checkout.isPending && !checkout.data) ||
    (profile.isPending && !profile.data);

  const restId = Number(id);
  const cartData = cart.data?.data.cart.find(
    (cartItem) => cartItem.restaurant.id === restId
  );

  const diplayedPhoneNumber =
    profile.data?.data.phone.replace(/(\d{4})(?=\d)/g, '$1-') || '';
  const totalItem =
    cartData?.items.reduce((total, item) => (total += item.quantity), 0) ?? 0;

  const price = cartData?.subtotal ?? 0;
  const deliveryFee = 10000;
  const serviceFee = 1000;
  const totalPrice = price + deliveryFee + serviceFee;

  const itemsData =
    cartData?.items.map((item) => {
      return { menuId: item.menu.id, quantity: item.quantity };
    }) ?? [];

  const handleCheckOut = () => {
    if (totalItem === 0) return;

    dispatch(
      setCheckout({
        selectedBank,
        price,
        deliveryFee,
        serviceFee,
        totalPrice,
        totalItem,
        date: dayjs(Date.now()).format('DD MMMM YYYY, HH:mm'),
      })
    );

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

  const isEmpty = !cartData || !cartData.items || cartData.items.length === 0;

  if (initialLoading) {
    return <LoadingPage />;
  }

  if (isEmpty) {
    return (
      <section className='px-4 pt-20 pb-12 md:px-55 md:pt-32 md:pb-25'>
        <div className='mx-auto flex w-full max-w-120 flex-col items-center gap-3 md:gap-4'>
          <div className='flex w-full flex-col gap-1 md:gap-2'>
            <span className='display-md-extrabold md:display-lg-extrabold text-neutral-950'>
              Error
            </span>

            <span className='text-sm-regular md:text-md-regular text-neutral-950'>
              Add items to proceed to checkout
            </span>
          </div>

          <Button
            className='h-9 md:h-10'
            onClick={() => router.push('/my-cart')}
          >
            View Cart
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div className='px-4 pt-20 pb-12 md:px-55 md:pt-32 md:pb-25'>
      <div className='flex flex-col gap-4 md:gap-6'>
        <span className='display-xs-extrabold md:display-md-extrabold text-neutral-950'>
          Checkout Page
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
          <div className='flex h-fit w-full shrink-0 flex-col gap-4 rounded-2xl bg-white p-4 py-4 shadow-[0_0_20px_0_#CBCACA40] md:w-97.5 md:flex-row md:py-5'>
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
