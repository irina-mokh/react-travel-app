import React from 'react';
import { iInput } from '../../types';

interface TextAreaProps extends iInput {
  innerRef: React.ForwardedRef<HTMLTextAreaElement>;
}

export class TextArea extends React.Component<TextAreaProps> {
  constructor(props: TextAreaProps) {
    super(props);
  }

  render() {
    return (
      <fieldset className={`form__block ${this.props.name}`}>
        <label className="label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <textarea
          className={`field ${this.props.name}__input`}
          id={this.props.name}
          placeholder={this.props.placeholder}
          ref={this.props.innerRef}
          required
        />
      </fieldset>
    );
  }
}
