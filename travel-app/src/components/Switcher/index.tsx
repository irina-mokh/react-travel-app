import React from 'react';
import { iInput } from '../../types';

interface SwitcherProps extends iInput {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export const Switcher: React.FC<SwitcherProps> = (props) => (
  <div className={`form__element purpose`}>
    <div className="switcher">
      <span className="switcher__text">Business</span>
      <input
        className={`${props.name}__input visually-hidden`}
        id={`${props.name}`}
        type="checkbox"
        ref={props.innerRef}
      />
      <label className="switcher__bar" htmlFor={props.name}></label>
      <span className="switcher__text">Travel</span>
    </div>
  </div>
);
