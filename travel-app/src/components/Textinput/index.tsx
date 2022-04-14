import React from 'react';
import { iInput } from '../../types';

interface TextInputProps extends iInput {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export const TextInput: React.FC<TextInputProps> = (props) => (
  <div className={`form__element form__text_${props.name}`}>
    <label className="label" htmlFor={props.name}>
      {props.label}
    </label>
    <input
      className={` form__field ${props.name}__input`}
      type="text"
      id={props.name}
      placeholder={props.placeholder}
      ref={props.innerRef}
      onChange={props.handleChange}
      autoComplete="off"
    />
    <span className="form__error">{props.error}</span>
  </div>
);
