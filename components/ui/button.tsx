import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] text-sm-bold md:text-md-bold transition-all disabled:pointer-events-none shrink-0 outline-none cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary-100 text-neutral-25 hover:bg-primary-100/90',
        empty:
          'text-neutral-950 hover:bg-neutral-100 border border-neutral-300',
      },
      size: {
        default: 'h-12 p-2 w-full',
        rounded: 'size-9 md:size-10',
        filter: 'h-10 px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
