import React, { useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Navigate } from 'react-router-dom';
import { CitiesStore } from '../../store/cities';
import { Link } from 'react-router-dom';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic3VwZXJtb2giLCJhIjoiY2wyZWhxN3o5MDB1MzNibWsza2pma2kwdyJ9.zhR6EvEjA9dn7RINZU2Jww',
});

export const City = () => {
  const {
    state: { selected },
  } = React.useContext(CitiesStore);
  const [time, setTime] = useState();

  const getTime = (id: number) => {
    const url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities/${id}/time`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTime(data.data.slice(0, 5));
      });
  };

  let content = <span>No data</span>;

  if (selected) {
    const { name, country, population, region, id, wikiDataId, latitude, longitude, regionCode } =
      selected;
    getTime(id);

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
                  <td>{population.toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Time: </td>
                  <td>{time}</td>
                </tr>
                <tr></tr>
                <tr>
                  <td>WikiData: </td>
                  <td>
                    <a href={`http://www.wikidata.org/entity/${wikiDataId}`}>{name}</a>
                  </td>
                </tr>
                <tr>
                  <td>Latitude: </td>
                  <td>{latitude}</td>
                </tr>
                <tr>
                  <td>Longitude: </td>
                  <td>{longitude}</td>
                </tr>
              </tbody>
            </table>
            <Map
              className="city-page__map"
              style="mapbox://styles/mapbox/streets-v9"
              center={[longitude, latitude]}
              zoom={[10]}
            ></Map>
          </div>
        </div>
      </div>
    );
  }
  return content ? content : <Navigate to="/" />;
};
