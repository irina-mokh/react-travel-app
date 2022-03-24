import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Homepage';
import About from './pages/Aboutpage';
import NotFound from './pages/Notfound';
import Layout from './components/Layout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
