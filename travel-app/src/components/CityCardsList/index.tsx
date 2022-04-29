import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const CityCardsList = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.cities);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <>{error}</>;
  }

  if (data.length) {
    const cards = data.map((item) => {
      const { id, name, country, population, countryCode } = item;
      return (
        <li key={id} value={name} className="card">
          <Link to={`/${id}`} className="city">
            <h3 className="city__name">{name}</h3>
            <p className="city__country">{country}</p>
            <p className="city__population">{`${population.toLocaleString()} people`}</p>
            <p className="city__code">{countryCode}</p>
          </Link>
        </li>
      );
    });
    return <ul className="cards cards_cities">{cards}</ul>;
  } else {
    return <div>No results</div>;
  }
};
