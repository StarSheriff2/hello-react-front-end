/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import greetingAPI from '../../greetingAPI';

const initialState = {
  message: '...wait',
  status: 'idle',
  error: null,
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await greetingAPI.get('/api/v1/random-greeting');
    return response.data;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'idle';
        state.message = action.payload.message;
      })
      .addCase(fetchGreeting.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Error fetching data';
      });
  },
});

export const selectRandomGreeting = (state) => state.greeting.message;

export default greetingSlice.reducer;
