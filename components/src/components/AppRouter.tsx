import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Homepage';
import About from '../pages/Aboutpage';
import NotFound from '../pages/Notfound';
import Layout from './Layout/Layout';

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}

export default AppRouter;
