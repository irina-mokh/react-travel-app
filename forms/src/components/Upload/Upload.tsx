import React, { MutableRefObject } from 'react';
import { iInput } from '../../types';

interface UploadProps extends iInput {
  innerRef: React.ForwardedRef<HTMLInputElement>;
  btnText?: string;
}
interface UploadState {
  btnText: string;
}

export class Upload extends React.Component<UploadProps, UploadState> {
  constructor(props: UploadProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      btnText: 'Upload a photo',
    };
  }

  handleChange() {
    const input = this.props.innerRef as MutableRefObject<HTMLInputElement>;
    const path = input.current.value;
    const fileName = path ? path.replace(/^.*[\\\/]/, '') : 'Upload file';
    this.setState({
      btnText: fileName,
    });
  }

  render() {
    return (
      <fieldset className={`form__block ${this.props.name}`}>
        <label className="btn" htmlFor={this.props.name}>
          {this.state.btnText}
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
