import React from 'react';
import { SearchBar } from '../components/Searchbar/SearchBar';
import { Cards } from '../components/Cards/Cards';

interface HomeProps {
  value?: string;
}

interface HomeState {
  searchQuery: string;
  searchInput: React.RefObject<HTMLInputElement>;
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      searchInput: React.createRef<HTMLInputElement>(),
      searchQuery: localStorage.getItem('search') || '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();
    if (this.state.searchInput.current) {
      const query: string = this.state.searchInput.current.value;
      localStorage.setItem('search', query);
      this.setState({
        searchQuery: query,
      });
    }
  }

  render() {
    return (
      <>
        <h2>Welcome to the homepage!</h2>
        <SearchBar innerRef={this.state.searchInput} handleSubmit={this.handleSearch} />
        <Cards query={this.state.searchQuery} />
      </>
    );
  }
}
