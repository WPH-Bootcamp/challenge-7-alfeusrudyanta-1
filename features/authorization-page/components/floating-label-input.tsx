import { cn } from '@/lib/utils';

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  containerClassName,
  labelClassName,
  inputClassName,
  value,
  error,
  ...props
}) => {
  const hasValue = value && value.toString().length > 0;
  const hasError = !!error;

  return (
    <div className='flex flex-col gap-1'>
      <div
        className={cn(
          'relative h-12 w-full rounded-xl border border-neutral-300 px-3 py-2 md:h-14 md:rounded-lg',
          containerClassName
        )}
      >
        <span
          className={cn(
            'font-regular absolute left-3 text-[0.75rem] leading-4 text-neutral-500 transition-all',
            hasValue
              ? 'top-1 opacity-100 md:top-2'
              : 'top-1/2 -translate-1/2 opacity-0',
            labelClassName
          )}
        >
          {label}
        </span>

        <input
          value={value}
          className={cn(
            'md:text-md-semibold text-sm-semibold h-full w-full text-neutral-950 outline-0',
            hasValue && 'pt-3.25 md:pt-5',
            inputClassName
          )}
          {...props}
        />
      </div>

      {hasError && (
        <span className='text-primary-100 text-sm-semibold'>{error}</span>
      )}
    </div>
  );
};

export { FloatingLabelInput };
