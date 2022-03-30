import { Card } from '../Card/Card';
import { data } from './data';

export function Cards() {
  const cards = data.map((item) => {
    return <Card key={item.id} value={item} />;
  });
  return <ul className="cards">{cards}</ul>;
}
