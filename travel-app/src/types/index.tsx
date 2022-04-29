// import { UseFormReturn } from 'react-hook-form';
// Forms
export interface iInput {
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  handleChange?: () => void;
}

export interface iInputState {
  error: string;
}

export interface iVisit {
  name: string;
  title: string;
  date: string;
  description: string;
  country: string;
  purpose: string;
  alone: boolean;
  upload: string;
}

export interface iFormData {
  name: string;
  title: string;
  date: string;
  description: string;
  country: string;
  purpose: string;
  alone: boolean;
  upload: FileList | null;
}

export interface iErrors {
  name: string;
  title: string;
  description: string;
  date: string;
  country: string;
  alone: string;
  purpose: string;
  upload: string;
  counter: number;
}

export interface iVisitsState {
  visits: iVisit[];
  isSubmitDisabled: boolean;
  uploadBtnText: string;
}

export type iVisitsAction = {
  type: string;
  payload?: iVisit | string;
};

// export type iUpload = {
//   name: string;
//   src: string;
// };

// Countries
export interface iCountryInfo {
  name: {
    common: string;
    official: string;
  };
  tld: [string];
  ccn3: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  capital: [string];
  languages: {
    [key: string]: string;
  };
  area: number;
  flag: string;
  population: number;
  flags: {
    svg: string;
  };
  coatOfArms: {
    png: string;
  };
}

//Cities

export interface iCitySearch {
  query: string;
  sort: string;
  page: number;
}

export interface iCitiesState {
  data: iCity[] | [];
  query: string;
  sort: string;
  page: number;
  perPage: string;
  pages: string[];
  isLoading: boolean;
  error: string | null;
}

export interface iCity {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  type: string;
  wikiDataId: string;
  timezone: string;
  elevationMeters: number;
}

export type iCitiesAction = {
  type: string;
  payload?: iCitiesResponse | string | iCity | null;
};

export interface iCitiesResponse {
  data: iCity[];
  links: [];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
}
