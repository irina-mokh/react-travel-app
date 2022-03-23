import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
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

export default Layout;
