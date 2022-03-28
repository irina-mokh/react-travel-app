import React from 'react';
import './App.scss';
import AppRouter from './components/AppRouter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
