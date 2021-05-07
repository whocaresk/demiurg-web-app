import React from 'react';
import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home } from './pages/Home';

export const App: FunctionComponent<any> = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
