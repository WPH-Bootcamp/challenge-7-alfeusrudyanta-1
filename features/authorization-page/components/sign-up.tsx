'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@radix-ui/react-checkbox';
import { error } from 'console';
import { email } from 'zod';
import { FloatingLabelInput } from './floating-label-input';
import { useState } from 'react';
import { useRegister } from '../hooks/use-register';
import type { RegisterFormErrors } from '@/features/authorization-page/types';
import { registerSchema } from '../schema/register-schema';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<RegisterFormErrors>({});

  const { mutate, isPending } = useRegister();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    /* Error Handling */
    setError({});

    if (password !== confirmPassword) {
      setError((prev) => ({ ...prev, general: 'Password must match' }));
      return;
    }

    const result = registerSchema.safeParse({
      name,
      email,
      phone,
      password,
    });

    if (!result.success) {
      const newError: RegisterFormErrors = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof RegisterFormErrors;
        newError[field] = err.message;
      });

      setError(newError);
      return;
    }

    mutate(result.data, {
      onSuccess: () => {
        router.push('/authorization?tab=sign-in');
      },
      onError: () => {
        setError({ general: 'User with this email or phone already exists' });
      },
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (error.name) {
      setError((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error.email) {
      setError((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (error.phone) {
      setError((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error.password) {
      setError((prev) => ({ ...prev, password: undefined }));
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    if (error.password) {
      setError((prev) => ({ ...prev, password: undefined }));
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className='flex flex-col gap-4 focus-within:ring-0 focus-within:outline-none md:gap-5'
    >
      <FloatingLabelInput
        label='Name'
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        disabled={isPending}
        error={error.name}
        onChange={handleNameChange}
      />

      <FloatingLabelInput
        label='Email'
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        disabled={isPending}
        error={error.email}
        onChange={handleEmailChange}
      />

      <FloatingLabelInput
        label='Phone'
        type='tel'
        placeholder='Phone'
        name='phone'
        value={phone}
        disabled={isPending}
        error={error.phone}
        onChange={handlePhoneChange}
      />

      <FloatingLabelInput
        label='Password'
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        disabled={isPending}
        error={error.password}
        onChange={handlePasswordChange}
      />

      <FloatingLabelInput
        label='Confirm Password'
        type='password'
        placeholder='Confirm Password'
        name='confirmPassword'
        value={confirmPassword}
        disabled={isPending}
        error={error.password}
        onChange={handleConfirmPasswordChange}
      />

      {error.general && (
        <span className='text-sm-semibold text-primary-100'>
          {error.general}
        </span>
      )}

      <Button type='submit' disabled={isPending}>
        {isPending ? (
          <div className='h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
        ) : (
          'Register'
        )}
      </Button>
    </form>
  );
};

export { SignUp };
