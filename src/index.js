import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { rootSaga } from './redux/index';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware,logger)
});

sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

