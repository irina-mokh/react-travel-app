import React from 'react';
import { AppRouter } from '../AppRouter';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppRouter />
      </div>
    );
  }
}
