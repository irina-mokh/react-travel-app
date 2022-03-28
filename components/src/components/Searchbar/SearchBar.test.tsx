import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppRouter from '../AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('Search bar', () => {
  render(
    <MemoryRouter>
      <AppRouter />
    </MemoryRouter>
  );
  const elem = screen.getByLabelText('search');
  it('renders', () => {
    expect(elem).toBeInTheDocument();
  });

  it('updates', () => {
    // userEvent.type(elem, 'Hello, World!');
    // expect(elem).toHaveValue('Hello, World!');
  });
});
