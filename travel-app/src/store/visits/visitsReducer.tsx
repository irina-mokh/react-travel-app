import { iVisitsState, iVisitsAction, iVisit } from '../../types';

export const visitsReducer = (state: iVisitsState, action: iVisitsAction): iVisitsState => {
  switch (action.type) {
    case 'add data':
      localStorage.removeItem('form');
      return {
        ...state,
        visits: [...state.visits, action.payload as iVisit],
        isSubmitDisabled: true,
        uploadBtnText: '',
      };
    case 'change upload btn':
      return {
        ...state,
        uploadBtnText: action.payload as string,
      };
    case 'make submit active':
      return {
        ...state,
        isSubmitDisabled: false,
      };
    default:
      return state;
  }
};
