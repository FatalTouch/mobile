import React  from 'react';
import { Provider } from 'react-redux';

import configureStore from './stores';
import OpenDota from './OpenDota';

const store = configureStore();

const App = () => {

  return (
    <Provider store={store}>
      <OpenDota />
    </Provider>
  );
};

export default App;
