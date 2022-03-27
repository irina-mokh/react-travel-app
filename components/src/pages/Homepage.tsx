import React from 'react';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import data from '../assets/data.json';

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>Welcome to the homepage!</h2>
        <SearchBar value={localStorage.search || null} />
        <Cards value={data} />
      </>
    );
  }
}

export default Home;
