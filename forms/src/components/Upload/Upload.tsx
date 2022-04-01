import React, { MutableRefObject } from 'react';
import { InputProps } from '../Form/Form';

interface UploadProps extends InputProps {
  innerRef: React.ForwardedRef<HTMLInputElement>;
  btnText?: string;
}

export class Upload extends React.Component<UploadProps> {
  btnText: string;
  constructor(props: UploadProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.btnText = 'Upload a photo';
  }
  handleChange() {
    const input = this.props.innerRef as MutableRefObject<HTMLInputElement>;
    const path = input.current.value;
    if (path) {
      this.setState({
        btnText: 'File uploded!',
        // TODO: change btn text
      });
    }
  }
  render() {
    return (
      <fieldset className={`form__block ${this.props.name}`}>
        <label className="btn" htmlFor={this.props.name}>
          {this.btnText}
        </label>
        <input
          type="file"
          required
          name="photo"
          accept="image/png, image/jpeg"
          className={`${this.props.name}__input`}
          id={`${this.props.name}`}
          ref={this.props.innerRef}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
