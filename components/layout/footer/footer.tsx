import { Explore } from './components/explore';
import { Help } from './components/help';
import { Icon } from './components/icon';

const Footer = () => {
  return (
    <div className='w-full border-t border-neutral-300 bg-neutral-950 px-4 py-10 md:px-30 md:py-20'>
      <div className='grid grid-cols-1 items-center gap-x-52.5 md:grid-cols-3 md:items-start'>
        <Icon />

        <div className='hidden md:block'>
          <Explore />
        </div>

        <div className='mt-6 grid w-full grid-cols-2 gap-x-4 md:mt-0 md:grid-cols-1'>
          <div className='md:hidden'>
            <Explore />
          </div>

          <Help />
        </div>
      </div>
    </div>
  );
};

export { Footer };
