import { HELP_LIST } from '../constant/help-data';

const Help = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-5'>
      <span className='text-sm-extrabold text-neutral-25 md:text-md-extrabold'>
        Help
      </span>

      <div className='flex flex-col gap-4 md:gap-5'>
        {HELP_LIST.map((value) => (
          <span
            key={value}
            className='text-neutral-25 hover:text-primary-100 md:text-md-regular text-sm-regular cursor-pointer'
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Help };
