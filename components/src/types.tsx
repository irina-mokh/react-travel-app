export interface CardsProps {
  value: CardInfo[];
}

export interface CardProps {
  key: number;
  value: CardInfo;
}

export interface CardInfo {
  id: number;
  title: string;
  capital: string;
  currencies: {
    name: string;
    symbol: string;
  };
  area: number;
  population: number;
}
