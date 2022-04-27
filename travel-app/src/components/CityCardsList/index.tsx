import React from 'react';
import { Loading } from '../Loading/Loading';
import { CitiesStore } from '../../store/cities';
import { axios } from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

export const CityCardsList = () => {
  const navigate = useNavigate();
  const {
    state: { data, isLoaded },
    dispatch,
  } = React.useContext(CitiesStore);

  let content = <div>No results</div>;

  if (!isLoaded) {
    content = <Loading />;
  } else if (data.length) {
    const cards = data.map((item) => {
      const { id, name, country, population, countryCode } = item;
      return (
        <li key={id} value={name} className="card">
          <div
            className="city"
            onClick={(e) => {
              e.preventDefault();
              axios
                .get(`/geo/cities/${id}`)
                .then((response) => response.data.data)
                .then((data) => {
                  dispatch({ type: 'select city', payload: data });
                  navigate('/city');
                })
                .catch((err) => {
                  dispatch({ type: 'set error', payload: err });
                });
            }}
          >
            <h3 className="city__name">{name}</h3>
            <p className="city__country">{country}</p>
            <p className="city__population">{`${population.toLocaleString()} people`}</p>
            <p className="city__code">{countryCode}</p>
          </div>
        </li>
      );
    });
    content = <ul className="cards cards_cities">{cards}</ul>;
  }
  return content;
};
