import { Form } from '../components/Form';
import { useState } from 'react';
import { VisitCardsList } from '../components/VisitCardsList';
import { testVisit } from '../components/VisitCardsList/testVisit';
import { iVisit } from '../types';

export const Visits = () => {
  const [visits, setVisits] = useState([testVisit]);

  return (
    <>
      <h2>Post your visit of a country!</h2>
      <Form
        updateData={(formData: iVisit) => setVisits((prevVisits) => [...prevVisits, formData])}
      />
      <VisitCardsList data={visits} />
    </>
  );
};
