import React from 'react';
import { citiesReducer } from './citiesReducer';
import { iCitiesState, iCitiesAction } from '../../types';

export const initialState: iCitiesState = {
  data: [],
  query: localStorage.getItem('city-search') || 'ta',
  sort: 'name',
  page: 1,
  perPage: '10',
  pages: ['1'],
  isLoaded: false,
  error: null,
};

export const CitiesStore = React.createContext<{
  state: iCitiesState;
  dispatch: React.Dispatch<iCitiesAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CitiesStoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(citiesReducer, initialState);

  return <CitiesStore.Provider value={{ state, dispatch }}>{children}</CitiesStore.Provider>;
};
