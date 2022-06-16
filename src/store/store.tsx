import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './citiesSlice';
import visitsReducer from './visitsSlice';
import cityReducer from './citySlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    visits: visitsReducer,
    city: cityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
