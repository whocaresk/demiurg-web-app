import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootStore } from '../root-reducer';

export type AppThunk = ThunkAction<void, RootStore, null, Action<string>>;
export type GetSliceThunk<SliceReducer extends (...args) => any> = ThunkAction<
  void,
  ReturnType<SliceReducer>,
  null,
  Action<string>
>;
