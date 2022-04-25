import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import { App } from './components/App';
import { CitiesStoreProvider } from './store/cities';
import { VisitsStoreProvider } from './store/visits';

ReactDOM.render(
  <React.StrictMode>
    <CitiesStoreProvider>
      <VisitsStoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </VisitsStoreProvider>
    </CitiesStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
