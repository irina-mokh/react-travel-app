interface CountryCardProps {
  value: CountryCardInfo;
}

interface CountryCardInfo {
  id: number;
  title: string;
  capital: string;
  currencies: {
    name: string;
    symbol: string;
  };
  area: number;
  population: number;
  image: string;
}

export function CountryCard(props: CountryCardProps): JSX.Element {
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
        <p className="card__currency">{item.currencies.name}</p>
        <p className="card__symbol">{item.currencies.symbol}</p>
      </li>
    </>
  );
}
