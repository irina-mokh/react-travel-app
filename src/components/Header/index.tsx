import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <nav className="header__nav">
        <Link className="header__link" to="/">
          Home
        </Link>
        <Link className="header__link" to="/about">
          About
        </Link>
        <Link className="header__link" to="/visits">
          Visits
        </Link>
        <Link className="header__link" to="/cities">
          Cities
        </Link>
      </nav>
    </header>
  );
}
