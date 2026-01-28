import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { DeliveryDetailProps } from '../types/delivery-detail';
import { ChangeAddressOverlay } from '@/components/shared/change-address-overlay';

export const DeliveryDetail: React.FC<DeliveryDetailProps> = ({
  address,
  diplayedPhoneNumber,
}) => {
  return (
    <div className='flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-[0_0_20px_0_#CBCACA40] md:gap-5.25 md:p-5'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-2'>
          <Image
            src='/icons/checkout-location.svg'
            alt='Location Icon'
            height={24}
            width={24}
            className='md:h-8 md:w-8'
          />

          <span className='md:text-lg-extrabold text-md-extrabold text-neutral-950'>
            Delivery Address
          </span>
        </div>

        <span className='text-sm-medium md:text-md-medium text-neutral-950'>
          {address}
        </span>

        <span className='text-sm-medium md:text-md-medium text-neutral-950'>
          {diplayedPhoneNumber}
        </span>
      </div>

      <ChangeAddressOverlay>
        <Button variant='empty' className='h-9 w-30 md:h-10'>
          Change
        </Button>
      </ChangeAddressOverlay>
    </div>
  );
};
