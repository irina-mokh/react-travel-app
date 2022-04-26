import { iVisitsState, iVisitsAction, iVisit, iUpload } from '../../types';

export const visitsReducer = (state: iVisitsState, action: iVisitsAction): iVisitsState => {
  switch (action.type) {
    case 'add data':
      return {
        ...state,
        visits: [...state.visits, action.payload as iVisit],
        isSubmitDisabled: true,
        uploadBtnText: '',
      };
    case 'handle upload':
      return {
        ...state,
        uploadBtnText: (action.payload as iUpload).name,
        fileSrc: (action.payload as iUpload).src,
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
