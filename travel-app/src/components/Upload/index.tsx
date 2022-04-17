import React from 'react';
import { iInput } from '../../types';
import { useFormContext } from 'react-hook-form';

interface UploadProps extends iInput {
  handleFileChosen: (e: React.ChangeEvent<HTMLInputElement>) => void;
  btnText: string | null;
}

export const Upload: React.FC<UploadProps> = (props) => {
  const { register, trigger } = useFormContext();

  return (
    <div className={`form__element ${props.name}`}>
      <span className="form__error">{props.error}</span>
      <label className="form__btn" htmlFor={props.name}>
        {props.btnText || 'Upload File'}
      </label>
      <input
        {...register(props.name, { required: 'required field' })}
        type="file"
        name="upload"
        accept="image/png, image/jpeg"
        className={`${props.name}__input`}
        id={props.name}
        onChange={(e) => {
          props.handleFileChosen(e);
          trigger('upload');
        }}
      />
    </div>
  );
};
