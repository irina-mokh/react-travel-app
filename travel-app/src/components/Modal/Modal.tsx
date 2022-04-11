import React from 'react';
import ReactDOM from 'react-dom';
import { iCountryInfo } from '../../types';
import { Loading } from '../Loading/Loading';

const modalRoot = document.body;

interface ModalProps {
  country: string;
  handleClick: () => void;
}

interface ModalState {
  data: iCountryInfo;
  isLoaded: boolean;
}

export class Modal extends React.Component<ModalProps, ModalState> {
  el = document.createElement('div');
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      data: {
        name: {
          common: 'belarus',
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
      },
      isLoaded: false,
    };
  }

  async fetchData() {
    this.setState({
      isLoaded: false,
    });
    const query = this.props.country;
    const url = `https://restcountries.com/v3.1/name/${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        data: data[0],
        isLoaded: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    this.fetchData();
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    this.el.classList.add('overlay');
    this.el.addEventListener('click', this.props.handleClick);
    const { name, capital, area, population, flags, currencies, languages, coatOfArms, tld } =
      this.state.data;
    const content = !this.state.isLoaded ? (
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
                <span className="modal__symbol">
                  {currencies[Object.keys(currencies)[0]].symbol}
                </span>
              </td>
            </tr>
            <tr>
              <td>Domen: </td>
              <td>{tld}</td>
            </tr>
          </tbody>
        </table>
        <button className="modal__close" onClick={this.props.handleClick}>
          X
        </button>
      </div>
    );

    return ReactDOM.createPortal(content, this.el);
  }
}
