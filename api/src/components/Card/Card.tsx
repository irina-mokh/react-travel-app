interface CardProps {
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

export function Card(props: CardProps): JSX.Element {
  const item = props.value;
  return (
    <>
      <li className="card" data-testid="custom-card">
        <h3 className="card__title">{item.title}</h3>
        <p className="card__capital">{item.capital}</p>
        <p className="card__area">{`${item.area.toLocaleString()} m2`}</p>
        <p className="card__population">{`${item.population.toLocaleString()} people`}</p>
        <div className="card__flag">
          <img src={item.image} alt={`${item.title} flag`} />
        </div>
        <p className="card__currency">{item.currency.name}</p>
        <p className="card__symbol">{item.currency.symbol}</p>
      </li>
    </>
  );
}
