import React, { useEffect } from 'react';
import { SearchBar } from '../Searchbar';
import { Store } from '../../store';

export const PER_PAGE = 10;
const SORT_TYPES = ['name', 'population', 'countryCode'];

export const CitiesSearch = () => {
  const {
    state: { query, sort, page, pages },
    dispatch,
  } = React.useContext(Store);

  useEffect(() => {
    const url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=${PER_PAGE}&offset=${page}&namePrefix=${query}&sort=${sort}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'get response', payload: data });
      });
  }, [page, query, sort, dispatch]);

  const handleArrowClick = (e: React.MouseEvent<HTMLButtonElement>, side: string) => {
    e.preventDefault();
    dispatch({ type: `${side} page` });
  };

  const renderOptions = (optionsAsArray: string[]) => {
    const options = optionsAsArray.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item || 'Choose an option'}
        </option>
      );
    });
    return options;
  };

  return (
    <>
      <SearchBar
        handleSubmit={(e: string) => {
          dispatch({ type: `change query`, payload: e });
        }}
        value={query}
        name="city"
      />
      <form className="cities__nav">
        <select
          className={`form__field cities__sort`}
          value={sort}
          onChange={(e) => {
            dispatch({ type: 'change sort type', payload: e.target.value });
          }}
        >
          {renderOptions(SORT_TYPES)}
        </select>
        <fieldset className="cities__pagination">
          <button className="arrow" onClick={(e) => handleArrowClick(e, 'prev')}>
            &#10094;
          </button>
          <select
            className={`form__field cities__pages`}
            value={page}
            onChange={(e) => {
              dispatch({ type: 'change page', payload: e.target.value });
            }}
          >
            {renderOptions(pages)}
          </select>
          <button className="arrow" onClick={(e) => handleArrowClick(e, 'next')}>
            &#10095;
          </button>
        </fieldset>
      </form>
    </>
  );
};
