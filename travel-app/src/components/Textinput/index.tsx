import React from 'react';
import { iInput } from '../../types';
import { useFormContext } from 'react-hook-form';

export const TextInput: React.FC<iInput> = (props) => {
  const { register } = useFormContext();
  return (
    <div className={`form__element form__text_${props.name}`}>
      <label className="label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        {...register(props.name, {
          required: 'required field',
          minLength: {
            value: 4,
            message: 'min 4 symbols',
          },
        })}
        className={`form__field ${props.name}__input`}
        type="text"
        id={props.name}
        placeholder={props.placeholder}
        autoComplete="off"
      />
      <span className="form__error">{props.error}</span>
    </div>
  );
};
