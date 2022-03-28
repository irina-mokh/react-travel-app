import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="Header">
          <img src={logo} className="Header__logo" alt="logo" />
          <nav className="Header__nav">
            <Link className="App__link" to="/">
              Home
            </Link>
            <Link className="App__link" to="/about">
              About
            </Link>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
