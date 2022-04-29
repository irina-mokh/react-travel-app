import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './citiesSlice';
import visitsReducer from './visitsSlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    visits: visitsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
