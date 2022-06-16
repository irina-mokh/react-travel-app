import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iVisit } from '../types';
import { testVisit } from '../components/VisitCardsList/testVisit';
import { iVisitsState } from '../types';

const initialState: iVisitsState = {
  visits: [testVisit],
  isSubmitDisabled: true,
  uploadBtnText: '',
};

export const visitsSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<iVisit>) => {
      localStorage.removeItem('form');

      state.visits.push(action.payload);
      state.isSubmitDisabled = true;
      state.uploadBtnText = '';
    },
    changeUploadButton: (state, action) => {
      state.uploadBtnText = action.payload;
    },
    makeSubmitActive: (state) => {
      state.isSubmitDisabled = false;
    },
  },
});

export const { addData, changeUploadButton, makeSubmitActive } = visitsSlice.actions;

export default visitsSlice.reducer;
