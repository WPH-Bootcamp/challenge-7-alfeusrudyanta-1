import Link from 'next/link';
import { EXPLORE_LIST } from '../constant/explore-data';

const Explore = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-5'>
      <span className='text-sm-extrabold text-neutral-25 md:text-md-extrabold'>
        Explore
      </span>

      <div className='flex flex-col gap-4 md:gap-5'>
        {EXPLORE_LIST.map((value) => (
          <Link
            href='/category'
            key={value}
            className='text-neutral-25 hover:text-primary-100 md:text-md-regular text-sm-regular'
          >
            <span>{value}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Explore };
