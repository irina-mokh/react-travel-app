import { Form } from '../components/Form';
import React from 'react';
import { VisitCardsList } from '../components/VisitCardsList';
import { testVisit } from '../components/VisitCardsList/testVisit';
import { iVisit, iFormRefs, iErrors } from '../types';

interface VisitsProps {
  value?: string;
}

interface VisitsState {
  visits: iVisit[] | [];
}

export class Visits extends React.Component<VisitsProps, VisitsState> {
  constructor(props: VisitsProps) {
    super(props);
    this.state = {
      visits: [testVisit],
    };
  }

  render() {
    console.log(this.state);

    return (
      <>
        <h2>Post your visit of a country!</h2>
        <Form
          updateData={(formData: iVisit) => {
            this.setState((state) => ({
              visits: [...state.visits, formData],
            }));
          }}
        />
        <VisitCardsList data={this.state.visits} />
      </>
    );
  }
}
