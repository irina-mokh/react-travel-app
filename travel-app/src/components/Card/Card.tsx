import React from 'react';
import { Modal } from '../Modal/Modal';

interface CardProps {
  value: CardInfo;
}

interface CardState {
  showModal: boolean;
}

export interface CardInfo {
  id: number;
  title: string;
  capital: string;
  currency: {
    name: string;
    symbol: string;
  };
  area: number;
  population: number;
  image: string;
}

export class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    const item = this.props.value;
    return (
      <>
        <li className="card" data-testid="custom-card" onClick={this.toggleModal}>
          <h3 className="card__title">{item.title}</h3>
          <p className="card__capital">{item.capital}</p>
          <div className="card__flag">
            <img src={item.image} alt={`${item.title} flag`} />
          </div>
        </li>
        {this.state.showModal ? (
          <Modal handleClick={this.toggleModal} country={item.title} />
        ) : null}
      </>
    );
  }
}
