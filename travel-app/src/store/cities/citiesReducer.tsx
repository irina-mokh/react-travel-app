import { iCitiesState, iCity, iCitiesResponse, iCitiesAction } from '../../types';
export const citiesReducer = (state: iCitiesState, action: iCitiesAction): iCitiesState => {
  switch (action.type) {
    case 'get response':
      // create array of pages for select
      const pagesArray = [];
      let responseData: iCity[] = [];

      if (action.payload) {
        const response = action.payload as iCitiesResponse;
        responseData = response.data;
        const pagesCount = Math.ceil(response.metadata.totalCount / Number(state.perPage));
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
    case 'change per page':
      return {
        ...state,
        perPage: action.payload as string,
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
    case 'select city':
      return {
        ...state,
        selected: action.payload as iCity | null,
      };
    case 'set error':
      return {
        ...state,
        error: action.payload as string,
      };
    default:
      return state;
  }
};
