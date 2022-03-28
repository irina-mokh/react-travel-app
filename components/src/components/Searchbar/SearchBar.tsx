import React from 'react';
interface SearchProps {
  value: string;
}

interface SearchState {
  value: string;
}

class SearchBar extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target?.value });
    // localStorage.setItem('search', e.target.value);
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.value);
  }

  render() {
    return (
      <input
        type="search"
        className="search"
        onChange={this.handleChange}
        placeholder="Search..."
        aria-label="search"
        value={this.state.value}
      />
    );
  }
}

export default SearchBar;
