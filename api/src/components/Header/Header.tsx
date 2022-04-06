import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <nav className="header__nav">
        <Link className="app__link" to="/">
          Home
        </Link>
        <Link className="app__link" to="/about">
          About
        </Link>
        <Link className="app__link" to="/visits">
          Visits
        </Link>
      </nav>
    </header>
  );
}
