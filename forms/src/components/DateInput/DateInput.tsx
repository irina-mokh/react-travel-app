import React from 'react';
import { iInput } from '../../types';

interface DateInputProps extends iInput {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export class DateInput extends React.Component<DateInputProps> {
  constructor(props: DateInputProps) {
    super(props);
  }
  render() {
    const today = new Date();
    return (
      <fieldset className={`form__block ${this.props.name}`}>
        <label className="label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          className={`field ${this.props.name}__input`}
          type="date"
          id={this.props.name}
          placeholder={this.props.placeholder}
          ref={this.props.innerRef}
          required
          max={today.toISOString().split('T')[0]}
        />
      </fieldset>
    );
  }
}
