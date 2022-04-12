import { CountryCard } from '../CountryCard';
import { data } from './data';

export const CountryCardsList: () => JSX.Element = () => (
  <ul className="cards">
    {data.map((item) => {
      <CountryCard key={item.id} value={item} />;
    })}
  </ul>
);
