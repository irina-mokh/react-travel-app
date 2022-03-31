import React from 'react';

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
}
export class TextInput extends React.Component<TextInputProps> {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    return (
      <label className="form__label" htmlFor={this.props.name}>
        {this.props.label}
        <input
          className={`form__text_${this.props.name}`}
          type="text"
          id={this.props.name}
          placeholder={this.props.placeholder}
        />
      </label>
    );
  }
}
