import { useState } from 'react';
import { SearchBar } from '../components/Searchbar';
import { CountryCardsList } from '../components/CountryCardsList';

export const Home = () => {
  const [query, setQuery] = useState(localStorage.getItem('country-search') || '');

  return (
    <>
      <h2>Welcome to the homepage!</h2>
      <SearchBar value={query} handleSubmit={setQuery} name="country" />
      <CountryCardsList query={query} />
    </>
  );
};
