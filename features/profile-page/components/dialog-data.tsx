'use client';

import { LoadingSpinner } from '@/components/shared/loading-spinner';
import { Button } from '@/components/ui/button';
import { usePutProfile } from '@/hooks/use-profie';
import { useRef, useState } from 'react';
import Image from 'next/image';

type DialogDataProps = {
  originalEmail: string;
  originalName: string;
  originalPhone: string;
  originalAvatar: string;
  onClose: () => void;
};

export const DialogData: React.FC<DialogDataProps> = ({
  originalEmail,
  originalName,
  originalPhone,
  originalAvatar,
  onClose,
}) => {
  const { mutate, isPending } = usePutProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>(originalName);
  const [email, setEmail] = useState<string>(originalEmail);
  const [phone, setPhone] = useState<string>(originalPhone);
  const [avatar, setAvatar] = useState<File | undefined>(undefined);
  const [avatarPreview, setAvatarPreview] = useState<string>(originalAvatar);
  const [error, setError] = useState<string>('');

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    setAvatar(file);
    setError('');

    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);
  };

  const handlePutProfile = () => {
    const data = {
      email,
      name,
      phone,
      avatar,
    };

    mutate(data, {
      onSuccess: () => {
        onClose();
      },
      onError: () => {
        setError('Incorrect data provided');
      },
    });
  };

  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <span className='text-xl-extrabold md:display-xs-extrabold text-neutral-950'>
        Edit Profile
      </span>

      <div className='flex flex-col gap-3 md:gap-4'>
        <div className='relative mx-auto mb-2 cursor-pointer overflow-hidden rounded-full'>
          <Image
            src={avatarPreview ?? '/images/user.png'}
            alt={originalName}
            height={40}
            width={40}
            onClick={() => fileInputRef.current?.click()}
            className='h-18 w-18 object-cover md:h-20 md:w-20'
          />

          <input
            type='file'
            ref={fileInputRef}
            onChange={handleFileChange}
            accept='image/*'
            id='avatar-upload'
            className='hidden'
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={phone}
            maxLength={14}
            placeholder='Phone Number'
            onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
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
