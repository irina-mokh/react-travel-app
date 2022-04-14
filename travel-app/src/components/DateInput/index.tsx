import React from 'react';
import { iInput } from '../../types';

interface DateInputProps extends iInput {
  innerRef: React.RefObject<HTMLInputElement>;
}

const today = new Date();

export const DateInput: React.FC<DateInputProps> = (props) => (
  <div className={`form__element date`}>
    <label className="form__label" htmlFor={props.name}>
      {props.label}
    </label>
    <input
      className={`form__field ${props.name}__input`}
      type="date"
      id={props.name}
      placeholder={props.placeholder}
      ref={props.innerRef}
      max={today.toISOString().split('T')[0]}
      onSubmit={props.handleChange}
      onInput={props.handleChange}
      onChange={props.handleChange}
    />
    <span className="form__error">{props.error}</span>
  </div>
);
