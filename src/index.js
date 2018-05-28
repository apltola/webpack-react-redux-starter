import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import reducers from './reducers';
import App from './components/App';

const store = createStore(
  reducers,
  {},
  applyMiddleware()
);


const render = Component => 
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );


render(App);


// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));