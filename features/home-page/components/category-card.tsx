import React from 'react';
import { CategoryCardProps } from '../constant/category-card';
import Link from 'next/link';
import Image from 'next/image';

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image }) => {
  return (
    <div className='mx-auto w-full max-w-41.25 md:gap-1.5'>
      <Link href={'/category'} className='flex flex-col items-center'>
        <div className='h-25 w-full rounded-2xl bg-white p-2 shadow-[0_0_20px_0_#CBCACA40]'>
          <Image
            src={image}
            alt={name}
            loading='lazy'
            height={65}
            width={65}
            className='mx-auto size-12 md:size-16.25'
          />
        </div>
        <p className='text-sm-bold md:text-lg-bold text-center text-neutral-950'>
          {name}
        </p>
      </Link>
    </div>
  );
};

export { CategoryCard };
