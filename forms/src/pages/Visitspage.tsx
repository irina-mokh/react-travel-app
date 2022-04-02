import { Form } from '../components/Form/Form';
import React from 'react';
import { FormState } from '../components/Form/Form';
import { Visit, VisitState } from '../components/Visit/Visit';
import { testVisit } from '../components/Visit/testVisit';

interface VisitsProps {
  value?: string;
}

interface VisitsState {
  form: FormState;
  visits: VisitState[] | [];
}

export class Visits extends React.Component<VisitsProps, VisitsState> {
  constructor(props: VisitsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      form: {
        name: React.createRef(),
        title: React.createRef(),
        description: React.createRef(),
        date: React.createRef(),
        country: React.createRef(),
        alone: React.createRef(),
        purpose: React.createRef(),
        upload: React.createRef(),
      },
      visits: [],
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('submit');
    const item: FormState = this.state.form;
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
        alone: item.alone.current.value === 'on',
        purpose: item.alone.current.value ? 'Travel' : 'Business',
        upload: item.upload.current.value,
      };
      const updatedVisits: VisitState[] = this.state.visits;
      updatedVisits.push(formData);
      this.setState({
        visits: updatedVisits,
      });
      //TODO: create cards
    }
  }
  render() {
    const cards = this.state.visits.map((item, index) => {
      return <Visit key={`${index}`} value={item} />;
    });

    return (
      <>
        <h2>Post your visit of a country!</h2>
        <Form handleSubmit={this.handleSubmit} data={this.state.form} />
        <ul className="visitList">
          <Visit key="test" value={testVisit} />
          {cards}
        </ul>
      </>
    );
  }
}
