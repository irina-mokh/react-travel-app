import { SearchBar } from '../components/Searchbar/SearchBar';
import { Cards } from '../components/Cards/Cards';

export function Home() {
  return (
    <>
      <h2>Welcome to the homepage!</h2>
      <SearchBar />
      <Cards />
    </>
  );
}
