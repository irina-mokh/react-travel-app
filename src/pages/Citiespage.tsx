import { CitiesSearch } from '../components/CitiesSearch';
import { CityCardsList } from '../components/CityCardsList';

export const Cities = () => {
  return (
    <div className="cities">
      <h2 className="heading">Explore cities!</h2>
      <CitiesSearch />
      <CityCardsList />
    </div>
  );
};
