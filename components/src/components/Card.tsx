import React from 'react';
import { CardInfo, CardProps } from '../types';

class Card extends React.Component<CardProps, CardInfo> {
  constructor(props: CardProps) {
    super(props);
    this.state = this.props.value;
  }
  render() {
    return (
      <>
        <li className="card">
          <h3 className="card__title">{this.state.title}</h3>
          <p className="card__capital">{this.state.capital}</p>
          <p className="card__area">{this.state.area.toLocaleString() + ' m2'}</p>
          <p className="card__population">{this.state.population.toLocaleString() + ' people'}</p>
          <div className="card__flag">
            <img src={`/flags/${this.state.title}.svg`} alt={this.state.title + ' flag'} />
          </div>
          <p className="card__currency">{this.state.currencies.name}</p>
          <p className="card__symbol">{this.state.currencies.symbol}</p>
        </li>
      </>
    );
  }
}

export default Card;
