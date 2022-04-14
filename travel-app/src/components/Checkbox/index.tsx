import React from 'react';
import { iInput } from '../../types';

interface CheckboxProps extends iInput {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => (
  <div className={`form__element alone`}>
    <input
      className={`${props.name}__input visually-hidden`}
      id={props.name}
      type="checkbox"
      ref={props.innerRef}
    />
    <label className="label" htmlFor={props.name}>
      {props.label}
    </label>
  </div>
);
