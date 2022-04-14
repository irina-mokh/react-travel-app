import React from 'react';
import { Card } from '../CountryCard';
import { iCountryInfo } from '../../types';
import { Loading } from '../Loading/Loading';

interface CardsProps {
  query: string;
}

interface CardsState {
  isData: boolean;
  data: iCountryInfo[];
  isLoaded: boolean;
}

export class CountryCardsList extends React.Component<CardsProps, CardsState> {
  constructor(props: CardsProps) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      isData: false,
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({
      isLoaded: false,
      isData: false,
    });
    const query = this.props.query;
    let url = `https://restcountries.com/v3.1/name/${query}`;
    if (query == '') {
      url = `https://restcountries.com/v3.1/all`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        data: data,
        isLoaded: true,
        isData: Boolean(data.length),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidUpdate(prevProps: CardsProps) {
    if (prevProps.query !== this.props.query) {
      this.fetchData();
    }
  }

  render() {
    const { isLoaded, isData, data } = this.state;
    let content = <div>No results</div>;

    if (!isLoaded) {
      content = <Loading />;
    } else if (isData) {
      const cards = data.map((item) => {
        const data = {
          id: Number(item.ccn3),
          title: item.name.common,
          capital: Array.isArray(item.capital) ? item.capital[0] : item.capital,
          currency: item.currencies
            ? item.currencies[Object.keys(item.currencies)[0]]
            : { name: '', symbol: '' },
          area: item.area,
          population: item.population,
          image: item.flags.svg,
        };
        return <Card key={data.id} value={data} />;
      });
      content = <ul className="cards">{cards}</ul>;
    }

    return content;
  }
}
