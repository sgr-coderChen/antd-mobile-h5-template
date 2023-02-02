import type { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from './store';

export function rootContainer(container: ReactElement) {
  return <Provider store={store}>{container}</Provider>;
}
