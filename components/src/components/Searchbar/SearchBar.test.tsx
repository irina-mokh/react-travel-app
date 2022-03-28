import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import AppRouter from '../AppRouter';
import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Search bar', () => {
  render(
    <MemoryRouter>
      <AppRouter />
      <SearchBar value="some value" />
    </MemoryRouter>
  );
  it('renders', () => {
    const elem = screen.getByLabelText('search');
    expect(elem).toBeInTheDocument();
  });
});
