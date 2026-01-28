'use client';

import { Button } from '@/components/ui/button';
import { usePutProfile } from '@/hooks/use-profie';
import { Profile } from '@/types/api-profile';
import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { DialogData } from './dialog-data';

const ProfileData: React.FC<Profile> = ({ name, email, phone, avatar }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const { mutate } = usePutProfile();

  return (
    <div className='flex w-full max-w-131 flex-col gap-6 rounded-2xl bg-white p-4 shadow-[0_0_20px_0_#CBCACA40] md:p-5'>
      {/* Profile data */}
      <div className='flex flex-col gap-2 md:gap-3'>
        <div className='flex items-center justify-between'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            Name
          </span>

          <span className='text-sm-bold md:text-md-bold text-neutral-950'>
            {name}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            Email
          </span>

          <span className='text-sm-bold md:text-md-bold text-neutral-950'>
            {email}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-sm-medium md:text-md-medium text-neutral-950'>
            Phone Number
          </span>

          <span className='text-sm-bold md:text-md-bold text-neutral-950'>
            {phone}
          </span>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className='h-11'>Update Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <DialogData
            originalEmail={email}
            originalName={name}
            originalPhone={phone}
            originalAvatar={avatar}
            onClose={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { ProfileData };
