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
  data: FormState;
}

export interface FormState {
  name: React.RefObject<HTMLInputElement>;
  title: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLTextAreaElement>;
  date: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  alone: React.RefObject<HTMLInputElement>;
  purpose: React.RefObject<HTMLInputElement>;
  upload: React.RefObject<HTMLInputElement>;
}

export interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
}

export class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    const data = this.props.data;
    return (
      <form className="form" onSubmit={this.props.handleSubmit}>
        <TextInput
          name="name"
          label="Your name:"
          placeholder="Enter your name"
          innerRef={data.name}
        />
        <DateInput name="date" label="Date:" placeholder="Date" innerRef={data.date} />
        <TextInput name="title" label="Title:" placeholder="Title" innerRef={data.title} />
        <Select name="country" label="Country:" placeholder="Country" innerRef={data.country} />
        <Checkbox name="alone" label="Alone" innerRef={data.alone} />
        <Switcher name="purpose" label="Purpose:" innerRef={data.purpose} />
        <Upload name="upload" label="Upload a photo:" innerRef={data.upload} />
        <TextArea
          name="description"
          label="Impression:"
          placeholder="Give a short description for your trip"
          innerRef={data.description}
        />
        <input className="btn form__submit" type="submit" value="post" />
      </form>
    );
  }
}
