import React, { FormEvent } from 'react';
import { TextInput } from '../Textinput/TextInput';
import { TextArea } from '../TextArea/Textarea';
import { DateInput } from '../DateInput/DateInput';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { Switcher } from '../Switcher/Switcher';
import { Upload } from '../Upload/Upload';
import { iErrors, iFormRefs, iVisit } from '../../types';

const a = 1;

interface FormProps {
  data: iVisit;
  refs: iFormRefs;
  errors: iErrors;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface FormState {
  submitDisabled: boolean;
}

export class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      submitDisabled: true,
    };
  }

  handleChange() {
    this.setState({
      submitDisabled: false,
    });
  }

  render() {
    const refs = this.props.refs;
    const errors = this.props.errors;
    return (
      <form
        className="form"
        onSubmit={this.props.handleSubmit}
        onChange={this.handleChange.bind(this)}
      >
        <TextInput
          name="name"
          label="Your name:"
          placeholder="Enter your name"
          innerRef={refs.name}
          error={errors.name}
        />
        <DateInput
          name="date"
          label="Date:"
          placeholder="Date"
          innerRef={refs.date}
          error={errors.date}
        />
        <TextInput
          name="title"
          label="Title:"
          placeholder="Title"
          innerRef={refs.title}
          error={errors.title}
        />
        <Select
          name="country"
          label="Country:"
          placeholder="Country"
          innerRef={refs.country}
          error={errors.country}
        />
        <Checkbox name="alone" label="Alone" innerRef={refs.alone} error={errors.alone} />
        <Switcher name="purpose" label="Purpose:" innerRef={refs.purpose} error={errors.purpose} />
        <Upload
          name="upload"
          label="Upload a photo:"
          innerRef={refs.upload}
          error={errors.upload}
        />
        <TextArea
          name="description"
          label="Impression:"
          placeholder="Give a short description for your trip"
          innerRef={refs.description}
          error={errors.description}
        />
        <input
          className="btn form__submit"
          type="submit"
          value="post"
          disabled={this.state.submitDisabled}
        />

        {a}
      </form>
    );
  }
}
