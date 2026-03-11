import { LoadingSpinner } from './loading-spinner';

export const LoadingPage = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-4 px-4 md:gap-5'>
      <LoadingSpinner className='border-primary-100 size-8 border-2 border-t-0 md:size-10' />

      <span className='md:text-md-regular text-sm-regular text-neutral-600'>
        Please wait while we load your content...
      </span>
    </section>
  );
};
