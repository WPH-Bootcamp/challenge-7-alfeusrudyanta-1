'use client';

import { LoadingSpinner } from '@/components/shared/loading-spinner';
import { Button } from '@/components/ui/button';
import { usePutProfile } from '@/hooks/use-profie';
import { useRef, useState } from 'react';
import Image from 'next/image';

type DialogDataProps = {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  onClose: () => void;
};

export const DialogData: React.FC<DialogDataProps> = ({
  email,
  name,
  phone,
  avatar,
  onClose,
}) => {
  const { mutate, isPending } = usePutProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [currentName, setCurrentName] = useState<string>(name);
  const [currentEmail, setCurrentEmail] = useState<string>(email);
  const [currentPhone, setCurrentPhone] = useState<string>(phone);
  const [avatarPreview, setAvatarPreview] = useState<string>(avatar);
  const [error, setError] = useState<string>('');

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers;
  };

  const handlePutProfile = () => {
    mutate(
      {
        email: currentEmail,
        name: currentName,
        phone: currentPhone,
      },
      {
        onSuccess: () => {
          onClose();
        },
        onError: () => {
          setError('Incorrect data provided');
        },
      }
    );
  };

  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <span className='text-xl-extrabold md:display-xs-extrabold text-neutral-950'>
        Edit Profile
      </span>

      <div className='flex flex-col gap-3 md:gap-4'>
        <div className='relative mx-auto mb-2 overflow-hidden rounded-full'>
          <Image
            src={avatarPreview ?? '/images/user.png'}
            alt={name}
            height={40}
            width={40}
            onClick={() => fileInputRef.current?.click()}
            className='h-18 w-18 object-cover md:h-20 md:w-20'
          />
        </div>

        <label htmlFor='name' className='flex items-center'>
          <span className='text-sm-medium md:text-md-medium min-w-30 text-neutral-950'>
            Name
          </span>

          <input
            id='name'
            type='text'
            placeholder='Name'
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            className='text-sm-bold md:text-md-bold focus:border-primary-100 focus:ring-primary-100/20 w-full rounded-xl border border-neutral-300 px-2 text-neutral-950 focus-within:outline-0 focus:ring-1 focus:outline-none'
          />
        </label>

        <label htmlFor='email' className='flex items-center'>
          <span className='text-sm-medium md:text-md-medium min-w-30 text-neutral-950'>
            Email
          </span>

          <input
            id='email'
            type='text'
            placeholder='Email'
            value={currentEmail}
            onChange={(e) => setCurrentEmail(e.target.value)}
            className='text-sm-bold md:text-md-bold focus:border-primary-100 focus:ring-primary-100/20 w-full rounded-xl border border-neutral-300 px-2 text-neutral-950 focus-within:outline-0 focus:ring-1 focus:outline-none'
          />
        </label>

        <label htmlFor='phone' className='flex items-center'>
          <span className='text-sm-medium md:text-md-medium min-w-30 text-neutral-950'>
            Phone Number
          </span>

          <input
            id='phone'
            type='tel'
            value={currentPhone}
            maxLength={14}
            placeholder='Phone Number'
            onChange={(e) => setCurrentPhone(formatPhoneNumber(e.target.value))}
            className='text-sm-bold md:text-md-bold focus:border-primary-100 focus:ring-primary-100/20 w-full rounded-xl border border-neutral-300 px-2 text-neutral-950 focus-within:outline-0 focus:ring-1 focus:outline-none'
          />
        </label>
      </div>

      {error && (
        <span className='text-sm-regular md:text-md-regular text-primary-100'>
          {error}
        </span>
      )}

      <Button
        onClick={handlePutProfile}
        disabled={isPending}
        className='h-11 md:h-12'
      >
        {isPending ? <LoadingSpinner /> : 'Send'}
      </Button>
    </div>
  );
};
