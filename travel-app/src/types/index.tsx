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

export interface iFormRefs {
  name: React.RefObject<HTMLInputElement>;
  title: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLTextAreaElement>;
  date: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  alone: React.RefObject<HTMLInputElement>;
  purpose: React.RefObject<HTMLInputElement>;
  upload: React.RefObject<HTMLInputElement>;
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
