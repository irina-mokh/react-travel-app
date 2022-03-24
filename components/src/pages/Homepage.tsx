import React from 'react';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <>
        <main className="main">
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
          <SearchBar value={localStorage.search || null} />
        </main>
      </>
    );
  }
}

export default Home;
