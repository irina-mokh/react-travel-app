import React from 'react';
import { iInput } from '../../types';
import { useFormContext } from 'react-hook-form';

export const Checkbox: React.FC<iInput> = (props) => {
  const { register } = useFormContext();

  return (
    <div className={`form__element alone`}>
      <input
        {...register(props.name)}
        className={`${props.name}__input visually-hidden`}
        id={props.name}
        type="checkbox"
      />
      <label className="label" htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  );
};
