'use client';

import Image from 'next/image';
import { MenuItem } from '../types/rest';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import {
  usePutCart,
  useDeleteCart,
  usePostCart,
  useGetCart,
} from '@/hooks/use-cart';
import { useState } from 'react';

type MenuCartProps = MenuItem & {
  restaurantId: number;
};

export const MenuCart: React.FC<MenuCartProps> = ({
  foodName,
  id,
  image,
  price,
  restaurantId,
}) => {
  const { data } = useGetCart();

  const restaurant = data?.data.cart.find(
    (restaurant) => restaurant.restaurant.id === restaurantId
  );
  const itemData = restaurant?.items.find((item) => item.menu.id === id);

  const [currentQuantity, setCurrentQuantity] = useState<number>(
    itemData?.quantity ?? 0
  );

  const postCartItem = usePostCart();
  const putCartItem = usePutCart(itemData?.id ?? 0);
  const deleteCartItem = useDeleteCart();

  const isPending = putCartItem.isPending || deleteCartItem.isPending;

  const handlePlusCartItem = () => {
    if (!navigator.onLine) {
      return;
    }

    const originalQuantity = currentQuantity;
    const newQuantity = currentQuantity + 1;

    setCurrentQuantity(newQuantity);

    if (originalQuantity === 0) {
      postCartItem.mutate(
        {
          menuId: id,
          quantity: newQuantity,
          restaurantId,
        },
        {
          onError: () => {
            setCurrentQuantity(originalQuantity);
          },
        }
      );
      return;
    }

    putCartItem.mutate(
      { quantity: newQuantity },
      {
        onError: () => {
          setCurrentQuantity(originalQuantity);
        },
      }
    );
  };

  const handleMinusCartItem = () => {
    if (!navigator.onLine) {
      return;
    }

    const originalQuantity = currentQuantity;
    const newQuantity = currentQuantity - 1;

    setCurrentQuantity(newQuantity);

    if (newQuantity === 0 && itemData?.id) {
      deleteCartItem.mutate(itemData.id, {
        onError: () => {
          setCurrentQuantity(originalQuantity);
        },
      });
      return;
    }

    putCartItem.mutate(
      { quantity: newQuantity },
      {
        onError: () => {
          setCurrentQuantity(originalQuantity);
        },
      }
    );
  };

  return (
    <div className='flex flex-col justify-between overflow-hidden rounded-2xl shadow-[0_0_20px_0_#CBCACA40]'>
      <div className='h-43.25 w-full md:h-71.25'>
        <Image
          src={image}
          alt={foodName}
          height={172.5}
          width={172.5}
          loading='lazy'
          className='size-full object-cover object-center'
        />
      </div>

      <div className='flex flex-col gap-4 p-3 md:flex-row md:items-center md:justify-between md:p-4'>
        <div className='flex flex-col'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            {foodName}
          </span>

          <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
            Rp{price.toLocaleString('id-ID')}
          </span>
        </div>

        {currentQuantity === 0 ? (
          <Button
            size='empty'
            disabled={isPending}
            onClick={handlePlusCartItem}
            className='h-9 w-full px-6 md:h-10 md:w-19.75'
          >
            Add
          </Button>
        ) : (
          <div className='flex items-center gap-4'>
            <Button
              variant='empty'
              size='rounded'
              type='button'
              disabled={isPending}
              onClick={handleMinusCartItem}
            >
              <Minus className='size-5 md:size-6' />
            </Button>

            <span className='md:text-lg-semibold text-md-semibold text-neutral-950'>
              {currentQuantity}
            </span>

            <Button
              size='rounded'
              type='button'
              disabled={isPending}
              onClick={handlePlusCartItem}
            >
              <Plus className='size-5 text-white md:size-6' />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
