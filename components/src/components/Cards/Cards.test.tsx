import { render, screen } from '@testing-library/react';
import AppRouter from '../AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('Cards', () => {
  render(
    <MemoryRouter>
      <AppRouter />
    </MemoryRouter>
  );
  it('amount', () => {
    const elems = screen.getAllByTestId('custom-card');
    expect(elems).toHaveLength(6);
  });
});
