import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { createLogger } from 'redux-logger';

const middlewares = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

let logger = createLogger({
  level: 'info',
  collapsed: true,
});

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
