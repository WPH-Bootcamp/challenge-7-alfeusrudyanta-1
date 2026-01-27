import Image from 'next/image';
import { ICON_LIST } from '../constant/icon-data';

const Icon = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-10'>
      <div className='flex flex-col gap-5.5'>
        <div className='flex items-center gap-3.75'>
          <Image
            src='/icons/logo-red.svg'
            alt='Foody Logo'
            loading='lazy'
            height={42}
            width={42}
            className='size-10.5'
          />

          <span className='display-md-extrabold text-white'>Foody</span>
        </div>

        <span className='text-neutral-25 text-sm-regular md:text-md-regular'>
          Enjoy homemade flavors & chef’s signature dishes, freshly prepared
          every day. Order online or visit our nearest branch.
        </span>
      </div>

      {/* Social Media */}
      <div className='flex flex-col gap-5'>
        <span className='text-sm-bold text-neutral-25 md:text-md-extrabold'>
          Follow on Social Media
        </span>

        <div className='flex items-center gap-3'>
          {ICON_LIST.map((icon) => (
            <div
              key={icon.name}
              className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-800'
            >
              <Image
                src={icon.link}
                alt={icon.name}
                loading='lazy'
                height={13}
                width={13}
                className='size-3.25'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Icon };
