import React from 'react';
import { visitsReducer } from './visitsReducer';
import { iVisitsState, iVisitsAction } from '../../types';
import { testVisit } from '../../components/VisitCardsList/testVisit';

export const initialState: iVisitsState = {
  visits: [testVisit],
};

export const VisitsStore = React.createContext<{
  state: iVisitsState;
  dispatch: React.Dispatch<iVisitsAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const VisitsStoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(visitsReducer, initialState);

  return <VisitsStore.Provider value={{ state, dispatch }}>{children}</VisitsStore.Provider>;
};
