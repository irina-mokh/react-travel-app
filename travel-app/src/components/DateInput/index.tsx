import React from 'react';
import { iInput } from '../../types';
import { useFormContext } from 'react-hook-form';

const today = new Date();

export const DateInput: React.FC<iInput> = (props) => {
  const { register } = useFormContext();
  return (
    <div className={`form__element date`}>
      <label className="form__label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        {...register(props.name, {
          required: 'required field',
        })}
        className={`form__field ${props.name}__input`}
        type="date"
        id={props.name}
        placeholder={props.placeholder}
        max={today.toISOString().split('T')[0]}
      />
      <span className="form__error">{props.error}</span>
    </div>
  );
};
