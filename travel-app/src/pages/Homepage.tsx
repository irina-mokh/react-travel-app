import { SearchBar } from '../components/Searchbar';
import { CountryCardsList } from '../components/CountryCardsList';

export function Home() {
  return (
    <>
      <h2>Welcome to the homepage!</h2>
      <SearchBar />
      <CountryCardsList />
    </>
  );
}
