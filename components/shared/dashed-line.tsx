import { cn } from '@/lib/utils';

type DashedLineProps = {
  leftDotClassName?: string;
  rightDotClassName?: string;
};

export const DashedLine: React.FC<DashedLineProps> = ({
  leftDotClassName,
  rightDotClassName,
}) => {
  return (
    <div className='relative'>
      <div
        className={cn(
          'absolute top-1/2 -left-4 size-5 -translate-1/2 rounded-full bg-neutral-100',
          leftDotClassName
        )}
      />
      <div className='w-full border border-dashed border-neutral-300' />
      <div
        className={cn(
          'absolute top-1/2 -right-9 size-5 -translate-1/2 rounded-full bg-neutral-100',
          rightDotClassName
        )}
      />
    </div>
  );
};
