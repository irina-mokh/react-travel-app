import React from 'react';
import { iInput } from '../../types';

interface TextAreaProps extends iInput {
  innerRef: React.ForwardedRef<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = (props) => (
  <div className={`form__element description`}>
    <label className="form__label" htmlFor={props.name}>
      {props.label}
    </label>
    <textarea
      className={`form__field ${props.name}__input`}
      id={props.name}
      placeholder={props.placeholder}
      ref={props.innerRef}
      onChange={props.handleChange}
    />
    <span className="form__error">{props.error}</span>
  </div>
);
