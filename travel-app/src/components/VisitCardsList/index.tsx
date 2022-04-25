import React from 'react';
import { ReactComponent as OneIco } from '../../assets/icons/one.svg';
import { ReactComponent as GroupIco } from '../../assets/icons/group.svg';
import { ReactComponent as BusinessIco } from '../../assets/icons/business.svg';
import { ReactComponent as TravelIco } from '../../assets/icons/travel.svg';
import { VisitsStore } from '../../store/visits';

export const VisitCardsList: React.FC = () => {
  const {
    state: { visits },
  } = React.useContext(VisitsStore);

  const cards = visits.map((item, index) => (
    <li className="visit" key={index}>
      <img className="visit__image" src={item.upload} alt={`A photo from ${item.name}`} />
      <div className="visit__header">
        <p className="visit__country">{item.country}</p>
        <p className="visit__date">{item.date}</p>
      </div>
      <h3 className="visit__title">{item.title}</h3>
      <p className="visit__name">{item.name}</p>
      <p className="visit__description">{item.description}</p>
      <div className="visit__footer">
        <span className="visit__alone">{item.alone ? <OneIco /> : <GroupIco />}</span>
        <span className="visit__purpose">
          {item.purpose === 'Business' ? <BusinessIco /> : <TravelIco />}
        </span>
      </div>
    </li>
  ));

  return <ul className="visit-list">{cards}</ul>;
};
