import { Dispatch, SetStateAction } from 'react';

type HeroSearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export type { HeroSearchProps };
