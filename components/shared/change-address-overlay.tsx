import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { selectAddress, setAddress } from '@/store/slices/address-slice';
import { useDispatch, useSelector } from 'react-redux';

type ChangeAddressOverlayProps = {
  children: React.ReactNode;
};

export const ChangeAddressOverlay: React.FC<ChangeAddressOverlayProps> = ({
  children,
}) => {
  const address = useSelector(selectAddress);
  const dispatch = useDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [currentAddress, setCurrentAddress] = useState<string>(address);
  const [error, setError] = useState<string>('');

  const handleAddress = () => {
    if (!currentAddress.trim()) {
      return setError('Address must be filled to delivery');
    }

    dispatch(setAddress({ address: currentAddress }));
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
        <div className='flex flex-col gap-4 md:gap-6'>
          <span className='text-xl-extrabold md:display-xs-extrabold text-neutral-950'>
            Change Address
          </span>

          <div className='flex flex-col gap-3 md:gap-4'>
            <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
              Address
            </span>

            <textarea
              name='address'
              id='address'
              placeholder='Please tell us your delivery location!'
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
              className='text-sm-regular md:text-md-regular min-h-58.75 gap-2 rounded-xl border border-neutral-300 px-3 py-2'
            />
          </div>

          {error && (
            <span className='text-sm-regular md:text-md-regular text-primary-100'>
              {error}
            </span>
          )}

          <Button onClick={handleAddress} className='h-11 md:h-12'>
            Change
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
