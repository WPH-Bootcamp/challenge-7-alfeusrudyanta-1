import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BANK_DATA } from '../constant/bank-data';
import { PaymentDetailProps } from '../types/payment-detail';
import { DashedLine } from '@/components/shared/dashed-line';

export const PaymentDetail: React.FC<PaymentDetailProps> = ({
  totalItem,
  price,
  deliveryFee,
  serviceFee,
  totalPrice,
  selectedBank,
  setSelectedBank,
  handleCheckout,
  isPending,
}) => {
  return (
    <div className='flex w-full flex-col gap-3 md:gap-4'>
      <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
        Payment Method
      </span>

      {BANK_DATA.map((bank, index) => (
        <div
          key={bank.value}
          className='flex flex-col items-center gap-3 md:gap-4'
        >
          <label
            htmlFor={`${bank.value}`}
            className='flex w-full cursor-pointer items-center justify-between'
          >
            {/* Bank Logo */}
            <div className='flex items-center gap-2'>
              <div className='flex size-10 items-center justify-center rounded-xs border border-neutral-300'>
                <Image
                  src={bank.image}
                  alt={bank.value}
                  height={8}
                  width={28}
                  className='h-2 w-7 object-cover'
                />
              </div>

              <span className='text-sm-regular md:text-md-regular text-neutral-950'>
                {bank.display}
              </span>
            </div>

            <input
              id={`${bank.value}`}
              type='radio'
              name={`${bank.value}`}
              value={bank.display}
              checked={selectedBank === bank.display}
              onChange={(e) => setSelectedBank(e.target.value)}
              className='accent-primary-100 h-6 w-6 cursor-pointer'
            />
          </label>

          {/* Line */}
          {index + 1 < BANK_DATA.length && (
            <div className='w-full border border-neutral-200' />
          )}
        </div>
      ))}

      <DashedLine />

      <div className='flex flex-col gap-3 md:gap-4'>
        <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
          Payment Summary
        </span>

        <div className='flex items-center justify-between gap-4'>
          <span className='md:text-md-medium text-sm-medium text-neutral-950'>
            Price ({totalItem} item{totalItem > 1 && 's'})
          </span>
          <span className='md:text-md-bold text-sm-bold text-neutral-950'>
            Rp{price.toLocaleString('id-ID')}
          </span>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <span className='md:text-md-medium text-sm-medium text-neutral-950'>
            Delivery Fee
          </span>
          <span className='md:text-md-bold text-sm-bold text-neutral-950'>
            Rp{deliveryFee.toLocaleString('id-ID')}
          </span>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <span className='md:text-md-medium text-sm-medium text-neutral-950'>
            Service Fee
          </span>
          <span className='md:text-md-bold text-sm-bold text-neutral-950'>
            Rp{serviceFee.toLocaleString('id-ID')}
          </span>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <span className='md:text-md-medium text-sm-medium text-neutral-950'>
            Total
          </span>
          <span className='md:text-lg-extrabold text-md-extrabold text-neutral-950'>
            Rp{totalPrice.toLocaleString('id-ID')}
          </span>
        </div>

        <Button
          disabled={isPending}
          onClick={handleCheckout}
          type='button'
          className='h-11 md:h-12'
        >
          Buy
        </Button>
      </div>
    </div>
  );
};
