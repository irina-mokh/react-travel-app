import React from 'react';
import { iInput } from '../../types';
import { useFormContext } from 'react-hook-form';

interface iSelectInput extends iInput {
  options: string[];
}
export const Select: React.FC<iSelectInput> = (props) => {
  const { register } = useFormContext();

  const data = props.options.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item || 'Choose an option'}
      </option>
    );
  });

  return (
    <div className={`form__element ${props.name}`}>
      <label className="label" htmlFor={props.name}>
        {props.label}
      </label>
      <select
        {...register(props.name, { required: 'required field' })}
        className={`form__field ${props.name}__input`}
        id={props.name}
        placeholder={props.placeholder}
      >
        {data}
      </select>
      {props.error && <span className="form__error">{props.error}</span>}
    </div>
  );
};
