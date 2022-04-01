import React from 'react';
import { InputProps } from '../Form/Form';

interface DateInputProps extends InputProps {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export class DateInput extends React.Component<DateInputProps> {
  constructor(props: DateInputProps) {
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
          type="date"
          id={this.props.name}
          placeholder={this.props.placeholder}
          ref={this.props.innerRef}
        />
      </fieldset>
    );
  }
}
