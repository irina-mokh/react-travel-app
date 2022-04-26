import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Homepage';
import { About } from '../pages/Aboutpage';
import { NotFound } from '../pages/Notfound';
import { Layout } from './Layout';
import { Visits } from '../pages/Visitspage';
import { Cities } from '../pages/Citiespage';
import { City } from '../pages/CityPage/Citypage';

export class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="visits" element={<Visits />} />
          <Route path="cities" element={<Cities />} />
          <Route path="city" element={<City />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}
