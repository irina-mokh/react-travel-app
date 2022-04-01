import React from 'react';
import { InputProps } from '../Form/Form';

interface TextInputProps extends InputProps {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export class TextInput extends React.Component<TextInputProps> {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    return (
      <fieldset className={`form__block ${this.props.name}`}>
        <label className="label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          className={`field ${this.props.name}__input`}
          type="text"
          id={this.props.name}
          placeholder={this.props.placeholder}
          ref={this.props.innerRef}
          required
        />
      </fieldset>
    );
  }
}
