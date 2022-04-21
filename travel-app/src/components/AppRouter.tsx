import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Homepage';
import { About } from '../pages/Aboutpage';
import { NotFound } from '../pages/Notfound';
import { Layout } from './Layout';
import { Visits } from '../pages/Visitspage';
import { Cities } from '../pages/Citiespage';

export class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="visits" element={<Visits />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cities" element={<Cities />} />
        </Route>
      </Routes>
    );
  }
}
