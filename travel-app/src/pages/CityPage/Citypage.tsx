import React from 'react';
import { Navigate } from 'react-router-dom';
import { CitiesStore } from '../../store/cities';
import { Link } from 'react-router-dom';
import { Map } from '../../components/Map';

export const City = () => {
  const {
    state: { selected },
  } = React.useContext(CitiesStore);

  let content = <span>No data</span>;
  if (selected) {
    const {
      name,
      country,
      population,
      region,
      wikiDataId,
      latitude,
      longitude,
      regionCode,
      timezone,
      elevationMeters,
    } = selected;

    content = (
      <div className="city-page">
        <nav className="city-page__nav">
          <Link className="city-page__link" to="/cities">
            &#10094; Back to results
          </Link>
        </nav>
        <div className="city-page__main">
          <h4 className="city-page__title">{name}</h4>
          <p className="city-page__country">{country}</p>
          <div className="city-page__content">
            <table className="city-page__table">
              <tbody>
                <tr>
                  <td>Region: </td>
                  <td>{region}</td>
                </tr>
                <tr>
                  <td>Region code: </td>
                  <td>{regionCode}</td>
                </tr>
                <tr>
                  <td>Population: </td>
                  <td>{`${population.toLocaleString()} people`}</td>
                </tr>
                <tr>
                  <td>Time zone: </td>
                  <td>{timezone}</td>
                </tr>
                <tr>
                  <td>Elevation: </td>
                  <td>{`${elevationMeters} m`}</td>
                </tr>
                <tr>
                  <td>WikiData: </td>
                  <td>
                    <a href={`http://www.wikidata.org/entity/${wikiDataId}`}>{name}</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <Map latitude={latitude} longitude={longitude} zoom={9} />
          </div>
        </div>
      </div>
    );
  }
  return content ? content : <Navigate to="/" />;
};
