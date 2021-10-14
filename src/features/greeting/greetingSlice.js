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
    const response = await greetingAPI.get();
    console.log('response from API: ', response);
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
        state.message = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Error fetching data';
      });
  },
});

export const selectRandomGreeting = (state) => state.message;

export default greetingSlice.reducer;
