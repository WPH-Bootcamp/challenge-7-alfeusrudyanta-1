'use client';

import { CartItem } from '@/types/api-cart';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useDeleteCart, usePutCart } from '@/hooks/use-cart';
import { useState } from 'react';

export const ItemCartCard: React.FC<CartItem> = ({ menu, id, quantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);

  const putCartItem = usePutCart(id);
  const deleteCartItem = useDeleteCart();

  const isPending = putCartItem.isPending || deleteCartItem.isPending;

  const handlePlusCartItem = () => {
    if (!navigator.onLine) {
      return;
    }

    const originalQuantity = currentQuantity;
    const newQuantity = currentQuantity + 1;

    setCurrentQuantity(newQuantity);

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

    if (newQuantity === 0) {
      deleteCartItem.mutate(id, {
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
    <div key={id} className='flex items-center justify-between'>
      <div className='flex items-center gap-4.25'>
        <div className='flex size-16 items-center justify-center overflow-hidden rounded-xl md:size-20'>
          <Image
            src={menu.image}
            alt={menu.foodName}
            height={64}
            width={64}
            className='size-16 object-cover md:size-20'
          />
        </div>

        <div className='flex flex-col'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            {menu.foodName}
          </span>

          <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
            {menu.price.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

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
    </div>
  );
};
