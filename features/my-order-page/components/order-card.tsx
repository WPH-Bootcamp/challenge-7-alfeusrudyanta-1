'use client';

import { Button } from '@/components/ui/button';
import { Order } from '@/features/my-order-page/types/my-order';
import Image from 'next/image';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { DialogData } from './dialog-data';
import { useState } from 'react';
import Link from 'next/link';

const OrderCard: React.FC<Order> = (order) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <div className='flex w-full flex-col gap-3 rounded-2xl bg-white p-4 shadow-[0_0_20px_#CBCACA40] md:gap-4 md:p-5'>
      {/* Logo */}
      <Link
        href={`/restaurant/${order.restaurants[0].restaurant.id}`}
        className='flex items-center gap-2'
      >
        <div className='flex size-8 items-center justify-center overflow-hidden'>
          <Image
            src={order.restaurants[0].restaurant.logo}
            alt={order.restaurants[0].restaurant.name}
            height={32}
            width={32}
            className='size-8 object-cover'
          />
        </div>

        <span className='text-sm-bold md:text-lg-bold text-neutral-950'>
          {order.restaurants[0].restaurant.name}
        </span>
      </Link>

      {/* Menu */}
      <div className='flex flex-col gap-3 md:gap-5'>
        {order.restaurants[0].items.map((menu) => (
          <div
            key={menu.menuId}
            className='flex items-center gap-3 md:gap-4.25'
          >
            <div className='flex size-16 items-center justify-center overflow-hidden md:size-20'>
              <Image
                src={menu.image}
                alt={menu.menuName}
                height={64}
                width={64}
                className='size-16 rounded-xl object-cover md:size-20'
              />
            </div>

            <div className='flex flex-col'>
              <span className='text-sm-medium md:text-md-medium text-neutral-950'>
                {menu.menuName}
              </span>

              <span className='text-md-extrabold text-neutral-950'>
                {menu.quantity} x {menu.price.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full border border-neutral-300' />

      {/* Total */}
      <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-col'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            Total
          </span>

          <span className='text-md-extrabold md:text-xl-extrabold text-neutral-950'>
            Rp{order.restaurants[0].subtotal.toLocaleString('id-ID')}
          </span>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className='h-11 md:h-12 md:max-w-60'>Give Review</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            <DialogData
              transactionId={order.transactionId}
              restaurantId={order.restaurants[0].restaurant.id}
              menuIds={order.restaurants[0].items.map((menu) => menu.menuId)}
              onClose={() => setIsDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default OrderCard;
