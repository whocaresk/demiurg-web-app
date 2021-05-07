import { combineReducers } from '@reduxjs/toolkit';
import { cells } from './features/cells';

export const rootReducer = combineReducers({ cells });

export type RootStore = ReturnType<typeof rootReducer>;
