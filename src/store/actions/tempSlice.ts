/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncFunction = createAsyncThunk(
  'temp/action',
  async (payload: any) => {
    // call API and return data
  }
);

export const tempSlice = createSlice({
  name: 'temp',
  initialState: {
    aVar: null,
  },
  // pure functions
  reducers: {
    doSomething: (state, action) => {
      state.aVar = action.payload;
    },
  },
  // async functions
  extraReducers: (builder) => {
    builder.addCase(asyncFunction.fulfilled, (state, action) => {
      // state.aVar = action.payload?.data;
    });
  },
});

export const { doSomething } = tempSlice.actions;

// selectors
export const getUser = (state: any) => state.temp.aVar;

export default tempSlice.reducer;
