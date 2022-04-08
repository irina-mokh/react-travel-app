export interface iInput {
  name: string;
  label: string;
  placeholder?: string;
  error: string;
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
interface Data {
  [key: string]: string;
}
export interface iCountryInfo {
  name: {
    common: string;
    official: string;
    nativeName: {
      bel: {
        official: string;
        common: string;
      };
      rus: {
        official: string;
        common: string;
      };
    };
  };
  tld: [string];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: { name: string; symbol: string } };
  idd: {
    root: string;
    suffixes: [string];
  };
  capital: [string];
  altSpellings: [string];
  region: string;
  subregion: string;
  languages: {
    bel: string;
    rus: string;
  };
  // translations: {
  //     ara: {
  //         official: جمهورية بيلاروسيا,
  //         common: بيلاروسيا
  //     },
  //     ces: {
  //         official: Běloruská republika,
  //         common: Bělorusko
  //     },
  //     cym: {
  //         official: Gweriniaeth Belarws,
  //         common: Belarws
  //     },
  //     deu: {
  //         official: Republik Belarus,
  //         common: Weißrussland
  //     },
  //     est: {
  //         official: Valgevene Vabariik,
  //         common: Valgevene
  //     },
  //     fin: {
  //         official: Valko-Venäjän tasavalta,
  //         common: Valko-Venäjä
  //     },
  //     fra: {
  //         official: République de Biélorussie,
  //         common: Biélorussie
  //     },
  //     hrv: {
  //         official: Republika Bjelorusija,
  //         common: Bjelorusija
  //     },
  //     hun: {
  //         official: Fehérorosz Köztársaság,
  //         common: Fehéroroszország
  //     },
  //     ita: {
  //         official: Repubblica di Belarus,
  //         common: Bielorussia
  //     },
  //     jpn: {
  //         official: ベラルーシ共和国,
  //         common: ベラルーシ
  //     },
  //     kor: {
  //         official: 벨라루스 공화국,
  //         common: 벨라루스
  //     },
  //     nld: {
  //         official: Republiek Belarus,
  //         common: Wit-Rusland
  //     },
  //     per: {
  //         official: جمهوری بلاروس,
  //         common: بلاروس
  //     },
  //     pol: {
  //         official: Republika Białorusi,
  //         common: Białoruś
  //     },
  //     por: {
  //         official: República da Bielorrússia,
  //         common: Bielorússia
  //     },
  //     rus: {
  //         official: Республика Беларусь,
  //         common: Беларусь
  //     },
  //     slk: {
  //         official: Bieloruská republika,
  //         common: Bielorusko
  //     },
  //     spa: {
  //         official: República de Belarús,
  //         common: Bielorrusia
  //     },
  //     swe: {
  //         official: Republiken Vitryssland,
  //         common: Belarus
  //     },
  //     urd: {
  //         official: جمہوریہ بیلاروس,
  //         common: بیلاروس
  //     },
  //     zho: {
  //         official: 白俄罗斯共和国,
  //         common: 白俄罗斯
  //     }
  // },
  latlng: [53, 28];
  landlocked: boolean;
  borders: [string];
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    2019: 25.3;
  };
  fifa: string;
  car: {
    signs: [string];
    side: string;
  };
  timezones: [string];
  continents: [string];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: [number];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}

export interface currency {
  [key: string]: { name: string; symbol: string } | Data;
}
