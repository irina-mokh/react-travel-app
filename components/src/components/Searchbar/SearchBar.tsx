import React from 'react';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
interface SearchProps {
  value?: string;
}

interface SearchState {
  value: string;
}

export class SearchBar extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('search') || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target?.value });
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.value);
  }

  clear() {
    console.log('clear');
    this.setState({ value: '' });
  }

  render() {
    console.log(this.state.value);
    return (
      <div className="search-bar">
        <input
          type="search"
          className="search"
          onChange={this.handleChange}
          placeholder="Search..."
          aria-label="search"
          value={this.state.value}
        />
        <button className="search-bar__clear" onClick={this.clear}>
          <Close className="search-bar__clear__icon" />
        </button>
      </div>
    );
  }
}
