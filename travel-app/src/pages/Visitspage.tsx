import { Form } from '../components/Form';
import { VisitCardsList } from '../components/VisitCardsList';

export const Visits = () => {
  return (
    <>
      <h2>Post your visit of a country!</h2>
      <Form />
      <VisitCardsList />
    </>
  );
};
