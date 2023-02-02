import type { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from './store';

export function onRouteChange({ matchedRoutes }: any) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}

export function rootContainer(container: ReactElement) {
  return <Provider store={store}>{container}</Provider>;
}
