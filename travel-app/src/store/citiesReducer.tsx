import { iState, iCity, iPayload, iResponse } from '../types';
import { PER_PAGE } from '../components/CitiesSearch';
export const citiesReducer = (state: iState, action: { type: string; payload?: iPayload }) => {
  switch (action.type) {
    case 'get response':
      // create array of pages for select
      const pagesArray = [];
      let responseData: iCity[] = [];

      if (action.payload) {
        const response = action.payload as iResponse;
        responseData = response.data;
        const pagesCount = Math.ceil(response.metadata.totalCount / PER_PAGE);
        for (let i = 1; i < pagesCount; i += 1) {
          pagesArray.push(String(i));
        }
      }
      return {
        ...state,
        data: responseData,
        pages: pagesArray,
        isLoaded: true,
      };
    case 'change query':
      return {
        ...state,
        query: action.payload as string,
        page: 1,
      };
    case 'change sort type':
      return {
        ...state,
        sort: action.payload as string,
        page: 1,
      };
    case 'change page':
      return {
        ...state,
        page: Number(action.payload),
      };
    case 'prev page':
      return {
        ...state,
        page: +state.page - 1,
      };
    case 'next page':
      return {
        ...state,
        page: +state.page + 1,
      };
    default:
      return state;
  }
};
