import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import tempReducer from './actions/tempSlice';

export const store = configureStore({
  reducer: {
    temp: tempReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
