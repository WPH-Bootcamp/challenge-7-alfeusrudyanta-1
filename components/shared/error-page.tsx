'use client';

import { Button } from '@/components/ui/button';

export const ErrorPage = () => {
  return (
    <section className='mx-auto flex min-h-screen max-w-120 flex-col items-center justify-center gap-4 p-4 md:gap-5'>
      <div className='flex w-full flex-col gap-2 md:gap-3'>
        <span className='display-md-extrabold md:display-lg-extrabold text-neutral-950'>
          Error
        </span>

        <span className='md:text-md-regular text-sm-regular text-neutral-950'>
          An unexpected error occurred. Please try again
        </span>
      </div>

      <Button className='h-9 md:h-10' onClick={() => window.location.reload()}>
        Refresh Page
      </Button>
    </section>
  );
};
