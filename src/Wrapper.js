import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import App from './App';

function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Wrapper;
