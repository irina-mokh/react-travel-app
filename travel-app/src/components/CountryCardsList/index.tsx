import React, { useEffect, useState } from 'react';
import { CountryCard } from '../CountryCard';
import { iCountryInfo } from '../../types';
import { Loading } from '../Loading/Loading';

interface CountryCardsListProps {
  query: string;
}

export const CountryCardsList = (props: CountryCardsListProps) => {
  const [data, setData] = useState<iCountryInfo[] | []>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setIsData(false);
    const query = props.query;
    let url = `https://restcountries.com/v3.1/name/${query}`;
    if (query == '') {
      url = `https://restcountries.com/v3.1/all`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setIsData(!!data.length);
        setData(data);
      });
  }, [props.query]);

  let content = <div>No results</div>;

  if (!isLoaded) {
    content = <Loading />;
  } else if (isData) {
    const cards = data.map((item) => {
      const data = {
        id: Number(item.ccn3),
        title: item.name.common,
        capital: Array.isArray(item.capital) ? item.capital[0] : item.capital,
        currency: item.currencies
          ? item.currencies[Object.keys(item.currencies)[0]]
          : { name: '', symbol: '' },
        area: item.area,
        population: item.population,
        image: item.flags.svg,
      };
      return <CountryCard key={data.id} value={data} />;
    });
    content = <ul className="cards">{cards}</ul>;
  }
  return content;
};
