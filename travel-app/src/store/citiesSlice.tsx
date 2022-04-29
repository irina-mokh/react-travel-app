import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iCitiesState, iCity, iCitiesResponse } from '../types';

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

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    getResponse: (state, action: PayloadAction<iCitiesResponse>) => {
      // create array of pages for select
      const pagesArray = [];
      let responseData: iCity[] = [];

      if (action.payload) {
        console.log(action.payload);
        const response = action.payload;
        responseData = response.data;
        const pagesCount = Math.ceil(response.metadata.totalCount / Number(state.perPage));
        for (let i = 1; i < pagesCount; i += 1) {
          pagesArray.push(String(i));
        }
      }

      state.data = responseData;
      state.pages = pagesArray;
      state.isLoading = false;
    },
    changeQuery: (state, action) => {
      state.query = String(action.payload);
      state.page = 1;
    },
    changePerPage: (state, action: PayloadAction<string>) => {
      state.perPage = String(action.payload);
    },
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sort = String(action.payload);
      state.page = 1;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = Number(action.payload);
    },
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    prevPage: (state) => {
      state.page = state.page - 1;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = String(action.payload);
    },
  },
});

export const {
  getResponse,
  changeQuery,
  changePerPage,
  changeSortType,
  changePage,
  nextPage,
  prevPage,
  setError,
} = citiesSlice.actions;

export default citiesSlice.reducer;
