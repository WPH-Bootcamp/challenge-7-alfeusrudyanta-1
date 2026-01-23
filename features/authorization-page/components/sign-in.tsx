'use client';

import { useEffect, useState } from 'react';
import { useLogin } from '../hooks/use-login';
import { FloatingLabelInput } from './floating-label-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const { mutate, isPending } = useLogin();

  const handleLogin = () => {
    const data = {
      email,
      password,
    };

    mutate(data, {
      onSuccess: () => {
        router.push('/');
      },
      onError: () => {
        setError('Invalid email or password');
      },
    });
  };

  return (
    <div className='flex flex-col gap-4 md:gap-5'>
      <FloatingLabelInput
        label='Email'
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        disabled={isPending}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FloatingLabelInput
        label='Password'
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        disabled={isPending}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Remember Me */}
      <label
        htmlFor='rememberMe'
        className='md:text-md-medium text-sm-medium flex cursor-pointer items-center gap-2 text-neutral-950'
      >
        <Checkbox
          id='rememberMe'
          name='rememberMe'
          checked={rememberMe}
          disabled={isPending}
          onCheckedChange={(checked) => setRememberMe(checked === true)}
        />
        Remember Me
      </label>

      <span className='text-sm-semibold text-primary-100'>{error}</span>

      <Button onClick={handleLogin} disabled={isPending}>
        Login
      </Button>
    </div>
  );
};

export { SignIn };
