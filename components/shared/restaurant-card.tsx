import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Dot, Star } from 'lucide-react';
import Link from 'next/link';

type RestaurantCardProps = {
  showOutline?: boolean;
  id: number;
  logo: string;
  name: string;
  star: number;
  place: string;
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
        'flex items-center gap-2 md:gap-3'
      )}
    >
      <Image
        src={logo}
        alt={name}
        height={120}
        width={120}
        className={cn(showOutline ? 'rounded-xl' : 'rounded-full')}
      />

      {/* Restaurant Details */}
      <div className='flex flex-col gap-0.5'>
        <span className='text-md-extrabold md:text-lg-extrabold text-neutral-950'>
          {name}
        </span>

        <div className='flex items-center'>
          <Star size={24} fill='#FFAB0D' className='stroke-0' />
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
