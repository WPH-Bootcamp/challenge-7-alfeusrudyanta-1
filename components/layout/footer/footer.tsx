import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full border-t border-neutral-300 bg-neutral-950 px-4 py-10 md:px-30 md:py-20'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        {/* Detail */}
        <div className='flex flex-col gap-[22px]'>
          <div className='flex items-center gap-4'>
            <img src='/icon/logo.svg' alt='logo' height={42} width={42} />
            <span className='text-display-md font-extrabold text-white'>
              Foody
            </span>
          </div>

          <span className='font-regular md:text-md text-neutral-25 text-sm'>
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </span>
        </div>

        {/* Social Media */}
        <div className='flex flex-col gap-5'>
          <span className='md:text-md text-neutral-25 text-sm font-bold'>
            Follow on Social Media
          </span>

          <div className='flex items-center gap-3'>
            {/* {iconList.map((icon) => (
                <div
                  key={'Icon' + icon.name}
                  className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800'
                >
                  <img src={icon.link} alt={icon.name} />
                </div>
              ))} */}
          </div>
        </div>
      </div>

      <div className='flex w-full justify-between gap-4 md:ml-16 md:gap-10'>
        {/* Explore */}
        <div className='flex flex-col gap-4 md:gap-5'>
          <span className='md:text-md text-neutral-25 text-sm font-extrabold'>
            Explore
          </span>
          <div className='flex flex-col gap-4 md:gap-5'>
            {/* {exploreList.map((value) => (
                <Link href='/category'>
                  <span
                    key={value.display}
                    className='font-regular md:text-md text-neutral-25 hover:text-primary-100 text-sm'
                  >
                    {value.display}
                  </span>
                </Link>
              ))} */}
          </div>
        </div>

        {/* Help */}
        <div className='flex flex-col gap-4 md:gap-5'>
          <span className='md:text-md text-neutral-25 text-sm font-extrabold'>
            Help
          </span>
          <div className='flex flex-col gap-4 md:gap-5'>
            {/* {helpList.map((value) => (
                <span
                  key={value}
                  className='font-regular md:text-md text-neutral-25 hover:text-primary-100 text-sm'
                >
                  {value}
                </span>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
