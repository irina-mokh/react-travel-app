import { iVisitsState, iVisitsAction, iVisit } from '../../types';

export const visitsReducer = (state: iVisitsState, action: iVisitsAction): iVisitsState => {
  switch (action.type) {
    case 'add data':
      return {
        ...state,
        visits: [...state.visits, action.payload as iVisit],
      };
    case 'set upload btn text':
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
