import { render, screen } from '@testing-library/react';
import { AppRouter } from '../AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('render without crash', async () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );
  });
});
