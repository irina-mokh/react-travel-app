import React from 'react';
import { TextInput } from '../Textinput/TextInput';
import { TextArea } from '../TextArea/Textarea';
import { DateInput } from '../DateInput/DateInput';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { Switcher } from '../Switcher/Switcher';
import { Upload } from '../Upload/Upload';

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
}

export interface FormState {
  name: React.RefObject<HTMLInputElement>;
  title: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLTextAreaElement>;
  date: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  alone: React.RefObject<HTMLSelectElement>;
  purpose: React.RefObject<HTMLInputElement>;
  upload: React.RefObject<HTMLInputElement>;
}

export class Form extends React.Component<FormProps, FormState> {
  name: React.RefObject<HTMLInputElement>;
  title: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLTextAreaElement>;
  date: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  alone: React.RefObject<HTMLInputElement>;
  purpose: React.RefObject<HTMLInputElement>;
  upload: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.name = React.createRef();
    this.title = React.createRef();
    this.description = React.createRef();
    this.date = React.createRef();
    this.country = React.createRef();
    this.alone = React.createRef();
    this.purpose = React.createRef();
    this.upload = React.createRef();
  }

  render() {
    return (
      <form className="form" onSubmit={this.props.handleSubmit}>
        <TextInput
          name="name"
          label="Your name:"
          placeholder="Enter your name"
          innerRef={this.name}
        />
        <DateInput name="date" label="Date:" placeholder="Date" innerRef={this.date} />
        <TextInput name="title" label="Title:" placeholder="Title" innerRef={this.title} />
        <Select name="country" label="Country:" placeholder="Country" innerRef={this.country} />
        <Checkbox name="alone" label="Alone" innerRef={this.alone} />
        <Switcher name="purpose" label="Purpose:" innerRef={this.purpose} />
        <Upload name="upload" label="Upload a photo:" innerRef={this.upload} />
        <TextArea
          name="description"
          label="Impression:"
          placeholder="Give a short description for your trip"
          innerRef={this.description}
        />
        <input className="btn form__submit btn_disabled" type="submit" value="post" />
      </form>
    );
  }
}
