import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { iCountryInfo } from '../../types';
import { Loading } from '../Loading/Loading';

const modalRoot = document.body;

interface ModalProps {
  country: string;
  handleClick: () => void;
}

export const Modal = (props: ModalProps) => {
  const el = document.createElement('div');
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<iCountryInfo>({
    name: {
      common: '',
      official: '',
    },
    tld: [''],
    ccn3: '',
    currencies: { cur: { name: '', symbol: '' } },
    capital: [''],
    languages: {
      '': '',
    },
    area: 0,
    flag: '',
    population: 0,
    flags: {
      svg: '',
    },
    coatOfArms: {
      png: '',
    },
  });

  useEffect(() => {
    setIsLoaded(false);
    const url = `https://restcountries.com/v3.1/name/${props.country}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        setIsLoaded(true);
      });
  }, [props.country]);

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  });

  el.classList.add('overlay');
  el.addEventListener('click', props.handleClick);
  const { name, capital, area, population, flags, currencies, languages, coatOfArms, tld } = data;
  const content = !isLoaded ? (
    <div className="modal">
      <Loading />
    </div>
  ) : (
    <div className="modal">
      <h4 className="modal__title">{name.common}</h4>
      <p className="modal__official-title">{name.official}</p>
      <div className="modal__flag">
        <img src={flags.svg} alt={`${name} flag`} />
      </div>
      <div className="modal__coat-of-arms">
        <img src={coatOfArms.png} alt={`${name.common} flag`} />
      </div>
      <table className="modal__table">
        <tbody>
          <tr>
            <td>Capital: </td>
            <td>{capital[0]}</td>
          </tr>
          <tr>
            <td>Population: </td>
            <td>{`${population.toLocaleString()} people`}</td>
          </tr>
          <tr>
            <td>Area: </td>
            <td>{`${area.toLocaleString()} m2`}</td>
          </tr>
          <tr>
            <td>Language: </td>
            <td>{Object.values(languages)[0]}</td>
          </tr>
          <tr>
            <td>Currency: </td>
            <td className="modal__currencies">
              <span>{currencies[Object.keys(currencies)[0]].name}</span>
              <span className="modal__symbol">{currencies[Object.keys(currencies)[0]].symbol}</span>
            </td>
          </tr>
          <tr>
            <td>Domen: </td>
            <td>{tld}</td>
          </tr>
        </tbody>
      </table>
      <button className="modal__close" onClick={props.handleClick}>
        X
      </button>
    </div>
  );

  return ReactDOM.createPortal(content, el);
};
