import { Dispatch, SetStateAction } from 'react';

export type HeroSearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
