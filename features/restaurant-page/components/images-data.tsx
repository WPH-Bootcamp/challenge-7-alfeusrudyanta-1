import Image from 'next/image';

type ImagesDataProps = {
  images: string[];
  name: string;
  mobileImageIndex: number;
};

export const ImagesData: React.FC<ImagesDataProps> = ({
  images,
  name,
  mobileImageIndex,
}) => {
  return (
    <>
      {/* Mobile */}
      <Image
        src={images[mobileImageIndex]}
        alt={name}
        width={651}
        height={470}
        className='w-full rounded-2xl md:hidden'
      />

      {/* Desktop */}
      <div className='hidden grid-cols-2 items-stretch gap-5 md:grid'>
        <Image
          src={images[0]}
          alt={name}
          width={651}
          height={470}
          loading='eager'
          className='h-full w-full rounded-2xl object-cover object-center'
        />

        <div className='flex flex-col justify-stretch gap-5'>
          <Image
            src={images[1]}
            alt={name}
            width={651}
            height={470}
            loading='eager'
            className='h-full w-full rounded-2xl object-cover object-center'
          />

          <div className='grid grid-cols-2 gap-5'>
            <Image
              src={images[2]}
              alt={name}
              width={651}
              height={470}
              loading='eager'
              className='h-full w-full rounded-2xl object-cover object-center'
            />

            <Image
              src={images[3]}
              alt={name}
              width={651}
              height={470}
              loading='eager'
              className='h-full w-full rounded-2xl object-cover object-center'
            />
          </div>
        </div>
      </div>
    </>
  );
};
