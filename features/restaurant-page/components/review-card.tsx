import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Review } from '../types/review';

export const ReviewCard: React.FC<Review> = ({
  user,
  star,
  createdAt,
  comment,
}) => {
  return (
    <div className='flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-[0_0_20px_0_#CBCACA40]'>
      {/* Profile */}
      <div className='flex items-center gap-3'>
        <Image
          src={user.avatar ?? '/images/user.png'}
          alt={user.name}
          height={58}
          width={58}
          className='size-14.5 rounded-full object-cover md:size-16'
        />

        <div className='flex flex-col'>
          <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
            {user.name}
          </span>

          <span className='md:text-md-regular text-sm-regular text-neutral-950'>
            {dayjs(createdAt).format('DD MMMM YYYY, HH:mm')}
          </span>
        </div>
      </div>

      {/* Review */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center'>
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className={cn(
                'fill-neutral-400 stroke-0',
                index + 1 <= star && 'fill-[#FFAB0D]'
              )}
            />
          ))}
        </div>

        <span className='md:text-md-regular text-sm-regular text-neutral-950'>
          {comment}
        </span>
      </div>
    </div>
  );
};
