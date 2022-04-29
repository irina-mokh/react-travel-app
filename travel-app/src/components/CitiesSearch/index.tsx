import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBar } from '../Searchbar';
import {
  fetchCities,
  changeQuery,
  nextPage,
  prevPage,
  changePage,
  changePerPage,
  changeSortType,
} from '../../store/citiesSlice';
import { AppDispatch, RootState } from '../../store/store';

const PER_PAGE = ['5', '6', '7', '8', '9', '10'];
const SORT_TYPES = ['name', 'population', 'countryCode'];

export const CitiesSearch = () => {
  const { query, sort, page, pages, perPage } = useSelector((state: RootState) => state.cities);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCities([perPage, page, query, sort]));
  }, [page, query, sort, dispatch, perPage]);

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
      <SearchBar handleSubmit={(e: string) => dispatch(changeQuery(e))} value={query} name="city" />
      <form className="cities__nav">
        <div>
          <label htmlFor="sort" className="label">
            Sort by:
          </label>
          <select
            id="sort"
            className={`form__field cities__sort`}
            value={sort}
            onChange={(e) => dispatch(changeSortType(e.target.value))}
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
            onChange={(e) => dispatch(changePerPage(e.target.value))}
          >
            {renderOptions(PER_PAGE)}
          </select>
        </div>
        <fieldset className="cities__pagination">
          <button
            className="arrow"
            onClick={(e) => {
              e.preventDefault();
              dispatch(prevPage());
            }}
          >
            &#10094;
          </button>
          <select
            className={`form__field cities__pages`}
            value={page}
            onChange={(e) => dispatch(changePage(Number(e.target.value)))}
          >
            {renderOptions(pages)}
          </select>
          <button
            className="arrow"
            onClick={(e) => {
              e.preventDefault();
              dispatch(nextPage());
            }}
          >
            &#10095;
          </button>
        </fieldset>
      </form>
    </>
  );
};
