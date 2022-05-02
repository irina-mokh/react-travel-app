import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { iCitiesState, iCity, iCitiesResponse } from '../types';
import { axios } from '../utils/axios';

const initialState: iCitiesState = {
  data: [],
  query: localStorage.getItem('city-search') || 'ta',
  sort: 'name',
  page: 1,
  perPage: '10',
  pages: ['1'],
  isLoading: true,
  error: null,
};

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async function (
    [perPage, page, query, sort]: [string, number, string, string],
    { rejectWithValue }
  ) {
    const url = `/geo/cities?limit=${perPage}&offset=${page}&namePrefix=${query}&sort=${sort}`;
    try {
      const response = await axios.get(url);
      if (response.statusText !== 'OK') {
        throw new Error('Error');
      }
      return response.data as iCitiesResponse;
    } catch (err) {
      return rejectWithValue((err as AxiosError).message);
    }
  }
);

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    changeQuery: (state, action) => {
      state.query = String(action.payload);
      state.page = 1;
    },
    changePerPage: (state, action: PayloadAction<string>) => {
      state.perPage = String(action.payload);
    },
    changeSortType: (state, action: PayloadAction<string>) => {
      const sort = String(action.payload);
      switch (sort) {
        case 'population':
          state.sort = '-population';
          break;
        case 'country code':
          state.sort = 'countryCode';
          break;
        default:
          state.sort = sort;
      }
      state.page = 1;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = Number(action.payload);
    },
    nextPage: (state) => {
      if (state.page !== Number(state.pages.slice(-1))) {
        state.page = state.page + 1;
      } else {
        state.page = 1;
      }
    },
    prevPage: (state) => {
      if (state.page !== 1) {
        state.page = state.page - 1;
      } else {
        state.page = Number(state.pages.slice(-1));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        // create array of pages for select
        const pagesArray = [];
        let responseData: iCity[] = [];
        if (action.payload) {
          const response: iCitiesResponse = action.payload;
          responseData = response.data;
          const pagesCount = Math.ceil(response.metadata.totalCount / Number(state.perPage));
          for (let i = 1; i < pagesCount; i += 1) {
            pagesArray.push(String(i));
          }
        }
        state.data = responseData;
        state.pages = pagesArray;
        state.isLoading = false;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.error = String(action.payload);
      });
  },
});

export const { changeQuery, changePerPage, changeSortType, changePage, nextPage, prevPage } =
  citiesSlice.actions;

export default citiesSlice.reducer;
