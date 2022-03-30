import { render, screen } from '@testing-library/react';
import { AppRouter } from '../AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('Card', () => {
  render(
    <MemoryRouter>
      <AppRouter />
    </MemoryRouter>
  );
  it('check for Japan card', () => {
    const elem = screen.getByText('Japan');
    expect(elem).toBeInTheDocument();
  });
});
