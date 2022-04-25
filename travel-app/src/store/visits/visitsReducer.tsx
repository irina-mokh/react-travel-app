import { iVisitsState, iVisitsAction } from '../../types';

export const visitsReducer = (state: iVisitsState, action: iVisitsAction): iVisitsState => {
  switch (action.type) {
    case 'add data':
      return {
        ...state,
        visits: [...state.visits, action.payload],
      };

    default:
      return state;
  }
};
