import React from 'react';
import { iInput } from '../../types';

interface SwitcherProps extends iInput {
  innerRef: React.ForwardedRef<HTMLInputElement>;
}

export class Switcher extends React.Component<SwitcherProps> {
  constructor(props: SwitcherProps) {
    super(props);
  }
  render() {
    return (
      <fieldset className={`form__block ${this.props.name}`}>
        <span className="label">{this.props.label}</span>
        <div className="switcher">
          <span className="switcher__text">Business</span>
          <input
            className={`${this.props.name}__input`}
            id={`${this.props.name}`}
            type="checkbox"
            ref={this.props.innerRef}
          />
          <label className="switcher__bar" htmlFor={this.props.name}></label>
          <span className="switcher__text">Travel</span>
        </div>
      </fieldset>
    );
  }
}
