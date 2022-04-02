import oneIco from '../../assets/icons/one.svg';
import groupIco from '../../assets/icons/group.svg';
import businessIco from '../../assets/icons/business.svg';
import travelIco from '../../assets/icons/travel.svg';

interface VisitProps {
  value: VisitState;
}

export interface VisitState {
  name: string;
  title: string;
  date: string;
  description: string;
  country: string;
  purpose: string;
  alone: boolean;
  upload: string;
}

export function Visit(props: VisitProps): JSX.Element {
  const visit = props.value;
  return (
    <>
      <li className="visit">
        <img className="visit__image" src={visit.upload} alt={`A photo from ${visit.name}`} />
        <div className="visit__header">
          <p className="visit__country">{visit.country}</p>
          <p className="visit__date">{visit.date}</p>
        </div>
        <h3 className="visit__title">{visit.title}</h3>
        <p className="visit__name">{visit.name}</p>
        <p className="visit__description">{visit.description}</p>
        <div className="visit__footer">
          <span className="visit__alone">
            <img
              src={visit.alone ? oneIco : groupIco}
              alt={visit.alone ? 'travelled alone' : 'travelled with smbd'}
              aria-label={visit.alone ? 'travelled alone' : 'travelled with smbd'}
            />
          </span>
          <span className="visit__purpose">
            <img
              src={visit.purpose === 'Business' ? businessIco : travelIco}
              alt={visit.purpose}
              aria-label={visit.purpose}
            />
          </span>
        </div>
      </li>
    </>
  );
}
