'use client';

import { useEffect, useState } from 'react';
import { useLogin } from '../hooks/use-login';
import { FloatingLabelInput } from './floating-label-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { loginSchema } from '../schema/login-schema';
import Cookie from 'js-cookie';
import type { LoginFormErrors } from '@/features/authorization-page/types';
import { LoadingSpinner } from '@/components/shared/loading-spinner';

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<LoginFormErrors>({});

  const { mutate, isPending } = useLogin();

  useEffect(() => {
    const savedEmail = Cookie.get('email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    /* Error Handling */
    setError({});

    const result = loginSchema.safeParse({
      email,
      password,
    });

    if (!result.success) {
      const newError: LoginFormErrors = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof LoginFormErrors;
        newError[field] = err.message;
      });

      setError(newError);
      return;
    }

    /* Remember Me */
    if (rememberMe) {
      Cookie.set('email', email, { sameSite: 'Strict', expires: 7, path: '/' });
    } else {
      Cookie.remove('email', { path: '/' });
    }

    /* Mutate */
    mutate(result.data, {
      onSuccess: () => {
        router.push('/');
      },
      onError: () => {
        setError({ general: 'Invalid email or password' });
      },
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error.email) {
      setError((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error.password) {
      setError((prev) => ({ ...prev, password: undefined }));
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className='flex flex-col gap-4 focus-within:ring-0 focus-within:outline-none md:gap-5'
    >
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
        label='Password'
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        disabled={isPending}
        error={error.password}
        onChange={handlePasswordChange}
      />

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

      {error.general && (
        <span className='text-sm-semibold text-primary-100'>
          {error.general}
        </span>
      )}

      <Button type='submit' disabled={isPending}>
        {isPending ? <LoadingSpinner /> : 'Login'}
      </Button>
    </form>
  );
};

export { SignIn };
