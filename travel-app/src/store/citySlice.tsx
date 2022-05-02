import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axios } from '../utils/axios';
import { iCityState } from '../types';

const initialState: iCityState = {
  city: null,
  isLoading: true,
  error: null,
};

export const fetchCity = createAsyncThunk(
  'cities/fetchCity',
  async function (id: number, { rejectWithValue }) {
    try {
      const response = await axios.get(`/geo/cities/${id}`);
      return response.data.data;
    } catch (err) {
      return rejectWithValue((err as AxiosError).message);
    }
  }
);

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.city = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.error = String(action.payload);
      });
  },
});

export default citiesSlice.reducer;
