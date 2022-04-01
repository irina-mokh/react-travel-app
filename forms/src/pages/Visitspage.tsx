import { Form } from '../components/Form/Form';
import React from 'react';
import { FormState } from '../components/Form/Form';

interface VisitsProps {
  value?: string;
}

export class Visits extends React.Component {
  data: FormState;
  constructor(props: VisitsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.data = {
      name: React.createRef(),
      title: React.createRef(),
      description: React.createRef(),
      date: React.createRef(),
      country: React.createRef(),
      alone: React.createRef(),
      purpose: React.createRef(),
      upload: React.createRef(),
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submit');
    if (isValid()) {
      //TODO: create cards
    }
  }
  render() {
    return (
      <>
        <h2>Post your visit of a country!</h2>
        <Form handleSubmit={this.handleSubmit} data={this.data} />
      </>
    );
  }
}

function isValid() {
  return true;
  // TODO validation
}
