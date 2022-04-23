import React from 'react';
import { citiesReducer } from './citiesReducer';
import { iState, iAction } from '../types';

export const initialState: iState = {
  data: [],
  query: localStorage.getItem('city-search') || 'ta',
  sort: 'name',
  page: 1,
  perPage: '10',
  pages: ['1'],
  isLoaded: false,
  selected: null,
};

export const Store = React.createContext<{
  state: iState;
  dispatch: React.Dispatch<iAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(citiesReducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
