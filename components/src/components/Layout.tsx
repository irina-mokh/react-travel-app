import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main>
          <Outlet />
        </main>
        <footer className="footer">2022</footer>
      </>
    );
  }
}

export default Layout;
