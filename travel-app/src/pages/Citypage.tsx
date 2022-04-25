import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Navigate } from 'react-router-dom';
import { CitiesStore } from '../store/cities';

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
        setTime(data.data.slice(0, 8));
      });
  };

  let content = <span>No data</span>;

  if (selected) {
    const { name, country, population, region, id, wikiDataId, latitude, longitude, regionCode } =
      selected;
    getTime(id);

    content = (
      <div className="city-page">
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
          <div
            style={{
              width: '50%',
              height: '350px',
            }}
          >
            <GoogleMapReact
              defaultZoom={8}
              defaultCenter={{
                lat: latitude,
                lng: longitude,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  return content ? content : <Navigate to="/" />;
};
