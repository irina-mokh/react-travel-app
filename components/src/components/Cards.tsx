import React from 'react';
import Card from '../components/Card';
import { CardsProps } from '../types';

class Cards extends React.Component<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }
  render() {
    const items = this.props.value;
    const cards = items.map((item) => {
      return <Card key={item.id} value={item} />;
    });
    return <ul className="cards">{cards}</ul>;
  }
}

export default Cards;
