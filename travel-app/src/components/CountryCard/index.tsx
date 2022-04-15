import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';

interface CountryCardProps {
  value: CardInfo;
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

export const CountryCard = (props: CountryCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((isModal) => !isModal);
  };
  const item = props.value;
  return (
    <>
      <li className="card" data-testid="custom-card" onClick={toggleModal}>
        <h3 className="card__title">{item.title}</h3>
        <p className="card__capital">{item.capital}</p>
        <div className="card__flag">
          <img src={item.image} alt={`${item.title} flag`} />
        </div>
      </li>
      {showModal ? <Modal handleClick={toggleModal} country={item.title} /> : null}
    </>
  );
};
