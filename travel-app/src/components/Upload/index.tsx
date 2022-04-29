import React from 'react';
import { iInput } from '../../types';
import { useFormContext } from 'react-hook-form';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const Upload: React.FC<iInput> = (props) => {
  const { uploadBtnText } = useSelector((state: RootState) => state.visits);

  const { register } = useFormContext();

  return (
    <div className={`form__element ${props.name}`}>
      <span className="form__error">{props.error}</span>
      <label className="form__btn" htmlFor={props.name}>
        {uploadBtnText || 'Upload File'}
      </label>
      <input
        {...register(props.name, { required: 'required field' })}
        type="file"
        name="upload"
        accept="image/png, image/jpeg"
        className={`${props.name}__input`}
        id={props.name}
      />
    </div>
  );
};
