import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { CitiesStore } from '../../store/cities';
import { Link } from 'react-router-dom';
import { Map } from '../../components/Map';

export const City = () => {
  const {
    state: { selected },
    dispatch,
  } = React.useContext(CitiesStore);

  useEffect(
    () => () => dispatch({ type: 'select city', payload: null }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return selected ? (
    <div className="city-page">
      <nav className="city-page__nav">
        <Link className="city-page__link" to="/cities">
          &#10094; Back to results
        </Link>
      </nav>
      <div className="city-page__main">
        <h4 className="city-page__title">{selected?.name}</h4>
        <p className="city-page__country">{selected?.country}</p>
        <div className="city-page__content">
          <table className="city-page__table">
            <tbody>
              <tr>
                <td>Region: </td>
                <td>{selected?.region}</td>
              </tr>
              <tr>
                <td>Region code: </td>
                <td>{selected?.regionCode}</td>
              </tr>
              <tr>
                <td>Population: </td>
                <td>{`${selected?.population.toLocaleString()} people`}</td>
              </tr>
              <tr>
                <td>Time zone: </td>
                <td>{selected?.timezone}</td>
              </tr>
              <tr>
                <td>Elevation: </td>
                <td>{`${selected?.elevationMeters} m`}</td>
              </tr>
              <tr>
                <td>WikiData: </td>
                <td>
                  <a href={`http://www.wikidata.org/entity/${selected?.wikiDataId}`}>
                    {selected?.name}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <Map latitude={selected?.latitude} longitude={selected?.longitude} zoom={9} />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};
