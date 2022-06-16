import React from 'react';
import { ReactComponent as OneIco } from '../../assets/icons/one.svg';
import { ReactComponent as GroupIco } from '../../assets/icons/group.svg';
import { ReactComponent as BusinessIco } from '../../assets/icons/business.svg';
import { ReactComponent as TravelIco } from '../../assets/icons/travel.svg';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const VisitCardsList: React.FC = () => {
  const { visits } = useSelector((state: RootState) => state.visits);

  const cards = visits.map((item, index) => (
    <li className="visit" key={index}>
      <img className="visit__image" src={item.upload} alt={`A photo from ${item.name}`} />
      <div className="visit__header">
        <p className="visit__country">{item.country}</p>
        <p className="visit__date">{new Date(item.date).toLocaleDateString()}</p>
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
