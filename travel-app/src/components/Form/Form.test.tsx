import { render, screen } from '@testing-library/react';
import { Form } from '../Form';

describe('Form', () => {
  it('renders', () => {
    render(<Form updateData={() => {}} />);
    expect(screen.getByTestId('visit-form')).toBeInTheDocument();
  });
  it('submit-button disabled on render', () => {
    render(<Form updateData={() => {}} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
