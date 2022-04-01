import { Form } from '../components/Form/Form';
import React from 'react';

interface VisitsProps {
  value?: string;
}

export class Visits extends React.Component {
  constructor(props: VisitsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submit!');
    //TODO: validate
    //TODO: create cards
  }
  render() {
    return (
      <>
        <h2>Post your visit of a country!</h2>
        <Form handleSubmit={this.handleSubmit} />
      </>
    );
  }
}
