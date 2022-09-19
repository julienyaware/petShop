import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PETS_BASE_URL = 'https://61f6e0072e1d7e0017fd6f82.mockapi.io/api/v1/pets';

export const getPets = createAsyncThunk('pets/getPets', async () => {
  const response = await axios.get(PETS_BASE_URL);
  return response.data;
});

export const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    data: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPets.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(getPets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default petsSlice.reducer;
