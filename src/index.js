import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import NavigationService from './services/NavigationService';

import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" />
    <Routes
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  </Provider>
);

export default App;
