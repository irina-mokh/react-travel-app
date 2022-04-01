import React from 'react';
import { InputProps } from '../Form/Form';

interface CheckboxProps extends InputProps {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export class Checkbox extends React.Component<CheckboxProps> {
  constructor(props: CheckboxProps) {
    super(props);
  }
  render() {
    return (
      <fieldset className={`form__block ${this.props.name}`}>
        <input
          className={`field ${this.props.name}__input`}
          id={this.props.name}
          type="checkbox"
          ref={this.props.innerRef}
        />
        <label className="label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
      </fieldset>
    );
  }
}
