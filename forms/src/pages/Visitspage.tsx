import { Form } from '../components/Form/Form';
import React from 'react';
import { FormState } from '../components/Form/Form';
import { Visit } from '../components/Visit/Visit';
import { testVisit } from '../components/Visit/testVisit';
import { iVisit } from '../types';

interface VisitsProps {
  value?: string;
}

interface VisitsState {
  formRefs: FormState;
  visits: iVisit[] | [];
}

export class Visits extends React.Component<VisitsProps, VisitsState> {
  constructor(props: VisitsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
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
    };
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const item: FormState = this.state.formRefs;
    const updatedVisits: iVisit[] = this.state.visits;
    const reader = new FileReader();
    const files = item.upload.current?.files;
    if (files) {
      reader.readAsDataURL(files[0]);
    }
    reader.addEventListener('loadend', () => {
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
        const formData = {
          name: item.name.current.value,
          title: item.title.current.value,
          description: item.description.current.value,
          date: item.date.current.value,
          country: item.country.current.value,
          alone: item.alone.current.checked,
          purpose: item.purpose.current.checked ? 'Travel' : 'Business',
          upload: reader.result as string,
        };

        updatedVisits.push(formData);
        this.setState({
          visits: updatedVisits,
        });

        (e.target as HTMLFormElement).reset();
        // DOM manipulation just to change btn text, because reset doesn't fires onChange on uncontrolled component
        const fileInputLabel = document.querySelector('.upload .btn') as HTMLLabelElement;
        fileInputLabel.innerText = 'Upload a photo';
      }
    });
  }

  render() {
    const cards = this.state.visits.map((item, index) => {
      return <Visit key={`${index}`} value={item} />;
    });

    return (
      <>
        <h2>Post your visit of a country!</h2>
        <Form handleSubmit={this.handleSubmit} data={this.state.formRefs} />
        <ul className="visitList">
          <Visit key="test" value={testVisit} />
          {cards}
        </ul>
      </>
    );
  }
}
