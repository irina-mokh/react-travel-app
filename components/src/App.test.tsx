import { render, screen } from '@testing-library/react';
import AppRouter from './components/AppRouter';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('render without crash', async () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );
  });
});
