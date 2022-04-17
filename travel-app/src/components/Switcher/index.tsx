import React from 'react';
import { iInput } from '../../types';
import { useFormContext } from 'react-hook-form';

// interface SwitcherProps extends iInput {
//   innerRef: React.ForwardedRef<HTMLInputElement>;
// }

export const Switcher: React.FC<iInput> = (props) => {
  const { register } = useFormContext();
  return (
    <div className={`form__element purpose`}>
      <div className="switcher">
        <span className="switcher__text">Business</span>
        <input
          {...register(props.name)}
          className={`${props.name}__input visually-hidden`}
          id={`${props.name}`}
          type="checkbox"
        />
        <label className="switcher__bar" htmlFor={props.name}></label>
        <span className="switcher__text">Travel</span>
      </div>
    </div>
  );
};
