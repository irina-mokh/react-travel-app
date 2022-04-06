import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRouter } from '../AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('Search bar', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );
    const elem = screen.getByLabelText('search');
    expect(elem).toBeInTheDocument();
  });

  it('updates', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );
    const elem = screen.getByLabelText('search');
    const test = 'Hello, World!';
    userEvent.clear(elem);
    userEvent.type(elem, test);
    expect(screen.getByLabelText('search')).toHaveValue(test);
  });
});
