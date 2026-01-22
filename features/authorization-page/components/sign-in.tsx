'use client';

import { useState } from 'react';
import { useLogin } from '../hooks/use-login';
import { FloatingLabelInput } from './floating-label-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const { isPending } = useLogin();

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
      <div className='flex items-center gap-2'>
        <Checkbox
          id='rememberMe'
          name='rememberMe'
          checked={rememberMe}
          disabled={isPending}
          onCheckedChange={() => setRememberMe(!rememberMe)}
        />

        <label
          htmlFor='rememberMe'
          className='md:text-md-medium text-sm-medium text-neutral-950'
        >
          Remember Me
        </label>
      </div>

      <Button>Login</Button>
    </div>
  );
};

export { SignIn };
