import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" />
    <Routes />
  </Provider>
);

export default App;
