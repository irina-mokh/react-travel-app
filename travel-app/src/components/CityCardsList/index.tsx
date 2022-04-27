import React from 'react';
import { Loading } from '../Loading/Loading';
import { CitiesStore } from '../../store/cities';
import { Link } from 'react-router-dom';

export const CityCardsList = () => {
  const {
    state: { data, isLoaded },
  } = React.useContext(CitiesStore);

  let content = <div>No results</div>;

  if (!isLoaded) {
    content = <Loading />;
  } else if (data.length) {
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
    content = <ul className="cards cards_cities">{cards}</ul>;
  }
  return content;
};
