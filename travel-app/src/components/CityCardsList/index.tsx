import React from 'react';
import { Loading } from '../Loading/Loading';
import { Store } from '../../store';

export const CityCardsList = () => {
  const {
    state: { data, isLoaded },
  } = React.useContext(Store);

  let content = <div>No results</div>;

  if (!isLoaded) {
    content = <Loading />;
  } else if (data.length) {
    const cards = data.map((item) => {
      const { id, name, country, population, countryCode } = item;
      return (
        <li key={id} value={name} className="card city ">
          <h3 className="city__name">{name}</h3>
          <p className="city__country">{country}</p>
          <p className="city__population">{`${population.toLocaleString()} people`}</p>
          <p className="city__code">{countryCode}</p>
        </li>
      );
    });
    content = <ul className="cards cards_cities">{cards}</ul>;
  }
  return content;
};
