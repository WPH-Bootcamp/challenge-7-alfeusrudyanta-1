import { GetCartRes } from '@/types/api-cart';
import { GetProfileRes } from '@/types/api-profile';

export type LoggedInProps = {
  isScrolled: boolean;
  cart: GetCartRes | undefined;
  profile: GetProfileRes | undefined;
};
