import React, { useEffect } from 'react';
import { SearchBar } from '../Searchbar';
import { Store } from '../../store';

const PER_PAGE = ['5', '6', '7', '8', '9', '10'];
const SORT_TYPES = ['name', 'population', 'countryCode'];

export const CitiesSearch = () => {
  const {
    state: { query, sort, page, pages, perPage },
    dispatch,
  } = React.useContext(Store);

  useEffect(() => {
    const url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=${perPage}&offset=${page}&namePrefix=${query}&sort=${sort}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'get response', payload: data });
      });
  }, [page, query, sort, dispatch, perPage]);

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
        <div>
          <label htmlFor="sort" className="label">
            Sort by:
          </label>
          <select
            id="sort"
            className={`form__field cities__sort`}
            value={sort}
            onChange={(e) => {
              dispatch({ type: 'change sort type', payload: e.target.value });
            }}
          >
            {renderOptions(SORT_TYPES)}
          </select>
        </div>
        <div>
          <label htmlFor="per-page" className="label">
            Items per page:
          </label>
          <select
            className={`form__field cities__per-page`}
            id="per-page"
            value={perPage}
            onChange={(e) => {
              dispatch({ type: 'change per page', payload: e.target.value });
            }}
          >
            {renderOptions(PER_PAGE)}
          </select>
        </div>
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
