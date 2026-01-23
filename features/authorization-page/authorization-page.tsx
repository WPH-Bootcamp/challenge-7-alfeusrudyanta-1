'use client';

import Image from 'next/image';
import { TabsList, TabsTrigger, TabsContent, Tabs } from '@/components/ui/tabs';
import { SignUp } from './components/sign-up';
import { SignIn } from './components/sign-in';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthorizationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<string>('sign-in');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'sign-in' || tab === 'sign-up') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className='flex min-h-screen w-screen'>
      {/* Left */}
      <div className='hidden w-1/2 overflow-hidden md:block'>
        <Image
          src='/images/auth-front.png'
          alt='Auth Food Background'
          loading='lazy'
          height={1024}
          width={720}
          className='size-full scale-125 object-cover object-center'
        />
      </div>

      {/* Right */}
      <div className='my-10 flex w-full items-center justify-center md:w-1/2'>
        <div className='mx-6 flex w-full max-w-93.5 flex-col gap-4 md:gap-5'>
          {/* Logo */}
          <div className='flex items-center gap-3 md:gap-3.75'>
            <Image
              src='/icons/logo-red.svg'
              alt='Food Logo'
              loading='lazy'
              height={32}
              width={32}
              className='size-10.5'
            />

            <span className='display-xs-extrabold md:display-md-extrabold text-neutral-950'>
              Foody
            </span>
          </div>

          {/* Welcome */}
          <div className='flex flex-col md:gap-1'>
            <span className='display-xs-extrabold md:display-sm-extrabold text-neutral-950'>
              Welcome Back
            </span>
            <span className='md:text-md-medium text-sm-medium text-neutral-950'>
              Good to see you again! Let’s eat
            </span>
          </div>

          {/* Tabs */}
          <Tabs
            defaultValue='sign-in'
            value={activeTab}
            onValueChange={handleTabChange}
          >
            <TabsList>
              <TabsTrigger value='sign-in'>Sign In</TabsTrigger>
              <TabsTrigger value='sign-up'>Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value='sign-in'>
              <SignIn />
            </TabsContent>
            <TabsContent value='sign-up'>
              <SignUp />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { AuthorizationPage };
