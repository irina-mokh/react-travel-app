import React, { RefObject } from 'react';
import { TextInput } from '../Textinput';
import { TextArea } from '../TextArea';
import { DateInput } from '../DateInput';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { Switcher } from '../Switcher';
import { Upload } from '../Upload';
import { iErrors, iFormRefs, iVisit } from '../../types';

const ERRORS_INITIAL = {
  name: 'required field',
  title: 'required field',
  description: 'required field',
  date: 'required field',
  country: 'required field',
  alone: '',
  purpose: '',
  upload: 'required field',
  counter: 0,
};

const FORM_INITIAL = {
  name: '',
  title: '',
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
  isSubmitDisabled: boolean;
  isInstantValidation: boolean;
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
      isSubmitDisabled: true,
      isInstantValidation: false,
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
    this.setState({
      isInstantValidation: true,
    });

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

    if (this.isValid()) {
      this.props.updateData(formData);
      e.currentTarget.reset();
      if (item.upload.current) {
        item.upload.current.value = '';
      }
    }
  }

  resetForm() {
    this.setState({
      isInstantValidation: false,
      isSubmitDisabled: true,
      errors: ERRORS_INITIAL,
    });
  }

  handleFormChange() {
    this.setState({
      isSubmitDisabled: false,
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

  isValid = () => {
    return !Object.values(this.state.errors).filter((error) => !!error).length;
  };

  validate = (
    ref: RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    condition: boolean,
    errorField: string,
    message: string
  ) => {
    if (!ref.current?.value || condition) {
      this.setState((state) => ({
        errors: { ...state.errors, [errorField]: message },
      }));
    } else {
      this.setState((state) => ({
        errors: { ...state.errors, [errorField]: null },
      }));
    }
  };

  render() {
    const showErr = this.state.isInstantValidation;
    const { errors } = this.state;
    const formRefs = this.formRefs;
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        onReset={this.resetForm.bind(this)}
      >
        <TextInput
          name="name"
          label="Your name:"
          placeholder="Enter your name"
          innerRef={formRefs.name}
          error={showErr ? errors.name : ''}
          handleChange={() =>
            this.validate(
              formRefs.name,
              Boolean(formRefs.name.current && formRefs.name.current?.value.length < 4),
              'name',
              'min 4 symbols'
            )
          }
        />
        <DateInput
          name="date"
          label="Date:"
          placeholder="Date"
          innerRef={formRefs.date}
          error={showErr ? errors.date : ''}
          handleChange={() =>
            this.validate(
              formRefs.date,
              Boolean(formRefs.date.current && !formRefs.date.current?.value),
              'date',
              'no value'
            )
          }
        />
        <TextInput
          name="title"
          label="Title:"
          placeholder="Title"
          innerRef={formRefs.title}
          error={showErr ? errors.title : ''}
          handleChange={() =>
            this.validate(
              formRefs.title,
              Boolean(formRefs.title.current && formRefs.title.current?.value.length < 4),
              'title',
              'min 4 symbols'
            )
          }
        />
        <Select
          name="country"
          label="Country:"
          placeholder="Country"
          innerRef={formRefs.country}
          error={showErr ? errors.country : ''}
          handleChange={() =>
            this.validate(
              formRefs.country,
              Boolean(formRefs.country.current && !formRefs.country.current?.value),
              'country',
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
          error={showErr ? errors.upload : ''}
          handleChange={() =>
            this.validate(
              formRefs.upload,
              Boolean(formRefs.upload.current && !formRefs.upload.current?.value),
              'upload',
              'no file loaded'
            )
          }
        />
        <TextArea
          name="description"
          label="Impression:"
          placeholder="Give a short description for your trip"
          innerRef={formRefs.description}
          error={showErr ? errors.description : ''}
          handleChange={() =>
            this.validate(
              formRefs.description,
              Boolean(
                formRefs.description.current && formRefs.description.current?.value.length < 8
              ),
              'description',
              'min 8 symbols'
            )
          }
        />
        <button
          className="form__btn form__submit"
          type="submit"
          value="post"
          disabled={this.state.isSubmitDisabled}
        >
          Post
        </button>
      </form>
    );
  }
}
