import { render, screen } from '@testing-library/react';
import { Header } from './';
import { MemoryRouter } from 'react-router-dom';

test('renders header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const elem = screen.getByRole('banner');
  expect(elem).toBeInTheDocument();
});
