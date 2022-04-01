import React from 'react';
import { InputProps } from '../Form/Form';

interface UploadProps extends InputProps {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export class Upload extends React.Component<UploadProps> {
  constructor(props: UploadProps) {
    super(props);
  }
  render() {
    return (
      <fieldset className={`form__block ${this.props.name}`}>
        <label className="btn" htmlFor={this.props.name}>
          photo
        </label>
        <input
          type="file"
          required
          name="photo"
          accept="image/png, image/jpeg"
          className={`${this.props.name}__input`}
          id={`${this.props.name}`}
          ref={this.props.innerRef}
        />
      </fieldset>
    );
  }
}
