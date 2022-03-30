import JPFlag from '../../assets/images/flags/japan.svg';
import AUFlag from '../../assets/images/flags/australia.svg';
import BRFlag from '../../assets/images/flags/brazil.svg';
import CUflag from '../../assets/images/flags/cuba.svg';
import DKFlag from '../../assets/images/flags/denmark.svg';
import ENFlag from '../../assets/images/flags/england.svg';

export const data = [
  {
    id: 0,
    title: 'Japan',
    capital: 'Tokyo',
    currencies: {
      name: 'Japanese yen',
      symbol: '¥',
    },
    area: 377930,
    population: 125809201,
    image: JPFlag,
  },
  {
    id: 2,
    title: 'Australia',
    capital: 'Canberra',
    currencies: {
      name: 'Australian dollar',
      symbol: '$',
    },
    area: 7617930,
    population: 24982688,
    image: AUFlag,
  },
  {
    id: 3,
    title: 'Brazil',
    capital: 'Brasilia',
    currencies: {
      name: 'Brazilian real',
      symbol: 'R$',
    },
    area: 8515767,
    population: 209469333,
    image: BRFlag,
  },
  {
    id: 4,
    title: 'Cuba',
    capital: 'Havana',
    currencies: {
      name: 'Cuban peso',
      symbol: '$MN',
    },
    area: 109884,
    population: 11338138,
    image: CUflag,
  },
  {
    id: 5,
    title: 'Denmark',
    capital: 'Copenhagen',
    currencies: {
      name: 'Danish krone',
      symbol: 'kr',
    },
    area: 42933,
    population: 5793636,
    image: DKFlag,
  },
  {
    id: 6,
    title: 'England',
    capital: 'London',
    currencies: {
      name: 'Pound sterling',
      symbol: '£',
    },
    area: 130279,
    population: 55619400,
    image: ENFlag,
  },
];
