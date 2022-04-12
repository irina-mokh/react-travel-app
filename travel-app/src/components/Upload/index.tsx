import React, { MutableRefObject } from 'react';
import { InputFiles } from 'typescript';
import { iInput } from '../../types';

interface UploadProps extends iInput {
  innerRef: React.ForwardedRef<HTMLInputElement>;
  handleFileChosen: () => void;
  btnText: string | undefined;
}

export const Upload: React.FC<UploadProps> = (props) => (
  <div className={`form__element ${props.name}`}>
    <span className="form__error">{props.error}</span>
    <label className="form__btn" htmlFor={props.name}>
      {props.btnText ? props.btnText.replace(/^.*[\\\/]/, '') : 'Upload File'}
    </label>
    <input
      type="file"
      name="photo"
      accept="image/png, image/jpeg"
      className={`${props.name}__input`}
      id={props.name}
      ref={props.innerRef}
      onInput={props.handleFileChosen}
      onChange={() => {
        console.log(props.handleChange);
        return props.handleChange;
      }}
    />
  </div>
);
