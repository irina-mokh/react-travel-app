import { render, screen } from '@testing-library/react';
import { Form } from '../Form';

describe('Form', () => {
  it('renders', () => {
    render(<Form />);
    expect(screen.getByTestId('visit-form')).toBeInTheDocument();
  });
  it('submit-button disabled on render', () => {
    render(<Form />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
