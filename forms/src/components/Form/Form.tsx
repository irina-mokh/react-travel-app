import React from 'react';
import { TextInput } from '../Textinput/TextInput';

export class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <TextInput name="name" label="Your name:" placeholder="Enter your name" />
        {/* <SelectInput /> */}
        <TextInput
          name="description"
          label="Describe your visit of the country:"
          placeholder="Give a short description for your trip"
        />
        <input type="submit" />
      </form>
    );
  }
}
