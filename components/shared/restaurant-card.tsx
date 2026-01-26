import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Dot, Star } from 'lucide-react';
import Link from 'next/link';
import { Restaurant } from '@/features/category-page/types/category';

type RestaurantCardProps = Restaurant & {
  showOutline?: boolean;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  showOutline = true,
  id,
  logo,
  name,
  star,
  place,
}) => {
  return (
    <Link
      href={`/restaurant/${id}`}
      className={cn(
        showOutline &&
          'gap-2 rounded-2xl p-4 shadow-[0_0_20px_#CBCACA40] md:gap-3',
        'flex items-center gap-2 overflow-hidden bg-white md:gap-3'
      )}
    >
      <Image
        src={logo}
        alt={name}
        height={120}
        width={120}
        className={cn(
          'object-cover',
          showOutline ? 'rounded-xl' : 'rounded-full'
        )}
      />

      {/* Restaurant Details */}
      <div className='flex flex-col gap-0.5'>
        <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
          {name}
        </span>

        <div className='flex items-center'>
          <Star size={24} className='fill-[#FFAB0D] stroke-0' />
          <span>{star.toFixed(1)}</span>
        </div>

        <div className='text-sm-regular md:text-md-regular flex items-center text-neutral-950'>
          <span>{place}</span>
          <Dot />
          <span>2.4 km</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
