'use client';

import { store } from '@/store';
import { Provider } from 'react-redux';

type ReduxProviderWrapperProps = {
  children: React.ReactNode;
};

export const ReduxProviderWrapper: React.FC<ReduxProviderWrapperProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
