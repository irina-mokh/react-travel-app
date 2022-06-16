import React from 'react';
import { iInput } from '../../types';
import { useFormContext } from 'react-hook-form';

export const TextArea: React.FC<iInput> = (props) => {
  const { register } = useFormContext();

  return (
    <div className={`form__element description`}>
      <label className="form__label" htmlFor={props.name}>
        {props.label}
      </label>
      <textarea
        {...register(props.name, {
          required: 'required field',
          minLength: {
            value: 5,
            message: 'min 5 symbols',
          },
        })}
        className={`form__field ${props.name}__input`}
        id={props.name}
        placeholder={props.placeholder}
      />
      <span className="form__error">{props.error}</span>
    </div>
  );
};
