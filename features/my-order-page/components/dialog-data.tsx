import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { usePostReview } from '../hooks/use-review';
import { DialogDataProps } from '../types';
import { LoadingSpinner } from '@/components/shared/loading-spinner';

const DialogData: React.FC<DialogDataProps> = ({
  menuIds,
  restaurantId,
  transactionId,
  onClose,
}) => {
  const [comment, setComment] = useState<string>('');
  const [star, setStar] = useState<number>(5);
  const [error, setError] = useState<string>('');

  const { mutate, isPending } = usePostReview();

  const handlePostReview = () => {
    if (comment.length === 0) {
      return setError('Comment must be filled to post a review');
    }

    mutate(
      {
        transactionId,
        restaurantId,
        menuIds,
        comment,
        star,
      },
      {
        onSuccess: () => {
          onClose();
        },
        onError: () => {
          setError('You have already reviewed this transaction');
        },
      }
    );
  };

  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <span className='text-xl-extrabold md:display-xs-extrabold text-neutral-950'>
        Give Review
      </span>

      <div className='flex flex-col'>
        <span className='text-md-extrabold text-center text-neutral-950'>
          Give Rating
        </span>

        <div className='flex items-center justify-center gap-1'>
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              height={40}
              width={40}
              onClick={() => setStar(index)}
              className={cn(
                'cursor-pointer',
                index <= star
                  ? 'fill-accent-yellow text-transparent'
                  : 'fill-neutral-400 text-transparent'
              )}
            />
          ))}
        </div>
      </div>

      <textarea
        name='review'
        id='review'
        placeholder='Please share your thoughts about our service!'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className='text-sm-regular md:text-md-regular min-h-58.75 gap-2 rounded-xl border border-neutral-300 px-3 py-2'
      />

      {error && (
        <span className='text-sm-regular md:text-md-regular text-primary-100'>
          {error}
        </span>
      )}

      <Button
        onClick={handlePostReview}
        disabled={isPending}
        className='h-11 md:h-12'
      >
        {isPending ? <LoadingSpinner /> : 'Send'}
      </Button>
    </div>
  );
};

export { DialogData };
