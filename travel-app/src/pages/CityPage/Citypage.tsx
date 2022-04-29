import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Map } from '../../components/Map';
import { axios } from '../../utils/axios';
import { iCity } from '../../types';
import { Loading } from '../../components/Loading/Loading';
import { setError } from '../../store/citiesSlice';

export const City = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState<iCity>();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(
    () => {
      let unmounted = false;
      axios
        .get(`/geo/cities/${id}`)
        .then((response) => response.data.data)
        .then((data) => {
          if (!unmounted) {
            setCity(data);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!unmounted) {
            console.log(err);
            dispatch(setError('No data'));
            navigate('/');
          }
        });
      return () => {
        unmounted = true;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return city && !loading ? (
    <div className="city-page">
      <nav className="city-page__nav">
        <Link className="city-page__link" to="/cities">
          &#10094; Back to results
        </Link>
      </nav>
      <div className="city-page__main">
        <h4 className="city-page__title">{city.name}</h4>
        <p className="city-page__country">{city?.country}</p>
        <div className="city-page__content">
          <table className="city-page__table">
            <tbody>
              <tr>
                <td>Region: </td>
                <td>{city?.region}</td>
              </tr>
              <tr>
                <td>Region code: </td>
                <td>{city?.regionCode}</td>
              </tr>
              <tr>
                <td>Population: </td>
                <td>{`${city?.population.toLocaleString()} people`}</td>
              </tr>
              <tr>
                <td>Time zone: </td>
                <td>{city?.timezone}</td>
              </tr>
              <tr>
                <td>Elevation: </td>
                <td>{`${city?.elevationMeters} m`}</td>
              </tr>
              <tr>
                <td>WikiData: </td>
                <td>
                  <a href={`http://www.wikidata.org/entity/${city?.wikiDataId}`}>{city?.name}</a>
                </td>
              </tr>
            </tbody>
          </table>
          <Map latitude={city?.latitude} longitude={city?.longitude} zoom={9} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
