import { render, screen, waitFor } from '@testing-library/react';
import { CountryCardsList } from '../CountryCardsList';

describe('Cards list', () => {
  it('check amount for query "bel"', async () => {
    render(<CountryCardsList query="bel" />);
    await waitFor(() => screen.getAllByTestId('small-country-card'));
    expect(screen.getAllByTestId('small-country-card')).toHaveLength(3);
  });
  it('check for no results', async () => {
    render(<CountryCardsList query="bbb" />);
    await waitFor(() => screen.getByText('No results'));
    expect(screen.getByText('No results')).toBeInTheDocument();
  });
  it('check for Loading element', async () => {
    render(<CountryCardsList query="b" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
