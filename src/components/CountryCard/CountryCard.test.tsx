import { render, screen } from '@testing-library/react';
import { CountryCard } from '../CountryCard';
import { data } from '../CountryCardsList/data';

describe('Country Card', () => {
  render(<CountryCard value={data[0]} />);
  it('check for Japan card', () => {
    const elem = screen.getByText('Japan');
    expect(elem).toBeInTheDocument();
  });
});
