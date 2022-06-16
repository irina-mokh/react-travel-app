import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Map } from '../../components/Map';
import { Loading } from '../../components/Loading/Loading';
import { AppDispatch, RootState } from '../../store/store';
import { fetchCity } from '../../store/citySlice';

export const City = () => {
  const navigate = useNavigate();
  const { city, isLoading, error } = useSelector((state: RootState) => state.city);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCity(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      navigate('/');
    }
  }, [error, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  if (city) {
    return (
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
    );
  } else {
    return <div>No results</div>;
  }
};
