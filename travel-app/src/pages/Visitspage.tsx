import { Form } from '../components/Form/Form';
import React from 'react';
import { Visit } from '../components/Visit/Visit';
import { testVisit } from '../components/Visit/testVisit';
import { iVisit, iFormRefs, iErrors } from '../types';

interface VisitsProps {
  value?: string;
}

interface VisitsState {
  form: iVisit;
  visits: iVisit[] | [];
  formRefs: iFormRefs;
  errors: iErrors;
}

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

export class Visits extends React.Component<VisitsProps, VisitsState> {
  constructor(props: VisitsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      form: FORM_INITIAL,
      formRefs: {
        name: React.createRef<HTMLInputElement>(),
        title: React.createRef<HTMLInputElement>(),
        description: React.createRef<HTMLTextAreaElement>(),
        date: React.createRef<HTMLInputElement>(),
        country: React.createRef<HTMLSelectElement>(),
        alone: React.createRef<HTMLInputElement>(),
        purpose: React.createRef<HTMLInputElement>(),
        upload: React.createRef<HTMLInputElement>(),
      },
      visits: [],
      errors: ERRORS_INITIAL,
    };
  }

  async isValid() {
    const formData = await this.getData();
    this.setState({
      form: formData,
    });

    let counter = this.state.errors.counter;
    const errors = this.state.errors;
    const { name, title, description, date } = await this.getData();

    errors.name = name.length < 4 || !name.match(/[a-zA-Z]/) ? 'min 4 letters' : '';
    errors.title = title.length < 4 ? 'min 4 symbols' : '';
    errors.description = description.length < 8 ? 'min 8 symbols' : '';
    errors.date = new Date(date).getTime() > new Date().getTime() ? 'Choose a date from past' : '';

    const values: string[] = Object.values(errors);
    values.forEach((item) => {
      if (item.length > 0) {
        counter++;
      }
    });

    this.setState({
      errors: errors,
    });
    return counter === 0;
  }

  async getData(): Promise<iVisit> {
    const item: iFormRefs = this.state.formRefs;

    const reader = new FileReader();
    const files = item.upload.current?.files;
    let formData = this.state.form;
    if (files) {
      reader.readAsDataURL(files[0]);
    }
    async function fileLoaded(reader: FileReader) {
      return new Promise<void>((resolve) => (reader.onloadend = () => resolve()));
    }
    await fileLoaded(reader);
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
        upload: reader.result as string,
      };
    }
    return formData;
  }

  async renderCard(formData: iVisit) {
    const updatedVisits: iVisit[] = this.state.visits;
    updatedVisits.push(formData);
    this.setState({
      visits: updatedVisits,
    });
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (await this.isValid()) {
      this.renderCard(this.state.form);
      this.resetForm(e);
      e.target.removeEventListener('input', this.isValid.bind(this));
    } else {
      e.target.addEventListener('input', this.isValid.bind(this));
    }
  }

  resetForm(e: React.FormEvent<HTMLFormElement>) {
    (e.target as HTMLFormElement).reset();
    // DOM manipulation just to change btn text, because reset doesn't fires onChange on uncontrolled component
    const fileInputLabel = document.querySelector('.upload .btn') as HTMLLabelElement;
    fileInputLabel.innerText = 'Upload a photo';
    this.setState({
      errors: {
        name: '',
        title: '',
        description: '',
        date: '',
        country: '',
        alone: '',
        purpose: '',
        upload: '',
        counter: 0,
      },
    });
  }

  render() {
    const cards = this.state.visits.map((item, index) => {
      return <Visit key={`${index}`} value={item} />;
    });

    return (
      <>
        <h2>Post your visit of a country!</h2>
        <Form
          data={this.state.form}
          refs={this.state.formRefs}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
        <ul className="visitList">
          <Visit key="test" value={testVisit} />
          {cards}
        </ul>
      </>
    );
  }
}
