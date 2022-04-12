import React, { FormEvent, RefObject } from 'react';
import { TextInput } from '../Textinput';
import { TextArea } from '../TextArea';
import { DateInput } from '../DateInput';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { Switcher } from '../Switcher';
import { Upload } from '../Upload';
import { iErrors, iFormRefs, iVisit } from '../../types';

const ERRORS_INITIAL = {
  name: '',
  title: '',
  description: '',
  date: '',
  country: '',
  alone: '',
  purpose: '',
  upload: '',
  counter: 0,
};

const FORM_INITIAL = {
  name: 'Name',
  title: 'Title',
  date: '',
  description: '',
  country: '',
  purpose: '',
  alone: false,
  upload: '',
};

interface FormProps {
  updateData: (e: iVisit) => void;
}

export interface FormState {
  formData: iVisit;
  submitDisabled: boolean;
  errors: iErrors;
}

export class Form extends React.Component<FormProps, FormState> {
  fileReader: FileReader | null;
  fileSrc: string;
  formRefs: iFormRefs;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      formData: FORM_INITIAL,
      submitDisabled: true,
      errors: ERRORS_INITIAL,
    };

    this.fileReader = null;
    this.fileSrc = '';
    this.formRefs = {
      name: React.createRef<HTMLInputElement>(),
      title: React.createRef<HTMLInputElement>(),
      description: React.createRef<HTMLTextAreaElement>(),
      date: React.createRef<HTMLInputElement>(),
      country: React.createRef<HTMLSelectElement>(),
      alone: React.createRef<HTMLInputElement>(),
      purpose: React.createRef<HTMLInputElement>(),
      upload: React.createRef<HTMLInputElement>(),
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const item: iFormRefs = this.formRefs;
    let formData = FORM_INITIAL;

    if (
      item.name.current &&
      item.title.current &&
      item.date.current &&
      item.country.current &&
      item.alone.current &&
      item.description.current &&
      item.purpose.current &&
      item.upload.current
    ) {
      formData = {
        name: item.name.current.value,
        title: item.title.current.value,
        description: item.description.current.value,
        date: item.date.current.value,
        country: item.country.current.value,
        alone: item.alone.current.checked,
        purpose: item.purpose.current.checked ? 'Travel' : 'Business',
        upload: this.fileSrc,
      };
    }

    (e.target as HTMLFormElement).reset();
    if (item.upload.current) {
      item.upload.current.value = '';
    }

    const isValid = this.checkValid();
    console.log(isValid);
    if (isValid) {
      this.props.updateData(formData);
    }
  }

  handleChange() {
    this.setState({
      submitDisabled: false,
    });
  }

  handleFileReader = () => {
    if (!this.fileReader) return;
    const content = this.fileReader.result;
    this.fileSrc = String(content);
  };

  handleFileChosen = () => {
    if (
      this.formRefs.upload &&
      this.formRefs.upload.current &&
      this.formRefs.upload.current.files
    ) {
      const file = this.formRefs.upload.current.files[0];
      this.fileReader = new FileReader();
      this.fileReader.onloadend = this.handleFileReader;
      this.fileReader.readAsDataURL(file);
    }
  };

  checkValid = () => {
    console.log(this.state.errors);
    console.log(Object.values(this.state.errors).filter((error) => !!error).length);
    return !Object.values(this.state.errors).filter((error) => !!error).length;
  };

  validate = (
    ref: RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    condition: boolean,
    errorField: string,
    message: string
  ) => {
    console.log('validate');
    if (ref.current?.value) return;
    if (condition) {
      this.setState((state: FormState) => ({
        errors: { ...state.errors, [errorField]: message },
      }));
    } else {
      if (this.state.errors.name) {
        this.setState((state: FormState) => ({
          errors: { ...state.errors, [errorField]: null },
        }));
      }
    }
  };

  render() {
    const { errors } = this.state;
    const formRefs = this.formRefs;
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}
      >
        <TextInput
          name="name"
          label="Your name:"
          placeholder="Enter your name"
          innerRef={formRefs.name}
          error={errors.name}
          handleChange={() =>
            this.validate(
              formRefs.name,
              Boolean(formRefs.name.current && formRefs.name.current?.value.length < 4),
              errors.name,
              'Should be more than 4 chars'
            )
          }
        />
        <DateInput
          name="date"
          label="Date:"
          placeholder="Date"
          innerRef={formRefs.date}
          error={errors.date}
          handleChange={() =>
            this.validate(
              formRefs.date,
              Boolean(formRefs.date.current && formRefs.date.current?.value),
              errors.date,
              'no value'
            )
          }
        />
        <TextInput
          name="title"
          label="Title:"
          placeholder="Title"
          innerRef={formRefs.title}
          error={errors.title}
          handleChange={() =>
            this.validate(
              formRefs.title,
              Boolean(formRefs.title.current && formRefs.title.current?.value.length > 4),
              errors.title,
              'Should be more than 4 chars'
            )
          }
        />
        <Select
          name="country"
          label="Country:"
          placeholder="Country"
          innerRef={formRefs.country}
          error={errors.country}
          handleChange={() =>
            this.validate(
              formRefs.country,
              Boolean(formRefs.country.current && formRefs.country.current?.value),
              errors.country,
              'no value'
            )
          }
        />
        <Checkbox name="alone" label="Alone" innerRef={formRefs.alone} />
        <Switcher name="purpose" label="Purpose:" innerRef={formRefs.purpose} />
        <Upload
          name="upload"
          label="Upload a photo:"
          innerRef={formRefs.upload}
          handleFileChosen={this.handleFileChosen}
          btnText={formRefs.upload.current?.value}
          error={errors.upload}
          handleChange={() =>
            this.validate(
              formRefs.upload,
              Boolean(formRefs.upload.current && formRefs.upload.current?.value),
              errors.upload,
              'no file loaded'
            )
          }
        />
        <TextArea
          name="description"
          label="Impression:"
          placeholder="Give a short description for your trip"
          innerRef={formRefs.description}
          error={errors.description}
          handleChange={() =>
            this.validate(
              formRefs.description,
              Boolean(
                formRefs.description.current && formRefs.description.current?.value.length < 8
              ),
              errors.description,
              'min 8 symbols'
            )
          }
        />
        <button
          className="form__btn form__submit"
          type="submit"
          value="post"
          disabled={this.state.submitDisabled}
        >
          Post
        </button>
      </form>
    );
  }
}
